/**
 * P-Chain Client for Lux Network
 *
 * A client for interacting with the Lux P-Chain RPC API
 */
import type { Chain } from 'viem'
import { lux, luxTestnet } from './chains'

export interface PChainClientConfig {
  chain: Chain
  transport: {
    type: 'http' | 'custom'
    provider?: any
  }
}

export interface PChainClient {
  chain: Chain
  rpcUrl: string
  request: <T = any>(params: { method: string; params: any }) => Promise<T>
  getTxStatus: (params: { txID: string }) => Promise<{ status: string }>
}

/**
 * Creates a P-Chain client for interacting with the Lux P-Chain
 */
export function createPChainClient(config: PChainClientConfig): PChainClient {
  const { chain, transport } = config

  // Determine the P-Chain RPC URL based on network
  const isTestnet = chain.id === luxTestnet.id
  const baseUrl = isTestnet
    ? 'https://api.lux-test.network'
    : 'https://api.lux.network'
  const rpcUrl = `${baseUrl}/ext/bc/P`

  const request = async <T = any>(params: { method: string; params: any }): Promise<T> => {
    const response = await fetch(rpcUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: params.method,
        params: params.params,
      }),
    })

    if (!response.ok) {
      throw new Error(`P-Chain RPC error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()

    if (data.error) {
      throw new Error(data.error.message || 'P-Chain RPC error')
    }

    return data.result as T
  }

  const getTxStatus = async (params: { txID: string }): Promise<{ status: string }> => {
    return request({
      method: 'platform.getTxStatus',
      params: { txID: params.txID },
    })
  }

  return {
    chain,
    rpcUrl,
    request,
    getTxStatus,
  }
}
