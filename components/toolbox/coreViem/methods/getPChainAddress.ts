import { networkIDs } from "luxfi";
import type { LuxWalletClient } from "@luxfi/cloud";
import {
    utils,
    secp256k1,
} from "luxfi";
import { Buffer as BufferPolyfill } from "buffer";
import { isTestnet } from "./isTestnet";
import { secp256k1 as nobleSecp256k1 } from '@noble/curves/secp256k1.js';
import type { CoreWalletRpcSchema } from "../rpcSchema";

export async function getPChainAddress(client: LuxWalletClient) {
    const networkID = (await isTestnet(client)) ? networkIDs.TestnetID : networkIDs.MainnetID

    const pubkeys = await client.request<
        Extract<CoreWalletRpcSchema[number], { Method: 'lux_getAccountPubKey' }>
    >({
        method: "lux_getAccountPubKey",
        params: []
    });

    return getPChainAddressFromPublicKey(pubkeys.xp, networkID);
}

function getPChainAddressFromPublicKey(xpPubKey: string, networkID: number) {
    // Ensure the public key has 0x prefix
    if (!xpPubKey.startsWith("0x")) {
        xpPubKey = `0x${xpPubKey}`;
    }

    // Remove 0x prefix for processing
    const pubKeyHex = xpPubKey.slice(2);

    // Convert hex string to Uint8Array
    const pubKeyBytes = new Uint8Array(pubKeyHex.match(/.{1,2}/g)!.map(byte => parseInt(byte, 16)));

    // Use noble/curves to compress the public key
    // The public key is already in uncompressed format (04 prefix)
    // We just need to get the compressed version
    const point = nobleSecp256k1.Point.fromHex(pubKeyHex);
    const compressedBytes = point.toBytes(true); // true = compressed format

    // Convert to Buffer for luxjs compatibility
    const pubComp = BufferPolyfill.from(compressedBytes);

    // Use luxjs to convert to address
    const address = secp256k1.publicKeyBytesToAddress(pubComp);

    // Format as Platform-Chain address
    return utils.format("P", networkIDs.getHRP(networkID), address);
}

