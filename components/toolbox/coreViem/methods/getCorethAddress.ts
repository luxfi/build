import { networkIDs } from "@/lib/luxfi-networkIDs";
import type { LuxWalletClient } from "@luxfi/cloud";
import { isTestnet } from "./isTestnet";
import { publicKeyToXPAddress } from '@luxfi/cloud/accounts'
import type { CoreWalletRpcSchema } from "../rpcSchema";

export async function getCorethAddress(client: LuxWalletClient) {
    const networkID = (await isTestnet(client)) ? networkIDs.TestnetID : networkIDs.MainnetID;
    const hrp = networkIDs.getHRP(networkID);
    const pubkeys = await client.request<
        Extract<CoreWalletRpcSchema[number], { Method: 'lux_getAccountPubKey' }>
    >({
        method: "lux_getAccountPubKey",
        params: []
    });
    return `C-${publicKeyToXPAddress(pubkeys.evm, hrp)}`;
}