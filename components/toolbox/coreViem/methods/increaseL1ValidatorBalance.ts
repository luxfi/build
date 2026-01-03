import type { LuxWalletClient } from "@luxfi/cloud";

export type IncreaseL1ValidatorBalanceParams = {
    validationId: string;
    balanceInLux: number;
}

export async function increaseL1ValidatorBalance(
    client: LuxWalletClient, 
    params: IncreaseL1ValidatorBalanceParams
): Promise<string> {
    // Prepare the transaction using Lux SDK
    const txnRequest = await client.pChain.prepareIncreaseL1ValidatorBalanceTxn({
        validationId: params.validationId,
        balanceInLux: params.balanceInLux,
    });

    // Send the transaction
    const result = await client.sendXPTransaction(txnRequest);

    return result.txHash;
}

