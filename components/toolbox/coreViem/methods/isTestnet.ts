import type { LuxWalletClient } from "@luxfi/cloud";
import type { CoreWalletRpcSchema } from "../rpcSchema";

export async function isTestnet(client: LuxWalletClient) {
    const chain = await client.request<
        Extract<CoreWalletRpcSchema[number], { Method: 'wallet_getEthereumChain' }>
    >({
        method: "wallet_getEthereumChain",
        params: []
    });
    return chain.isTestnet;
}
