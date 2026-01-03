import { useWalletStore } from '../stores/walletStore';
import { useWalletSwitch } from './useWalletSwitch';
import type { AddChainOptions, AddChainResult } from '@/types/wallet';
import { useModalTrigger } from './useModal';
import { toast } from '@/lib/toast';
import { useMemo } from 'react';
import { createLuxWalletClient } from "@luxfi/cloud";
import { lux, luxTestnet } from "@luxfi/cloud/chains";

export function useWallet() {
    const walletStore = useWalletStore();
    const { safelySwitch } = useWalletSwitch();
    const { openModal } = useModalTrigger<AddChainResult>();

    const isTestnet = useWalletStore((s) => s.isTestnet);
    const walletEVMAddress = useWalletStore((s) => s.walletEVMAddress);

    // Create lux wallet client based on network and wallet connection
    const luxWalletClient = useMemo(() => {
        if (typeof window === 'undefined' || !window?.lux || !walletEVMAddress || isTestnet === undefined) {
            return null;
        }
        return createLuxWalletClient({
            chain: isTestnet ? luxTestnet : lux,
            transport: {
                type: "custom",
                provider: window.lux!,
            },
            account: walletEVMAddress as `0x${string}`
        });
    }, [isTestnet, walletEVMAddress]);

    const addChain = async (options?: AddChainOptions): Promise<AddChainResult> => {
        if (!walletStore.coreWalletClient) {
            toast.error('Wallet not connected', 'Please connect your wallet first');
            return { success: false };
        }

        return openModal(options);
    };


    const switchChain = async (chainId: number, testnet?: boolean) => {
        if (testnet !== undefined) {
            return safelySwitch(chainId, testnet);
        }
        
        // If testnet not specified, try to determine from wallet store
        const isTestnetChain = walletStore.isTestnet ?? false;
        return safelySwitch(chainId, isTestnetChain);
    };

    return {
        // Actions
        addChain,
        switchChain,
        // Clients exported for convenience and standardization
        client: walletStore.coreWalletClient,
        luxWalletClient,
    };
}
