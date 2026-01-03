/**
 * P-Chain wallet methods for staking operations
 */
import type { LuxWalletClient } from '../../client'

export interface PrepareAddPermissionlessValidatorTxnParams {
  nodeID: string
  start: bigint
  end: bigint
  weight: bigint
  rewardAddresses: string[]
  delegationFeeRate?: number
  subnetID?: string
}

export interface PrepareAddPermissionlessValidatorTxnResponse {
  unsignedTx: string
  txID: string
}

/**
 * Prepare an add permissionless validator transaction
 */
export async function prepareAddPermissionlessValidatorTxn(
  client: LuxWalletClient,
  params: PrepareAddPermissionlessValidatorTxnParams
): Promise<PrepareAddPermissionlessValidatorTxnResponse> {
  const response = await client.request({
    method: 'lux_prepareAddPermissionlessValidatorTx',
    params: [params],
  })

  return response as PrepareAddPermissionlessValidatorTxnResponse
}

export interface PrepareAddPermissionlessDelegatorTxnParams {
  nodeID: string
  start: bigint
  end: bigint
  weight: bigint
  rewardAddresses: string[]
  subnetID?: string
}

/**
 * Prepare an add permissionless delegator transaction
 */
export async function prepareAddPermissionlessDelegatorTxn(
  client: LuxWalletClient,
  params: PrepareAddPermissionlessDelegatorTxnParams
): Promise<PrepareAddPermissionlessValidatorTxnResponse> {
  const response = await client.request({
    method: 'lux_prepareAddPermissionlessDelegatorTx',
    params: [params],
  })

  return response as PrepareAddPermissionlessValidatorTxnResponse
}
