/**
 * @luxfi/avacloud-sdk adapter
 * Provides compatibility for code expecting the AvaCloud SDK
 */

export enum GlobalParamNetwork {
  Mainnet = "mainnet",
  Testnet = "fuji"
}

export interface SDKConfig {
  apiKey?: string
  serverURL?: string
}

export class AvaCloudSDK {
  private config: SDKConfig
  public data: {
    primaryNetwork: {
      listL1Validators: (params: any) => Promise<{ result: { validators: any[] } }>
    }
  }

  constructor(config: SDKConfig = {}) {
    this.config = config

    this.data = {
      primaryNetwork: {
        listL1Validators: async (params: any) => {
          // Stub implementation - returns empty validators
          return { result: { validators: [] } }
        }
      }
    }
  }
}

// Re-export for components imports
export { GlobalParamNetwork as GlobalParamNetworkEnum }
