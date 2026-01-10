'use client'

import { useEffect } from 'react'
import { useWalletStore } from '@/components/toolbox/stores/walletStore'
import { createCoreWalletClient } from '@/components/toolbox/coreViem'
import { networkIDs } from '@/lib/luxfi-networkIDs'

export function WalletBootstrap() {
  const setCoreWalletClient = useWalletStore((s) => s.setCoreWalletClient)
  const setWalletEVMAddress = useWalletStore((s) => s.setWalletEVMAddress)
  const setWalletChainId = useWalletStore((s) => s.setWalletChainId)
  const setPChainAddress = useWalletStore((s) => s.setPChainAddress)
  const setCoreEthAddress = useWalletStore((s) => s.setCoreEthAddress)
  const setIsTestnet = useWalletStore((s) => s.setIsTestnet)
  const setLuxNetworkID = useWalletStore((s) => s.setLuxNetworkID)
  const setEvmChainName = useWalletStore((s) => s.setEvmChainName)
  const updateAllBalances = useWalletStore((s) => s.updateAllBalances)
  const setBootstrapped = useWalletStore((s) => s.setBootstrapped)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.lux) return;

    const onChainChanged = async (chainId: string | number) => {
      const numericId = typeof chainId === 'string' ? Number.parseInt(chainId, 16) : chainId
      setWalletChainId(numericId)

      // Update network metadata
      try {
        const client = await createCoreWalletClient(useWalletStore.getState().walletEVMAddress as `0x${string}`)
        if (client) {
          const data = await client.getEthereumChain()
          const { isTestnet, chainName } = data
          setLuxNetworkID(isTestnet ? networkIDs.TestnetID : networkIDs.MainnetID)
          setIsTestnet(isTestnet)
          setEvmChainName(chainName)
        }
      } catch { }

      // Refresh balances after chain switches
      try { updateAllBalances() } catch { }
    }

    const handleAccountsChanged = async (accounts: string[]) => {
      if (!accounts || accounts.length === 0) {
        // Wallet is locked or disconnected - clear all wallet state
        setWalletEVMAddress('')
        setPChainAddress('')
        setCoreEthAddress('')
        setWalletChainId(0)
        // Keep network settings (isTestnet, luxNetworkID) as they are user preferences
        return
      }
      if (accounts.length > 1) {
        // Not supported; pick first for now
        accounts = [accounts[0]]
      }

      const account = accounts[0] as `0x${string}`
      const client = await createCoreWalletClient(account)
      if (!client) return

      setCoreWalletClient(client)
      setWalletEVMAddress(account)

      try {
        const [pAddr, cAddr, chainInfo, chainId] = await Promise.all([
          client.getPChainAddress().catch(() => ''),
          client.getCorethAddress().catch(() => ''),
          client.getEthereumChain().catch(() => ({ isTestnet: undefined as any, chainName: '' } as any)),
          client.getChainId().catch(() => 0),
        ])
        if (pAddr) setPChainAddress(pAddr)
        if (cAddr) setCoreEthAddress(cAddr)
        if (chainId) {
          const numericId = typeof chainId === 'string' ? parseInt(chainId as any, 16) : chainId
          setWalletChainId(numericId)
        }
        if (typeof chainInfo?.isTestnet === 'boolean') {
          setIsTestnet(chainInfo.isTestnet)
          setLuxNetworkID(chainInfo.isTestnet ? networkIDs.TestnetID : networkIDs.MainnetID)
          setEvmChainName(chainInfo.chainName)
        }
      } catch { }

      // Initial balance refresh after restoring the session
      try { updateAllBalances() } catch { }
    }

    try {
      setBootstrapped(true)

      if (window.lux.on) {
        window.lux.on('accountsChanged', handleAccountsChanged)
        window.lux.on('chainChanged', onChainChanged)
      }
    } catch { }

    return () => {
      try {
        if (window.lux?.removeListener) {
          window.lux.removeListener('accountsChanged', handleAccountsChanged as any)
          window.lux.removeListener('chainChanged', onChainChanged as any)
        }
      } catch { }
    }
  }, [setCoreWalletClient, setWalletEVMAddress, setWalletChainId, setPChainAddress, setCoreEthAddress, setIsTestnet, setLuxNetworkID, setEvmChainName, updateAllBalances])

  return null
}

