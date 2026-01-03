/**
 * Lux Wallet SDK
 *
 * A viem-compatible wallet SDK for Lux Network
 */

// Main exports
export { createLuxWalletClient, type LuxWalletClient, type LuxWalletClientConfig } from './client'
export { lux, luxTestnet } from './chains'

// P-Chain client
export { createPChainClient, type PChainClient, type PChainClientConfig } from './pChainClient'

// Account utilities
export { publicKeyToXPAddress } from './accounts'

// P-Chain methods
export * from './methods/pChain'

// Wallet methods
export * from './methods/wallet'
export * from './methods/wallet/pChain'
