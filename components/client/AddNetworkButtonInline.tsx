'use client';

import { useState } from 'react';
import { Wallet, Check, AlertCircle } from 'lucide-react';

interface NetworkConfig {
  chainId: string;
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls: string[];
  blockExplorerUrls: string[];
}

const LUX_MAINNET: NetworkConfig = {
  chainId: '0xA86A',
  chainName: 'Lux LUExchange-Chain',
  nativeCurrency: {
    name: 'Lux',
    symbol: 'LUX',
    decimals: 18,
  },
  rpcUrls: ['https://api.lux.network/ext/bc/C/rpc'],
  blockExplorerUrls: ['https://subnets.lux.network/c-chain'],
};

const LUX_FUJI: NetworkConfig = {
  chainId: '0xA869',
  chainName: 'Lux Testnet Testnet',
  nativeCurrency: {
    name: 'Lux',
    symbol: 'LUX',
    decimals: 18,
  },
  rpcUrls: ['https://api.lux-test.network/ext/bc/C/rpc'],
  blockExplorerUrls: ['https://subnets-test.lux.network/c-chain'],
};

interface AddNetworkButtonInlineProps {
  network: 'mainnet' | 'testnet';
}

export default function AddNetworkButtonInline({ network }: AddNetworkButtonInlineProps) {
  const [status, setStatus] = useState<'idle' | 'adding' | 'success' | 'error'>('idle');

  const addNetwork = async () => {
    if (typeof window === 'undefined' || !window.ethereum) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('adding');

    const config = network === 'mainnet' ? LUX_MAINNET : LUX_FUJI;

    try {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [config],
      });
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (err: any) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <button
      onClick={addNetwork}
      disabled={status === 'adding'}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {status === 'idle' && (
        <>
          <Wallet className="w-3.5 h-3.5" />
          Add to Wallet
        </>
      )}
      {status === 'adding' && 'Adding...'}
      {status === 'success' && (
        <>
          <Check className="w-3.5 h-3.5" />
          Added!
        </>
      )}
      {status === 'error' && (
        <>
          <AlertCircle className="w-3.5 h-3.5" />
          Try Again
        </>
      )}
    </button>
  );
}

