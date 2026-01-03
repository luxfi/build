"use client";

import { useState } from 'react'
import { Button } from '@/components/toolbox/components/Button'
import { Input } from '@/components/toolbox/components/Input'
import { WalletRequirementsConfigKey } from '@/components/toolbox/hooks/useWalletRequirements'
import { BaseConsoleToolProps, ConsoleToolMetadata, withConsoleToolMetadata } from '../../components/WithConsoleToolMetadata'
import { useWalletStore } from '@/components/toolbox/stores/walletStore'
import { Success } from '@/components/toolbox/components/Success'
import { useWallet } from '@/components/toolbox/hooks/useWallet'
import { prepareAddPermissionlessValidatorTxn } from '@luxfi/cloud/methods/wallet/pChain'
import { sendXPTransaction } from '@luxfi/cloud/methods/wallet'
import { networkIDs } from 'luxfi'
import { AddValidatorControls } from '@/components/toolbox/components/ValidatorListInput/AddValidatorControls'
import type { ConvertToL1Validator } from '@/components/toolbox/components/ValidatorListInput'
import { Steps, Step } from 'fumadocs-ui/components/steps'
import useConsoleNotifications from "@/hooks/useConsoleNotifications";
import { generateConsoleToolGitHubUrl } from "@/components/toolbox/utils/github-url";
import { Alert } from '@/components/toolbox/components/Alert';

// Network-specific constants
const NETWORK_CONFIG = {
  testnet: {
    minStakeLux: 1,
    minEndSeconds: 24 * 60 * 60, // 24 hours
    defaultDays: 1,
    presets: [
      { label: '1 day', days: 1 },
      { label: '1 week', days: 7 },
      { label: '2 weeks', days: 14 }
    ]
  },
  mainnet: {
    minStakeLux: 2000,
    minEndSeconds: 14 * 24 * 60 * 60, // 14 days
    defaultDays: 14,
    presets: [
      { label: '2 weeks', days: 14 },
      { label: '1 month', days: 30 },
      { label: '3 months', days: 90 }
    ]
  }
}

const MAX_END_SECONDS = 365 * 24 * 60 * 60 // 1 year
const DEFAULT_DELEGATOR_REWARD_PERCENTAGE = "2"
const BUFFER_MINUTES = 5

const metadata: ConsoleToolMetadata = {
  title: "Stake on Primary Network",
  description: "Stake LUX as a validator on Lux's Primary Network to secure the network and earn rewards",
  toolRequirements: [
    WalletRequirementsConfigKey.PChainBalance
  ],
  githubUrl: generateConsoleToolGitHubUrl(import.meta.url)
}

function Stake({ onSuccess }: BaseConsoleToolProps) {
  const { pChainAddress, isTestnet, luxNetworkID } = useWalletStore()
  const { luxWalletClient } = useWallet();

  const [validator, setValidator] = useState<ConvertToL1Validator | null>(null)
  const [stakeInLux, setStakeInLux] = useState<string>("")
  const [endTime, setEndTime] = useState<string>("")
  const [delegatorRewardPercentage, setDelegatorRewardPercentage] = useState<string>(DEFAULT_DELEGATOR_REWARD_PERCENTAGE)

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [txId, setTxId] = useState<string>("")

  const { notify } = useConsoleNotifications();

  // Determine network configuration
  const onTestnet = isTestnet === true || luxNetworkID === networkIDs.TestnetID
  const config = onTestnet ? NETWORK_CONFIG.testnet : NETWORK_CONFIG.mainnet
  const networkName = onTestnet ? 'Testnet' : 'Mainnet'


  // Initialize defaults
  if (!stakeInLux) {
    setStakeInLux(String(config.minStakeLux))
  }

  if (!endTime) {
    const d = new Date()
    d.setDate(d.getDate() + config.defaultDays)
    d.setMinutes(d.getMinutes() + BUFFER_MINUTES)
    const iso = new Date(d.getTime() - d.getTimezoneOffset() * 60000)
      .toISOString()
      .slice(0, 16)
    setEndTime(iso)
  }

  const setEndInDays = (days: number) => {
    const d = new Date()
    d.setDate(d.getDate() + days)
    d.setMinutes(d.getMinutes() + BUFFER_MINUTES)
    const iso = new Date(d.getTime() - d.getTimezoneOffset() * 60000)
      .toISOString()
      .slice(0, 16)
    setEndTime(iso)
  }

  const validateForm = (): string | null => {
    if (!pChainAddress) {
      return 'Connect Core Wallet to get your Platform-Chain address'
    }

    if (!validator) {
      return 'Please provide validator credentials'
    }

    if (!validator.nodeID?.startsWith('NodeID-')) {
      return 'Invalid NodeID format'
    }

    if (!validator.nodePOP.publicKey?.startsWith('0x')) {
      return 'Invalid BLS Public Key format'
    }

    if (!validator.nodePOP.proofOfPossession?.startsWith('0x')) {
      return 'Invalid BLS Signature format'
    }

    const stakeNum = Number(stakeInLux)
    if (!Number.isFinite(stakeNum) || stakeNum < config.minStakeLux) {
      return `Minimum stake is ${config.minStakeLux.toLocaleString()} LUX on ${networkName}`
    }

    if (!endTime) {
      return 'End time is required'
    }

    const endUnix = Math.floor(new Date(endTime).getTime() / 1000)
    const nowUnix = Math.floor(Date.now() / 1000)
    const duration = endUnix - nowUnix

    if (duration < config.minEndSeconds) {
      const minDuration = onTestnet ? '24 hours' : '2 weeks'
      return `End time must be at least ${minDuration} from now (${networkName})`
    }

    if (duration > MAX_END_SECONDS) {
      return 'End time must be within 1 year'
    }

    const drp = Number(delegatorRewardPercentage)
    if (!Number.isFinite(drp) || drp < 2 || drp > 100) {
      return 'Delegator reward percentage must be between 2 and 100'
    }

    return null
  }

  const submitStake = async () => {
    setError(null)
    setTxId("")

    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }

    if (!luxWalletClient) {
      setError("Lux client not found")
      return
    }

    try {
      setIsSubmitting(true)

      const endUnix = Math.floor(new Date(endTime).getTime() / 1000)
      const { tx } = await prepareAddPermissionlessValidatorTxn(luxWalletClient.pChain, {
        nodeId: validator!.nodeID,
        stakeInLux: Number(stakeInLux),
        end: endUnix,
        rewardAddresses: [pChainAddress!],
        delegatorRewardAddresses: [pChainAddress!],
        delegatorRewardPercentage: Number(delegatorRewardPercentage),
        threshold: 1,
        locktime: 0,
        publicKey: validator!.nodePOP.publicKey,
        signature: validator!.nodePOP.proofOfPossession,
      })

      const stakePromise = sendXPTransaction(luxWalletClient.pChain, {
        tx: tx,
        chainAlias: 'P',
      }).then(result => result.txHash);

      notify('addPermissionlessValidator', stakePromise);

      const txHash = await stakePromise;
      setTxId(txHash)
      onSuccess?.()
    } catch (e: any) {
      setError(e.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const isDateButtonActive = (days: number) => {
    if (!endTime) return false
    const targetDate = new Date(Date.now() + days * 24 * 60 * 60 * 1000)
    const selectedDate = new Date(endTime)
    return Math.abs(targetDate.getTime() - selectedDate.getTime()) < 24 * 60 * 60 * 1000
  }

  return (
    <>
        <div className="space-y-6">
          <Steps>
            <Step>
              <h3 className="text-lg font-semibold mb-4">Node Credentials</h3>

              <AddValidatorControls
                defaultAddress={pChainAddress || ""}
                canAddMore={!validator}
                onAddValidator={setValidator}
                isTestnet={false}
              />
              <Alert variant="info" className="mt-4">
                  <strong>Note:</strong> This step queries your <code>info.getNodeID</code> endpoint at <code>127.0.0.1:9650</code>.
                  Make sure you have an LuxGo node running locally before proceeding.
                  <br />
                  If your node runs on a remote server, replace <code>127.0.0.1</code> with your node’s public IP in the command.
              </Alert>


              {validator && (
                <div className="mt-4 p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg">
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">Node ID</div>
                      <div className="font-mono text-xs text-zinc-700 dark:text-zinc-300 break-all">{validator.nodeID}</div>
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">BLS Public Key</div>
                      <div className="font-mono text-xs text-zinc-700 dark:text-zinc-300 break-all">{validator.nodePOP.publicKey}</div>
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">Proof of Possession</div>
                      <div className="font-mono text-xs text-zinc-700 dark:text-zinc-300 break-all">{validator.nodePOP.proofOfPossession}</div>
                    </div>
                  </div>
                </div>
              )}
            </Step>

            <Step>
              <h3 className="text-lg font-semibold mb-4">Stake Configuration</h3>

              <div className="grid gap-4 md:grid-cols-2">
                <Input
                  label="Stake Amount"
                  value={stakeInLux}
                  onChange={setStakeInLux}
                  type="number"
                  step="0.001"
                  min={config.minStakeLux}
                  unit="LUX"
                  helperText={`Minimum: ${config.minStakeLux.toLocaleString()} LUX (${networkName})`}
                  error={error && Number(stakeInLux) < config.minStakeLux ? `Minimum stake is ${config.minStakeLux} LUX` : null}
                />

                <Input
                  label="Delegator Fee"
                  value={delegatorRewardPercentage}
                  onChange={setDelegatorRewardPercentage}
                  type="number"
                  step="0.1"
                  min="2"
                  max="100"
                  unit="%"
                  helperText="Your fee from delegators (2-100%)"
                  error={error && (Number(delegatorRewardPercentage) < 2 || Number(delegatorRewardPercentage) > 100) ? 'Must be between 2-100%' : null}
                />
              </div>
            </Step>

            <Step>
              <h3 className="text-lg font-semibold mb-4">Staking Duration</h3>

              <div className="grid grid-cols-3 gap-2 mb-4">
                {config.presets.map((preset) => (
                  <button
                    key={preset.days}
                    onClick={() => setEndInDays(preset.days)}
                    className={`p-3 rounded-lg border text-sm font-medium transition-all ${isDateButtonActive(preset.days)
                      ? 'bg-blue-50 border-blue-300 text-blue-700 dark:bg-blue-900/30 dark:border-blue-700 dark:text-blue-300'
                      : 'border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800'
                      }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>

              <Input
                label="Custom End Date"
                value={endTime}
                onChange={setEndTime}
                type="datetime-local"
                helperText={`Min: ${onTestnet ? '24 hours' : '2 weeks'} • Max: 1 year`}
                error={(() => {
                  if (!endTime || !error) return null
                  const d = Math.floor(new Date(endTime).getTime() / 1000) - Math.floor(Date.now() / 1000)
                  if (d < config.minEndSeconds) return `Must be at least ${onTestnet ? '24 hours' : '2 weeks'} from now`
                  if (d > MAX_END_SECONDS) return 'Must be within 1 year'
                  return null
                })()}
              />
            </Step>
          </Steps>

          {/* Important Information */}
          <div className="p-4 bg-yellow-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg">
            <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
              <li>Stake will be locked for the entire duration</li>
              <li>Maintain &gt;80% uptime to receive rewards</li>
              <li>Transaction fees apply</li>
            </ul>
          </div>

          {/* Error Message */}
          {error && (
            <Alert variant="error">{error}</Alert>
          )}

          {/* Success Message */}
          {txId && (
            <Success
              label="Transaction Submitted"
              value={txId}
              isTestnet={isTestnet}
            />
          )}

          {/* Submit Button */}
          <Button
            onClick={submitStake}
            disabled={!pChainAddress || isSubmitting}
            loading={isSubmitting}
            loadingText="Processing transaction..."
            variant="primary"
            className="w-full"
            size="lg"
          >
            Stake {networkName} Validator
          </Button>
        </div>
    </>
  )
}

export default withConsoleToolMetadata(Stake, metadata)
