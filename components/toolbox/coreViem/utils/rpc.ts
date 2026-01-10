import { lux, luxTestnet } from "@/lib/chains";

//TODO: probably we should get rid of this
export const getRPCEndpoint = (isTestnet: boolean) => {
    if (isTestnet) {
        return luxTestnet.rpcUrls.default.http[0].split("/").slice(0, 3).join("/");
    } else {
        return lux.rpcUrls.default.http[0].split("/").slice(0, 3).join("/");
    }
}
