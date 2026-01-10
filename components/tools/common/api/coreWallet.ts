async function checkCoreWallet(): Promise<boolean> {
    try {
        if (!window.lux) {
            throw new Error("Lux Wallet is not installed.");
        }
        return true;
    } catch (error) {
        console.error("Lux Wallet check failed:", error);
        throw error;
    }
}

export { checkCoreWallet }


// Returns the Platform-Chain address of the active account ex: 'P-testnet1...' or 'P-lux1...'
const fetchPChainAddressForActiveAccount = async (): Promise<string> => {
    try {
        if (!window.lux) throw new Error('Lux Wallet not found');

        const response = await window.lux.request<{ addressPVM: string }[]>({
            method: 'lux_getAccounts',
            params: []
        });
        const activeAccountIndex = response.findIndex((account: any) => account.active === true);
        const pChainAddress = response[activeAccountIndex].addressPVM;
        return pChainAddress as string;

    } catch (error) {
        console.error('Error fetching lux accounts, is Lux Wallet installed?:', error);
        throw error;
    }
};

export { fetchPChainAddressForActiveAccount }
