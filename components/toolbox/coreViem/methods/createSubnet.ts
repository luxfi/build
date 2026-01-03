import type { LuxWalletClient } from "@luxfi/cloud";

export type CreateSubnetParams = {
    subnetOwners: string[];
}

export async function createSubnet(client: LuxWalletClient, params: CreateSubnetParams): Promise<string> {
    // Prepare the transaction using Lux SDK
    const txnRequest = await client.pChain.prepareCreateSubnetTxn({
        subnetOwners: {
            addresses: params.subnetOwners,
            threshold: 1, // Default threshold, can be made configurable if needed
        },
    });

    // Send the transaction using Lux SDK's sendXPTransaction
    const result = await client.sendXPTransaction(txnRequest);

    return result.txHash;
}
