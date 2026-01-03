/**
 * P-Chain methods for Lux
 */

export enum PChainTransactionType {
  AddValidatorTx = 'AddValidatorTx',
  AddDelegatorTx = 'AddDelegatorTx',
  CreateSubnetTx = 'CreateSubnetTx',
  CreateChainTx = 'CreateChainTx',
  AddSubnetValidatorTx = 'AddSubnetValidatorTx',
  RemoveSubnetValidatorTx = 'RemoveSubnetValidatorTx',
  TransformSubnetTx = 'TransformSubnetTx',
  ConvertSubnetToL1Tx = 'ConvertSubnetToL1Tx',
  RegisterL1ValidatorTx = 'RegisterL1ValidatorTx',
  SetL1ValidatorWeightTx = 'SetL1ValidatorWeightTx',
  IncreaseL1ValidatorBalanceTx = 'IncreaseL1ValidatorBalanceTx',
  DisableL1ValidatorTx = 'DisableL1ValidatorTx',
}

export interface GetTxParams {
  txID: string
  encoding?: 'json' | 'hex'
}

export interface GetTxResponse {
  tx: {
    unsignedTx: {
      networkID: number
      blockchainID: string
      outputs?: any[]
      inputs?: any[]
      memo?: string
      subnetID?: string
      subnetId?: string
      chainName?: string
      vmID?: string
      genesisData?: string
      [key: string]: any
    }
    credentials?: any[]
  }
  encoding: string
}

/**
 * Get a P-Chain transaction by ID
 */
export async function getTx(
  client: { request: (params: any) => Promise<any> },
  params: GetTxParams
): Promise<GetTxResponse> {
  const { txID, encoding = 'json' } = params

  const response = await client.request({
    method: 'platform.getTx',
    params: {
      txID,
      encoding,
    },
  })

  return response
}

/**
 * Get the current P-Chain height
 */
export async function getHeight(
  client: { request: (params: any) => Promise<any> }
): Promise<{ height: string }> {
  const response = await client.request({
    method: 'platform.getHeight',
    params: {},
  })

  return response
}

/**
 * Get subnet info
 */
export async function getSubnets(
  client: { request: (params: any) => Promise<any> },
  params?: { ids?: string[] }
): Promise<{ subnets: any[] }> {
  const response = await client.request({
    method: 'platform.getSubnets',
    params: params || {},
  })

  return response
}

/**
 * Get blockchain info
 */
export async function getBlockchains(
  client: { request: (params: any) => Promise<any> }
): Promise<{ blockchains: any[] }> {
  const response = await client.request({
    method: 'platform.getBlockchains',
    params: {},
  })

  return response
}
