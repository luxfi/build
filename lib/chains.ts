import { defineChain } from 'viem'

export const lux = defineChain({
  id: 96369,
  name: 'Lux',
  nativeCurrency: {
    decimals: 18,
    name: 'LUX',
    symbol: 'LUX',
  },
  rpcUrls: {
    default: { http: ['https://api.lux.network/ext/bc/C/rpc'] },
  },
  blockExplorers: {
    default: { name: 'Lux Explorer', url: 'https://explore.lux.network' },
  },
})

export const luxTestnet = defineChain({
  id: 96368,
  name: 'Lux Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'LUX',
    symbol: 'LUX',
  },
  rpcUrls: {
    default: { http: ['https://api.lux-test.network/ext/bc/C/rpc'] },
  },
  blockExplorers: {
    default: { name: 'Lux Testnet Explorer', url: 'https://explore.lux-test.network' },
  },
  testnet: true,
})
