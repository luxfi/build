/**
 * Wallet methods for Lux Core wallet
 */
import type { LuxWalletClient } from '../client'

export interface SendXPTransactionParams {
  transaction: string
  chainAlias: 'P' | 'X'
}

export interface SendXPTransactionResponse {
  txID: string
}

/**
 * Send a signed X/P chain transaction through Core wallet
 */
export async function sendXPTransaction(
  client: LuxWalletClient,
  params: SendXPTransactionParams
): Promise<SendXPTransactionResponse> {
  const response = await client.request({
    method: 'lux_sendTransaction',
    params: [
      {
        transactionHex: params.transaction,
        chainAlias: params.chainAlias,
      },
    ],
  })

  return response as SendXPTransactionResponse
}
