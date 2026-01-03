export const getRPCEndpoint = (isTestnet: boolean) => {
    return isTestnet ? "https://api.lux-test.network" : "https://api.lux.network";
}
