/**
 * Lux Chain Definitions for viem
 *
 * These chain definitions are compatible with viem's Chain type
 */
import { defineChain } from 'viem'

export const lux = defineChain({
  id: 7979,
  name: 'Lux',
  nativeCurrency: {
    decimals: 18,
    name: 'LUX',
    symbol: 'LUX',
  },
  rpcUrls: {
    default: {
      http: ['https://api.lux.network/ext/bc/C/rpc'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Lux Explorer',
      url: 'https://explorer.lux.network',
    },
  },
  contracts: {},
})

export const luxTestnet = defineChain({
  id: 8888,
  name: 'Lux Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'LUX',
    symbol: 'LUX',
  },
  rpcUrls: {
    default: {
      http: ['https://api.lux-test.network/ext/bc/C/rpc'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Lux Testnet Explorer',
      url: 'https://explorer.lux-test.network',
    },
  },
  testnet: true,
  contracts: {},
})
