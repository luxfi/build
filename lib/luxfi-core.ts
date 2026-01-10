/**
 * @luxfi/core adapter - provides Lux SDK compatibility
 *
 * This adapter provides stub implementations for code that expects @luxfi/core
 */

export interface LuxConfig {
  network?: 'mainnet' | 'testnet'
  apiKey?: string
}

export class Lux {
  private baseUrl: string
  public metrics: {
    chains: {
      getMetrics: (params: any) => AsyncIterable<any>
    }
  }
  public primaryNetwork: {
    getBlockchains: () => Promise<any>
    listL1Validators: (params: any) => AsyncIterable<any>
  }
  public data: {
    evm: {
      chains: {
        getChain: (params: any) => Promise<any>
      }
      balances: {
        getNativeBalance: (params: any) => Promise<any>
        listErc20Balances: (params: any) => AsyncIterable<any>
      }
      blocks: {
        getBlock: (params: any) => Promise<any>
      }
      transactions: {
        getTransaction: (params: any) => Promise<any>
        listTransactions: (params: any) => AsyncIterable<any>
      }
    }
  }

  constructor(config: LuxConfig = {}) {
    this.baseUrl = config.network === 'testnet'
      ? 'https://glacier-api.lux-test.network'
      : 'https://glacier-api.lux.network'

    // Metrics API
    this.metrics = {
      chains: {
        getMetrics: async function* (params: any) {
          // Stub implementation - returns empty results
          yield { result: { results: [] } }
        }
      }
    }

    // Primary Network API
    this.primaryNetwork = {
      getBlockchains: async () => ({ blockchains: [] }),
      listL1Validators: async function* (params: any) {
        yield { validators: [] }
      }
    }

    // Data API
    this.data = {
      evm: {
        chains: {
          getChain: async (params: any) => ({ chainId: params.chainId })
        },
        balances: {
          getNativeBalance: async (params: any) => ({ balance: '0' }),
          listErc20Balances: async function* (params: any) {
            yield { balances: [] }
          }
        },
        blocks: {
          getBlock: async (params: any) => null
        },
        transactions: {
          getTransaction: async (params: any) => null,
          listTransactions: async function* (params: any) {
            yield { transactions: [] }
          }
        }
      }
    }
  }
}

// Type exports for components
export interface ActiveValidatorDetails {
  nodeId: string
  startTime: number
  endTime: number
  stakeAmount: string
  validationRewardOwner?: {
    addresses: string[]
    threshold: number
  }
}

export interface Subnet {
  subnetId: string
  controlKeys: string[]
  threshold: number
}

// Cloud client stub for backwards compatibility
export class Cloud {
  constructor(config?: { BASE?: string }) {}
}

export type LuxCloud = Cloud
