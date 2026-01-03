/**
 * Lux Wallet Client
 *
 * A viem-compatible wallet client for Lux that works with Core wallet
 */
import {
  createWalletClient,
  custom,
  type Chain,
  type WalletClient,
  type Transport,
  type Account,
  type CustomTransport,
} from 'viem'
import { lux, luxTestnet } from './chains'

export interface LuxWalletClientConfig {
  chain: Chain
  transport: {
    type: 'custom'
    provider: any // Core wallet provider (window.lux)
  }
  account?: `0x${string}`
}

export type LuxWalletClient = WalletClient<CustomTransport, Chain, Account>

/**
 * Creates a Lux wallet client compatible with viem
 */
export function createLuxWalletClient(config: LuxWalletClientConfig): LuxWalletClient {
  const { chain, transport, account } = config

  // Create a custom transport from the Core wallet provider
  const customTransport = custom(transport.provider)

  // Create the wallet client
  const client = createWalletClient({
    chain,
    transport: customTransport,
    account: account as `0x${string}` | undefined,
  })

  return client as LuxWalletClient
}

export { lux, luxTestnet }
