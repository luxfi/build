import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  serverExternalPackages: [
    'ts-morph',
    'typescript',
    'twoslash',
    'shiki',
  ],
  // Include tsconfig.json in serverless function bundles for twoslash
  outputFileTracingIncludes: {
    '/*': ['./tsconfig.json'],
  },
  env: {
    APIKEY: process.env.APIKEY,
  },
  transpilePackages: ["next-mdx-remote"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'abs.twimg.com',
      },
      {
        protocol: 'https',
        hostname: '*.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
      {
        protocol: 'https',
        hostname: 'f005.backblazeb2.com',
      },
      {
        protocol: 'https',
        hostname: 'explorer-binaryholdings.cogitus.io',
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
      },
      {
        protocol: 'https',
        hostname: 'developers.avacloud.io',
      },
      {
        protocol: 'https',
        hostname: 'dashboard-assets.dappradar.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/docs/dapps/smart-contract-dev/get-test-funds',
        destination: '/console/primary-network/faucet',
        permanent: true,
      },
      {
        source: '/integrations/trader-joe',
        destination: '/integrations/lfj',
        permanent: true,
      },
      {
        source: '/docs/dapps/end-to-end/launch-ethereum-dapp',
        destination: '/academy/blockchain/solidity-foundry',
        permanent: true,
      },
      {
        source: '/docs/dapps/toolchains/foundry',
        destination: '/academy/blockchain/solidity-foundry/03-smart-contracts/03-foundry-quickstart',
        permanent: true,
      },
      {
        source: '/docs/nodes/validate/how-to-stake',
        destination: '/docs/primary-network/validate/how-to-stake',
        permanent: true,
      },
      {
        source: '/docs/nodes/validate/validate-vs-delegate',
        destination: '/docs/primary-network/validate/validate-vs-delegate',
        permanent: true,
      },
      {
        source: '/docs/lux-l1s/evm-configuration/tokenomics',
        destination: '/docs/lux-l1s/precompiles/native-minter',
        permanent: true,
      },
      {
        source: '/docs/api-reference/guides/issuing-api-calls',
        destination: '/docs/rpcs/other/guides/issuing-api-calls',
        permanent: true,
      },
      {
        source: '/docs/api-reference/guides/txn-fees',
        destination: '/docs/rpcs/other/guides/txn-fees',
        permanent: true,
      },
      {
        source: '/docs/lux-l1s/evm-configuration/permissions',
        destination: '/docs/lux-l1s/precompiles/allowlist-interface',
        permanent: true,
      },
      {
        source: '/docs/lux-l1s/evm-configuration/allowlist',
        destination: '/docs/lux-l1s/precompiles/allowlist-interface',
        permanent: true,
      },
      {
        source: '/docs/lux-l1s/evm-configuration',
        destination: '/docs/lux-l1s/evm-configuration/customize-lux-l1',
        permanent: true,
      },
      {
        source: '/docs/subnets/overview',
        destination: '/docs/lux-l1s',
        permanent: true,
      },
      {
        source: '/docs/subnets/subnet-evm',
        destination: '/docs/lux-l1s/evm-configuration/customize-lux-l1',
        permanent: true,
      },
      {
        source: '/docs/subnets/create-a-subnet',
        destination: '/docs/tooling/lux-cli/create-lux-l1',
        permanent: true,
      },
      {
        source: '/docs/subnets/create/genesis',
        destination: '/docs/lux-l1s/evm-configuration/customize-lux-l1',
        permanent: true,
      },
      {
        source: '/docs/subnets/security-considerations',
        destination: '/docs/lux-l1s',
        permanent: true,
      },
      {
        source: '/docs/api-reference/lux-sdk/interchain-sdk/getting-started',
        destination: '/docs/tooling/lux-sdk/interchain/getting-started',
        permanent: true,
      },
      {
        source: '/docs/luxgo/tools/cli',
        destination: '/docs/tooling/lux-cli',
        permanent: true,
      },
      {
        source: '/docs/overview/tokenomics',
        destination: '/docs/primary-network/lux-token',
        permanent: true,
      },
      {
        source: '/docs/staking/overview',
        destination: '/docs/primary-network/validate/how-to-stake',
        permanent: true,
      },
      {
        source: '/docs/tooling/cross-chain/teleporter-local-network',
        destination: '/docs/tooling/lux-cli/cross-chain/teleporter-local-network',
        permanent: true,
      },
      {
        source: '/docs/tooling/cross-chain',
        destination: '/docs/tooling/lux-cli/cross-chain/teleporter-local-network',
        permanent: true,
      },
      {
        source: '/docs/tooling/create-lux-l1',
        destination: '/docs/tooling/lux-cli/create-lux-l1',
        permanent: true,
      },
      {
        source: '/docs/tooling/create-deploy-lux-l1s/deploy-with-custom-vm',
        destination: '/docs/tooling/lux-cli/create-deploy-lux-l1s/deploy-with-custom-vm',
        permanent: true,
      },
      {
        source: '/docs/tooling/create-deploy-lux-l1s/deploy-locally',
        destination: '/docs/tooling/lux-cli/create-deploy-lux-l1s/deploy-locally',
        permanent: true,
      },
      {
        source: '/docs/tooling/get-lux-cli',
        destination: '/docs/tooling/lux-cli/get-lux-cli',
        permanent: true,
      },
      {
        source: '/docs/tooling/lux-go-installer',
        destination: '/docs/nodes/run-a-node/using-install-script/installing-lux-go',
        permanent: true,
      },
      {
        source: '/docs/lux-l1s/upgrade/customize-lux-l1',
        destination: '/docs/lux-l1s/evm-configuration/customize-lux-l1',
        permanent: true,
      },
      {
        source: '/docs/lux-l1s/upgrade/durango-upgrade',
        destination: '/docs/lux-l1s/upgrade/considerations',
        permanent: true,
      },
      {
        source: '/docs/nodes/validate/node-validator',
        destination: '/docs/primary-network/validate/node-validator',
        permanent: true,
      },
      {
        source: '/docs/nodes/on-third-party-services/microsoft-azure',
        destination: '/docs/nodes/run-a-node/on-third-party-services/microsoft-azure',
        permanent: true,
      },
      {
        source: '/docs/reference/luxgo/p-chain/api',
        destination: '/docs/rpcs/p-chain',
        permanent: true,
      },
      {
        source: '/docs/reference/luxgo/auth-api',
        destination: '/docs/rpcs/other',
        permanent: true,
      },
      {
        source: '/docs/apis/luxgo/apis/issuing-api-calls',
        destination: '/docs/rpcs/other/guides/issuing-api-calls',
        permanent: true,
      },
      {
        source: '/docs/apis/luxgo/apis/x-chain',
        destination: '/docs/rpcs/x-chain',
        permanent: true,
      },
      {
        source: '/docs/overview/getting-started/virtual-machines',
        destination: '/docs/primary-network/virtual-machines',
        permanent: true,
      },
      {
        source: '/docs/overview/getting-started/lux',
        destination: '/docs/primary-network/lux-token',
        permanent: true,
      },
      {
        source: '/docs/quickstart/cross-chain-transfers',
        destination: '/docs/cross-chain',
        permanent: true,
      },
      {
        source: '/docs/quickstart/validator/run-node/set-up-node',
        destination: '/docs/nodes/run-a-node/from-source',
        permanent: true,
      },
      {
        source: '/docs/virtual-machines/evm-customization/deploying-precompile',
        destination: '/docs/lux-l1s/precompiles/interacting-with-precompiles',
        permanent: true,
      },
      {
        source: '/academy/lux-l1/interchain-messaging/08-securing-cross-chain-communication/01-securing-cross-chain-communication',
        destination: '/academy/lux-l1/interchain-messaging',
        permanent: true,
      },
      {
        source: '/academy/lux-l1/multi-chain-architecture/04-independent-tokenomics/09-transaction-fees',
        destination: '/academy/lux-l1/l1-native-tokenomics/05-fee-config/02-transaction-fees',
        permanent: true,
      },
      {
        source: '/academy/lux-l1/multi-chain-architecture/03-lux-starter-kit/03-create-blockchain',
        destination: '/academy/lux-l1/lux-fundamentals/04-creating-an-l1',
        permanent: true,
      },
      {
        source: '/academy/lux-l1/multi-chain-architecture/06-permissioning-users/05-activate-tx-allowlist',
        destination: '/academy/lux-l1/lux-fundamentals/08-permissioning-users/05-activate-tx-allowlist',
        permanent: true,
      },
      {
        source: '/academy/lux-l1/l1-native-tokenomics/01-tokens-fundamentals/10-wrapped-native-tokens',
        destination: '/academy/lux-l1/l1-native-tokenomics/01b-native-vs-erc20/09-wrapped-tokens',
        permanent: true,
      },
      {
        source: '/academy/lux-l1/lux-fundamentals/07-independent-tokenomics/09-transaction-fees',
        destination: '/academy/lux-l1/l1-native-tokenomics/05-fee-config/02-transaction-fees',
        permanent: true,
      },
      {
        source: '/docs/dapps/end-to-end/testnet-workflow',
        destination: '/academy/blockchain/solidity-foundry/04-hello-world-part-1/01-intro',
        permanent: true,
      },
      {
        source: '/console/primary-network',
        destination: '/console/primary-network/faucet',
        permanent: true,
      },
      {
        source: '/docs/virtual-machines',
        destination: '/docs/primary-network/virtual-machines',
        permanent: true,
      },
      {
        source: '/docs/nodes/using-install-script/installing-lux-go',
        destination: '/docs/nodes/run-a-node/using-install-script/installing-lux-go',
        permanent: true,
      },
      {
        source: '/docs/tooling/maintain/troubleshooting',
        destination: '/docs/tooling/lux-cli/maintain/troubleshooting',
        permanent: true,
      },
      {
        source: '/docs/api-reference/lux-sdk/client-sdk/getting-started',
        destination: '/docs/tooling/lux-sdk/client/getting-started',
        permanent: true,
      },
      {
        source: '/docs/tooling/lux-postman/add-postman-collection',
        destination: '/docs/tooling/lux-postman',
        permanent: true,
      },
      {
        source: '/docs/lux-l1s/validator-manager/add-validator',
        destination: '/docs/tooling/lux-cli/maintain/add-validator-l1',
        permanent: true,
      },
      {
        source: '/docs/dapps/deploy-nft-collection/prep-nft-files',
        destination: '/academy/blockchain/nft-deployment/02-prepare-nft-files',
        permanent: true,
      },
      {
        source: '/docs/api-reference/p-chain/txn-format',
        destination: '/docs/rpcs/p-chain/txn-format',
        permanent: true,
      },
      {
        source: '/docs/api-reference/c-chain/txn-format',
        destination: '/docs/rpcs/c-chain/txn-format',
        permanent: true,
      },
      {
        source: '/docs/api-reference/x-chain/txn-format',
        destination: '/docs/rpcs/x-chain/txn-format',
        permanent: true,
      },
      {
        source: '/docs/api-reference/c-chain/api',
        destination: '/docs/rpcs/c-chain',
        permanent: true,
      },
      {
        source: '/docs/api-reference/p-chain/api',
        destination: '/docs/rpcs/p-chain',
        permanent: true,
      },
      {
        source: '/docs/api-reference/x-chain/api',
        destination: '/docs/rpcs/x-chain',
        permanent: true,
      },
      {
        source: '/docs/api-reference/info-api',
        destination: '/docs/rpcs/other/info-rpc',
        permanent: true,
      },
      {
        source: '/docs/api-reference/index-api',
        destination: '/docs/rpcs/other/index-rpc',
        permanent: true,
      },
      {
        source: '/docs/api-reference/health-api',
        destination: '/docs/rpcs/other/health-rpc',
        permanent: true,
      },
      {
        source: '/docs/api-reference/admin-api',
        destination: '/docs/rpcs/other',
        permanent: true,
      },
      {
        source: '/docs/api-reference/proposervm-api',
        destination: '/docs/rpcs/other/proposervm-rpc',
        permanent: true,
      },
      {
        source: '/docs/api-reference/subnet-evm-api',
        destination: '/docs/rpcs/subnet-evm',
        permanent: true,
      },
      {
        source: '/docs/rpcs',
        destination: '/docs/rpcs/c-chain',
        permanent: true,
      },
      {
        source: '/docs/tooling',
        destination: '/docs/tooling/lux-sdk',
        permanent: true,
      },
      {
        source: '/docs/api-reference',
        destination: '/docs/api-reference/data-api',
        permanent: true,
      },
      {
        source: '/introduction',
        destination: '/docs/api-reference/introduction',
        permanent: false,
      },
      {
        source: '/docs/tooling/rpc-providers',
        destination: '/integrations#rpc-providers',
        permanent: true,
      },
      {
        source: '/data-api/:path*',
        destination: '/docs/api-reference/data-api/:path*',
        permanent: false,
      },
      {
        source: '/webhooks-api/:path*',
        destination: '/docs/api-reference/webhooks-api/:path*',
        permanent: false,
      },
      {
        source: '/metrics-api/:path*',
        destination: '/docs/api-reference/metrics-api/:path*',
        permanent: false,
      },
      {
        source: '/rpc-api/:path*',
        destination: '/docs/api-reference/rpc-api/:path*',
        permanent: false,
      },
      {
        source: '/lux-sdk/:path*',
        destination: '/docs/api-reference/lux-sdk/:path*',
        permanent: false,
      },
      {
        source: '/changelog/:path*',
        destination: '/docs/api-reference/changelog/:path*',
        permanent: false,
      },
      {
        source: '/codebase-entrepreneur',
        destination: '/academy/entrepreneur',
        permanent: true,
      },
      {
        source: '/codebase-entrepreneur/:path*',
        destination: '/academy/entrepreneur/:path*',
        permanent: true,
      },
      {
        source: '/codebase-entrepreneur-academy',
        destination: '/academy',
        permanent: true,
      },
      {
        source: '/codebase-entrepreneur-academy/:path*',
        destination: '/academy/entrepreneur/:path*',
        permanent: true,
      },
      {
        source: '/hackathon',
        destination: '/hackathons/26bfce9b-4d44-4d40-8fbe-7903e76d48fa',
        permanent: true,
      },
      {
        source: '/events',
        destination: '/hackathons',
        permanent: true,
      },
      {
        source: '/tools/l1-launcher',
        destination: '/academy/lux-l1/lux-fundamentals/04-creating-an-l1/01-creating-an-l1',
        permanent: true,
      },
      {
        source: '/tools/:path*',
        destination: '/console',
        permanent: true,
      },
      {
        source: '/guides',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/guides/:path*',
        destination: '/blog/:path*',
        permanent: true,
      },
      {
        source: '/docs/virtual-machines/default-precompiles/index',
        destination: '/docs/lux-l1s/evm-configuration/evm-l1-customization#precompiles',
        permanent: true,
      },
      {
        source: '/docs/virtual-machines/default-precompiles/deployerallowlist',
        destination: '/docs/lux-l1s/precompiles/deployer-allowlist',
        permanent: true,
      },
      {
        source: '/docs/virtual-machines/default-precompiles/txallowlist',
        destination: '/docs/lux-l1s/precompiles/transaction-allowlist',
        permanent: true,
      },
      {
        source: '/docs/virtual-machines/default-precompiles/contractnativeminter',
        destination: '/docs/lux-l1s/precompiles/native-minter',
        permanent: true,
      },
      {
        source: '/docs/virtual-machines/default-precompiles/nativeminter',
        destination: '/docs/lux-l1s/precompiles/native-minter',
        permanent: true,
      },
      {
        source: '/docs/virtual-machines/default-precompiles/feemanager',
        destination: '/docs/lux-l1s/precompiles/fee-manager',
        permanent: true,
      },
      {
        source: '/docs/virtual-machines/default-precompiles/rewardmanager',
        destination: '/docs/lux-l1s/precompiles/reward-manager',
        permanent: true,
      },
      {
        source: '/docs/virtual-machines/default-precompiles/warpmessenger',
        destination: '/docs/lux-l1s/evm-configuration/warpmessenger',
        permanent: true,
      },
      {
        source: '/docs/lux-l1s/default-precompiles/transaction-fees',
        destination: '/docs/lux-l1s/evm-configuration/transaction-fees',
        permanent: true,
      },
      {
        source: '/academy/interchain-messaging/10-running-a-relayer/01-running-a-relayer',
        destination: '/academy/lux-l1/interchain-messaging/10-running-a-relayer/01-relayer-introduction',
        permanent: true,
      },
      {
        source: '/academy/interchain-messaging/10-running-a-relayer/02-control-the-lux-cli-relayer',
        destination: '/academy/lux-l1/interchain-messaging/10-running-a-relayer/03-configure-and-run-the-relayer',
        permanent: true,
      }, {
        source: '/academy/interchain-messaging/10-running-a-relayer/03-install-relayer',
        destination: '/academy/lux-l1/interchain-messaging/10-running-a-relayer/03-configure-and-run-the-relayer',
        permanent: true,
      }, {
        source: '/academy/interchain-messaging/10-running-a-relayer/05-multichain-relayer-config',
        destination: '/academy/lux-l1/interchain-messaging/10-running-a-relayer/02-relayer-configuration#multichain-relayer-configuration',
        permanent: true,
      }, {
        source: '/academy/interchain-messaging/10-running-a-relayer/06-analyze-relayer-logs',
        destination: '/academy/lux-l1/interchain-messaging/10-running-a-relayer/03-configure-and-run-the-relayer',
        permanent: true,
      }, {
        source: '/academy/interchain-messaging/03-lux-starter-kit/03-create-blockchain',
        destination: '/academy/lux-l1/interchain-messaging/03-lux-starter-kit/04-networks',
        permanent: true,
      }, {
        source: '/academy/interchain-messaging/03-lux-starter-kit/06-pause-and-resume',
        destination: '/academy/lux-l1/interchain-messaging/03-lux-starter-kit/04-networks',
        permanent: true,
      }, {
        source: '/docs/subnets/customize-a-subnet',
        destination: '/docs/lux-l1s/evm-configuration/customize-lux-l1',
        permanent: true,
      },       {
        source: '/docs/build/tutorials/platform/create-a-local-test-network',
        destination: '/academy/lux-l1/lux-fundamentals',
        permanent: true,
      }, {
        source: '/docs/tooling/guides/get-lux-cli',
        destination: '/docs/tooling/lux-cli/get-lux-cli',
        permanent: true,
      }, {
        source: '/evm-l1s/validator-manager/poa-vs-pos',
        destination: '/docs/lux-l1s/validator-manager/contract',
        permanent: true,
      }, {
        source: '/docs/lux-l1s/allowlist',
        destination: '/docs/lux-l1s/precompiles/allowlist-interface',
        permanent: true,
      }, {
        source: '/docs/virtual-machines/evm-customization/generating-your-precompile',
        destination: '/docs/lux-l1s/custom-precompiles/create-precompile',
        permanent: true,
      }, {
        source: '/docs/virtual-machines/evm-customization/defining-precompile#event-file',
        destination: '/docs/lux-l1s/custom-precompiles/defining-precompile#event-file',
        permanent: true,
      }, {
        source: '/docs/virtual-machines/evm-customization/testing-your-precompile',
        destination: '/docs/lux-l1s/custom-precompiles/executing-test-cases',
        permanent: true,
      }, {
        source: '/docs/nodes/run-a-node/manually#hardware-and-os-requirements',
        destination: '/docs/nodes/system-requirements#hardware-and-operating-systems',
        permanent: true,
      }, {
        source: "/build/cross-chain/awm/deep-dive",
        destination: "/docs/cross-chain/lux-warp-messaging/evm-integration#how-does-lux-warp-messaging-work",
        permanent: true,
      }, {
        source: "/docs/virtual-machines/custom-precompiles#minting-native-coins",
        destination: "/docs/lux-l1s/precompiles/native-minter",
        permanent: true,
      }, {
        source: "/docs/virtual-machines/evm-customization/introduction",
        destination: "/docs/lux-l1s/evm-configuration/evm-l1-customization",
        permanent: true,
      }, {
        source: "/docs/virtual-machines/evm-customization/background-requirements",
        destination: "/docs/lux-l1s/custom-precompiles/background-requirements",
        permanent: true,
      }, {
        source: "/docs/nodes/run-a-node/manually",
        destination: "/docs/nodes/run-a-node/from-source",
        permanent: true,
      }, {
        source: "/docs/tooling/luxgo-postman-collection/setup",
        destination: "/docs/tooling/lux-postman",
        permanent: true,
      }, {
        source: "/docs/lux-l1s/deploy-a-lux-l1/testnet-testnet",
        destination: "/docs/tooling/create-deploy-lux-l1s/deploy-on-testnet-testnet",
        permanent: true,
      }, {
        source: "/academy/l1-validator-management",
        destination: "/academy/lux-l1/permissioned-l1s",
        permanent: true,
      },
      {
        source: "/academy/l1-validator-management/:path*",
        destination: "/academy/lux-l1/permissioned-l1s/:path*",
        permanent: true,
      },
      {
        source: "/academy/l1-tokenomics",
        destination: "/academy/lux-l1/l1-native-tokenomics",
        permanent: true,
      },
      {
        source: "/academy/l1-tokenomics/:path*",
        destination: "/academy/lux-l1/l1-native-tokenomics/:path*",
        permanent: true,
      },
      {
        source: "/console/permissioned-l1s/transactor-allowlist",
        destination: "/console/l1-access-restrictions/transactor-allowlist",
        permanent: true,
      },
      {
        source: "/console/permissioned-l1s/deployer-allowlist",
        destination: "/console/l1-access-restrictions/deployer-allowlist",
        permanent: true,
      },
      {
        source: "/docs/nodes/configure/chain-configs/p-chain",
        destination: "/docs/nodes/chain-configs/p-chain",
        permanent: true,
      },
      {
        source: "/docs/nodes/configure/chain-configs/x-chain",
        destination: "/docs/nodes/chain-configs/x-chain",
        permanent: true,
      },
      {
        source: "/docs/nodes/configure/chain-configs/c-chain",
        destination: "/docs/nodes/chain-configs/c-chain",
        permanent: true,
      },
      {
        source: "/docs/nodes/configure/chain-configs/subnet-evm",
        destination: "/docs/nodes/chain-configs/subnet-evm",
        permanent: true,
      },
      {
        source: "/academy/lux-fundamentals",
        destination: "/academy/lux-l1/lux-fundamentals",
        permanent: true,
      },
      {
        source: "/academy/lux-fundamentals/:path*",
        destination: "/academy/lux-l1/lux-fundamentals/:path*",
        permanent: true,
      },
      {
        source: "/academy/blockchain-fundamentals",
        destination: "/academy/blockchain/blockchain-fundamentals",
        permanent: true,
      },
      {
        source: "/academy/blockchain-fundamentals/:path*",
        destination: "/academy/blockchain/blockchain-fundamentals/:path*",
        permanent: true,
      },
      {
        source: "/academy/solidity-foundry",
        destination: "/academy/blockchain/solidity-foundry",
        permanent: true,
      },
      {
        source: "/academy/solidity-foundry/:path*",
        destination: "/academy/blockchain/solidity-foundry/:path*",
        permanent: true,
      },
      {
        source: "/academy/encrypted-erc",
        destination: "/academy/blockchain/encrypted-erc",
        permanent: true,
      },
      {
        source: "/academy/encrypted-erc/:path*",
        destination: "/academy/blockchain/encrypted-erc/:path*",
        permanent: true,
      },
      {
        source: "/academy/customizing-evm",
        destination: "/academy/lux-l1/customizing-evm",
        permanent: true,
      },
      {
        source: "/academy/customizing-evm/:path*",
        destination: "/academy/lux-l1/customizing-evm/:path*",
        permanent: true,
      },
      {
        source: "/academy/interchain-messaging",
        destination: "/academy/lux-l1/interchain-messaging",
        permanent: true,
      },
      {
        source: "/academy/interchain-messaging/:path*",
        destination: "/academy/lux-l1/interchain-messaging/:path*",
        permanent: true,
      },
      {
        source: "/academy/interchain-token-transfer",
        destination: "/academy/lux-l1/native-token-bridge",
        permanent: true,
      },
      {
        source: "/academy/interchain-token-transfer/:path*",
        destination: "/academy/lux-l1/native-token-bridge/:path*",
        permanent: true,
      },
      {
        source: "/academy/icm-chainlink",
        destination: "/academy/lux-l1/icm-chainlink",
        permanent: true,
      },
      {
        source: "/academy/icm-chainlink/:path*",
        destination: "/academy/lux-l1/icm-chainlink/:path*",
        permanent: true,
      },
      {
        source: "/academy/permissioned-l1s",
        destination: "/academy/lux-l1/permissioned-l1s",
        permanent: true,
      },
      {
        source: "/academy/permissioned-l1s/:path*",
        destination: "/academy/lux-l1/permissioned-l1s/:path*",
        permanent: true,
      },
      {
        source: "/academy/l1-native-tokenomics",
        destination: "/academy/lux-l1/l1-native-tokenomics",
        permanent: true,
      },
      {
        source: "/academy/l1-native-tokenomics/:path*",
        destination: "/academy/lux-l1/l1-native-tokenomics/:path*",
        permanent: true,
      },
      {
        source: "/academy/permissionless-l1s",
        destination: "/academy/lux-l1/permissionless-l1s",
        permanent: true,
      },
      {
        source: "/academy/permissionless-l1s/:path*",
        destination: "/academy/lux-l1/permissionless-l1s/:path*",
        permanent: true,
      },
      {
        source: "/academy/multi-chain-architecture",
        destination: "/academy/lux-l1/multi-chain-architecture",
        permanent: true,
      },
      {
        source: "/academy/multi-chain-architecture/:path*",
        destination: "/academy/lux-l1/multi-chain-architecture/:path*",
        permanent: true,
      },
      {
        source: "/academy/avacloudapis",
        destination: "/academy/lux-l1/avacloudapis",
        permanent: true,
      },
      {
        source: "/academy/avacloudapis/:path*",
        destination: "/academy/lux-l1/avacloudapis/:path*",
        permanent: true,
      },
      {
        source: "/docs/cross-chain/teleporter/teleporter-on-devnet",
        destination: "/docs/cross-chain/icm-contracts/icm-contracts-on-devnet",
        permanent: true,
      },
      {
        source: "/docs/cross-chain/teleporter/teleporter-on-local-network",
        destination: "/docs/cross-chain/icm-contracts/icm-contracts-on-local-network",
        permanent: true,
      },
      {
        source: "/docs/cross-chain/teleporter",
        destination: "/docs/cross-chain/icm-contracts",
        permanent: true,
      },
      {
        source: "/docs/cross-chain/teleporter/:path*",
        destination: "/docs/cross-chain/icm-contracts/:path*",
        permanent: true,
      },
      {
        source: "/academy/lux-l1/interchain-token-transfer/03-tokens/:path*",
        destination: "/academy/lux-l1/l1-native-tokenomics/01-tokens-fundamentals/:path*",
        permanent: true,
      },
      {
        source: "/academy/lux-l1/interchain-token-transfer/04-token-bridging/:path*",
        destination: "/academy/lux-l1/erc20-bridge/01-token-bridging/:path*",
        permanent: true,
      },
      {
        source: "/academy/lux-l1/interchain-token-transfer/05-lux-interchain-token-transfer/:path*",
        destination: "/academy/lux-l1/erc20-bridge/02-lux-interchain-token-transfer/:path*",
        permanent: true,
      },
      {
        source: "/academy/lux-l1/interchain-token-transfer/06-erc-20-to-erc-20-bridge/:path*",
        destination: "/academy/lux-l1/erc20-bridge/03-erc-20-to-erc-20-bridge/:path*",
        permanent: true,
      },
      {
        source: "/academy/lux-l1/interchain-token-transfer/07-tokens-on-multiple-chains/:path*",
        destination: "/academy/lux-l1/erc20-bridge/04-tokens-on-multiple-chains/:path*",
        permanent: true,
      },
      {
        source: "/docs/dapps/smart-contract-dev/deploy-with-remix-ide",
        destination: "/docs/lux-l1s/add-utility/deploy-smart-contract",
        permanent: true,
      },
      {
        source: "/docs/dapps/:path*",
        destination: "/docs/primary-network",
        permanent: true,
      },
      {
        source: "/docs/dapps",
        destination: "/docs/primary-network",
        permanent: true,
      },
      {
        source: "/docs/quick-start/networks/testnet-testnet",
        destination: "/docs/primary-network#c-chain-contract-chain",
        permanent: true,
      },
      {
        source: "/docs/quick-start/validator-manager",
        destination: "/docs/lux-l1s/validator-manager/contract",
        permanent: true,
      },
      {
        source: "/docs/quick-start/lux-consensus",
        destination: "/docs/primary-network/lux-consensus",
        permanent: true,
      },
      {
        source: "/docs/quick-start/:path*",
        destination: "/docs/primary-network",
        permanent: true,
      },
      // LuxJS -> TypeScript SDK redirects
      {
        source: "/docs/apis/luxjs/:path*",
        destination: "/docs/tooling/lux-sdk",
        permanent: true,
      },
      {
        source: "/docs/luxjs/:path*",
        destination: "/docs/tooling/lux-sdk",
        permanent: true,
      },
      {
        source: "/docs/tooling/luxjs/:path*",
        destination: "/docs/tooling/lux-sdk",
        permanent: true,
      },
      // Community tutorials -> main docs
      {
        source: "/docs/community/:path*",
        destination: "/docs",
        permanent: true,
      },
      // Additional broken link redirects
      {
        source: "/docs/build/tutorials/nodes-and-staking/staking-lux-by-validating-or-delegating-with-the-lux-wallet",
        destination: "/docs/primary-network/validate/how-to-stake",
        permanent: true,
      },
      {
        source: "/docs/lux-l1s/validator-manager/poa-vs-pos",
        destination: "/docs/lux-l1s/validator-manager/contract",
        permanent: true,
      },
      {
        source: "/academy/lux-l1/interchain-token-transfer/02-lux-starter-kit/:path*",
        destination: "/academy/lux-l1/interchain-messaging/03-lux-starter-kit/:path*",
        permanent: true,
      },
      {
        source: "/academy/lux-l1/interchain-messaging/09-lux-warp-messaging/:path*",
        destination: "/academy/lux-l1/interchain-messaging/08-lux-warp-messaging/:path*",
        permanent: true,
      },
      {
        source: "/academy/lux-l1/interchain-messaging/10-running-a-relayer/:path*",
        destination: "/academy/lux-l1/interchain-messaging/09-running-a-relayer/:path*",
        permanent: true,
      },
      {
        source: "/academy/lux-l1/erc20-bridge/03-erc-20-to-erc-20-bridge/05-transfer-tokens",
        destination: "/academy/lux-l1/erc20-bridge/03-erc-20-to-erc-20-bridge/06-transfer-tokens",
        permanent: true,
      },
      {
        source: "/academy/lux-l1/l1-native-tokenomics/01-tokens-fundamentals/03-transfer-native-tokens",
        destination: "/academy/lux-l1/l1-native-tokenomics/01-tokens-fundamentals/04-transfer-native-token",
        permanent: true,
      },
      {
        source: "/academy/lux-l1/l1-native-tokenomics/06-distribution/:path*",
        destination: "/academy/lux-l1/l1-native-tokenomics/07-token-distribution/:path*",
        permanent: true,
      },
      {
        source: "/academy/lux-l1/multi-chain-architecture/06-permissioning-users/:path*",
        destination: "/academy/lux-l1/lux-fundamentals/08-permissioning-users/:path*",
        permanent: true,
      },
      {
        source: "/docs/api-reference/standards/guides/:path*",
        destination: "/docs/rpcs/other/guides/:path*",
        permanent: true,
      },
      {
        source: "/docs/build/cross-chain/teleporter/:path*",
        destination: "/docs/cross-chain/icm-contracts/:path*",
        permanent: true,
      },
      {
        source: "/docs/build/subnet",
        destination: "/docs/lux-l1s",
        permanent: true,
      },
      {
        source: "/docs/cross-chain/interchain-messaging",
        destination: "/docs/cross-chain/icm-contracts",
        permanent: true,
      },
      {
        source: "/docs/nodes/build/set-up-an-lux-node-with-google-cloud-platform",
        destination: "/docs/nodes/run-a-node/on-third-party-services/google-cloud",
        permanent: true,
      },
      {
        source: "/docs/nodes/build/set-up-node-with-installer",
        destination: "/docs/nodes/run-a-node/using-install-script/installing-lux-go",
        permanent: true,
      },
      {
        source: "/docs/nodes/on-third-party-services/amazon-web-services",
        destination: "/docs/nodes/run-a-node/on-third-party-services/amazon-web-services",
        permanent: true,
      },
      {
        source: "/docs/overview/what-is-lux",
        destination: "/docs/primary-network",
        permanent: true,
      },
      {
        source: "/docs/reference/luxgo/admin-api",
        destination: "/docs/rpcs/other",
        permanent: true,
      },
      {
        source: "/docs/rpcs/c-chain/rpc",
        destination: "/docs/rpcs/c-chain",
        permanent: true,
      },
      {
        source: "/docs/subnets/create-a-local-subnet",
        destination: "/docs/tooling/lux-cli/create-deploy-lux-l1s/deploy-locally",
        permanent: true,
      },
      {
        source: "/docs/subnets/deploy-a-gnosis-safe-on-your-evm",
        destination: "/docs/lux-l1s/add-utility/deploy-smart-contract",
        permanent: true,
      },
      {
        source: "/docs/subnets/deploy-a-smart-contract-on-your-evm",
        destination: "/docs/lux-l1s/add-utility/deploy-smart-contract",
        permanent: true,
      },
      {
        source: "/docs/subnets/upgrade/subnet-precompile-config",
        destination: "/docs/tooling/lux-cli/upgrade/lux-l1-precompile-config",
        permanent: true,
      },
      {
        source: "/docs/tooling/lux-cli/create-deploy-lux-l1s/deploy-public-network",
        destination: "/docs/tooling/lux-cli/create-deploy-lux-l1s/deploy-on-testnet-testnet",
        permanent: true,
      },
      {
        source: "/docs/tooling/lux-js",
        destination: "/docs/tooling/lux-sdk",
        permanent: true,
      },
      {
        source: "/docs/tooling/cross-chain/teleporter-token-bridge",
        destination: "/docs/tooling/lux-cli/cross-chain/teleporter-token-bridge",
        permanent: true,
      },
      {
        source: "/docs/tooling/maintain/delete-lux-l1",
        destination: "/docs/tooling/lux-cli/maintain/delete-lux-l1",
        permanent: true,
      },
      {
        source: "/docs/tooling/metrics-api",
        destination: "/docs/api-reference/metrics-api",
        permanent: true,
      },
      {
        source: "/docs/v1.0/:path*",
        destination: "/docs/rpcs",
        permanent: true,
      },
      {
        source: "/docs/virtual-machines/default-precompiles/allowlist",
        destination: "/docs/lux-l1s/precompiles/allowlist-interface",
        permanent: true,
      },
      {
        source: "/docs/virtual-machines/golang-vms/:path*",
        destination: "/docs/lux-l1s/golang-vms/:path*",
        permanent: true,
      },
      // Additional redirects from user feedback
      {
        source: "/academy/lux-l1/lux-fundamentals/04-creating-a-blockchain/:path*",
        destination: "/academy/lux-l1/lux-fundamentals/04-creating-an-l1/:path*",
        permanent: true,
      },
      {
        source: "/academy/lux-l1/interchain-token-transfer/01-intro/:path*",
        destination: "/academy/lux-l1/interchain-messaging",
        permanent: true,
      },
      {
        source: "/academy/lux-l1/l1-native-tokenomics/01-basics/:path*",
        destination: "/academy/lux-l1/l1-native-tokenomics/01-tokens-fundamentals",
        permanent: true,
      },
      {
        source: "/academy/lux-l1/multi-chain-architecture/03-lux-starter-kit/04-add-blockchain-to-wallet",
        destination: "/academy/lux-l1/permissioned-l1s/03-create-an-L1/01-create-subnet",
        permanent: true,
      },
      {
        source: "/academy/lux-l1/multi-chain-architecture/05-customizability/:path*",
        destination: "/academy/lux-l1/permissioned-l1s",
        permanent: true,
      },
      {
        source: "/academy/lux-l1/multi-chain-architecture/07-permissioning-validators/:path*",
        destination: "/academy/lux-l1/permissioned-l1s",
        permanent: true,
      },
      {
        source: "/docs/api-reference/keystore-api",
        destination: "/docs",
        permanent: true,
      },
      {
        source: "/docs/build/tools/deprecating-ortelius",
        destination: "/docs",
        permanent: true,
      },
      {
        source: "/docs/build/tools/ortelius",
        destination: "/docs",
        permanent: true,
      },
      {
        source: "/docs/quickstart/fund-a-local-test-network",
        destination: "/docs",
        permanent: true,
      },
      {
        source: "/docs/tooling/lux-ops",
        destination: "/docs",
        permanent: true,
      },
      {
        source: "/docs/tooling/lux-sdk/client/accounts/methods/wallet-methods/wallet",
        destination: "/docs/tooling/lux-sdk/interchain/icm",
        permanent: true,
      },
      // Spanish docs redirect - remove /es prefix
      {
        source: "/docs/es/:path*",
        destination: "/docs/:path*",
        permanent: true,
      },
      // Additional broken link redirects - round 2
      {
        source: "/docs/build/lux-cli/install",
        destination: "/docs/tooling/lux-cli/get-lux-cli",
        permanent: true,
      },
      {
        source: "/docs/virtual-machines/custom-precompiles",
        destination: "/docs/lux-l1s/custom-precompiles",
        permanent: true,
      },
      {
        source: "/docs/build/luxgo/acps/:path*",
        destination: "/docs/acps/:path*",
        permanent: true,
      },
      {
        source: "/docs/build/sdks/luxjs/:path*",
        destination: "/docs/tooling/lux-sdk",
        permanent: true,
      },
      {
        source: "/academy/lux-l1/erc20-bridge/04-tokens-on-multiple-chains/03-deploy-token-remote",
        destination: "/academy/lux-l1/erc20-bridge/04-tokens-on-multiple-chains/02-deploy-token-remote",
        permanent: true,
      },
      {
        source: "/academy/lux-l1/interchain-token-transfer/06-native-to-erc-20-bridge/:path*",
        destination: "/academy/lux-l1/interchain-token-transfer/08-native-to-erc-20-bridge/:path*",
        permanent: true,
      },
      {
        source: "/academy/lux-l1/l1-native-tokenomics/01-tokens-fundamentals/07-erc-20-tokens",
        destination: "/academy/lux-l1/l1-native-tokenomics/01-tokens-fundamentals/05-erc20",
        permanent: true,
      },
      {
        source: "/academy/lux-l1/l1-native-tokenomics/01-tokens-fundamentals/11-create-a-wrapped-native-token",
        destination: "/academy/lux-l1/l1-native-tokenomics/01b-native-vs-erc20/10-deploy-wrapped-tokens",
        permanent: true,
      },
      {
        source: "/academy/lux-l1/multi-chain-architecture/04-independent-tokenomics/:path*",
        destination: "/academy/lux-l1/l1-native-tokenomics",
        permanent: true,
      },
      {
        source: "/academy/lux-l1/multi-chain-architecture/05-interoperability/:path*",
        destination: "/academy/lux-l1/interchain-messaging",
        permanent: true,
      },
      {
        source: "/docs/api-reference/admin.aspx",
        destination: "/docs/rpcs/other",
        permanent: true,
      },
      {
        source: "/docs/api-reference/lux-sdk/interchain/ictt",
        destination: "/docs/cross-chain/interchain-token-transfer/overview",
        permanent: true,
      },
      {
        source: "/docs/apis/luxgo/public-api-server",
        destination: "/docs/rpcs",
        permanent: true,
      },
      {
        source: "/docs/lux-l1s/troubleshooting",
        destination: "/docs/tooling/lux-cli/maintain/troubleshooting",
        permanent: true,
      },
      {
        source: "/docs/lux-l1s/validator-manager/custom-validator-manager",
        destination: "/docs/lux-l1s/validator-manager/contract",
        permanent: true,
      },
      {
        source: "/docs/lux-l1s/when-to-build-lux-l1",
        destination: "/docs/lux-l1s",
        permanent: true,
      },
      {
        source: "/docs/build/references/cryptographic-primitives",
        destination: "/docs/rpcs/other/standards/cryptographic-primitives",
        permanent: true,
      },
      {
        source: "/docs/build/tutorials/smart-contracts/deploy-a-smart-contract-on-lux-using-remix-and-metamask",
        destination: "/docs/lux-l1s/add-utility/deploy-smart-contract",
        permanent: true,
      },
      {
        source: "/docs/nodes/maintain/background-service-config",
        destination: "/docs/nodes/maintain/run-as-background-service",
        permanent: true,
      },
      {
        source: "/docs/nodes/run-a-node",
        destination: "/docs/nodes",
        permanent: true,
      },
      {
        source: "/docs/reference/luxgo/c-chain/txn-format",
        destination: "/docs/rpcs/c-chain/txn-format",
        permanent: true,
      },
      {
        source: "/docs/subnets/create-evm-subnet-config",
        destination: "/docs/lux-l1s/evm-configuration/evm-l1-customization",
        permanent: true,
      },
      {
        source: "/docs/tags/:path*",
        destination: "/docs",
        permanent: true,
      },
      {
        source: "/docs/tooling/luxjs-guides/:path*",
        destination: "/docs/tooling/lux-sdk",
        permanent: true,
      },
      {
        source: "/docs/tooling/create-lux-nodes/:path*",
        destination: "/docs/tooling/lux-cli/create-lux-nodes/:path*",
        permanent: true,
      },
      {
        source: "/docs/tooling/create-deploy-lux-l1s/:path*",
        destination: "/docs/tooling/lux-cli/create-deploy-lux-l1s/:path*",
        permanent: true,
      },
      {
        source: "/docs/virtual-machines/default-precompiles/transactionallowlist",
        destination: "/docs/lux-l1s/precompiles/transaction-allowlist",
        permanent: true,
      },
      // User-provided resolutions
      {
        source: "/docs/nodes/on-third-party-services/alibaba",
        destination: "/docs/nodes/run-a-node/on-third-party-services/amazon-web-services",
        permanent: true,
      },
      {
        source: "/docs/tooling/lux-network-runner/:path*",
        destination: "/docs/tooling/lux-cli",
        permanent: true,
      },
      {
        source: "/docs/api-reference/lux-sdk/chainkit-sdk/:path*",
        destination: "/docs/tooling/lux-sdk/chainkit/getting-started",
        permanent: true,
      },
      {
        source: "/docs/build/dapp/smart-contracts/nfts/deploy-collection",
        destination: "/academy/blockchain/nft-deployment",
        permanent: true,
      },
      {
        source: "/docs/build/tutorials/smart-digital-assets/wallet-nft-studio",
        destination: "/academy/blockchain/nft-deployment",
        permanent: true,
      },
      {
        source: "/docs/build/vm/create/any-lang-vm",
        destination: "/docs/lux-l1s/rust-vms/intro-lux-rs",
        permanent: true,
      },
      {
        source: "/docs/build/vm/evm/fee-structure",
        destination: "/docs/lux-l1s/evm-configuration/customize-lux-l1",
        permanent: true,
      },
      {
        source: "/docs/subnets/elastic-subnets/:path*",
        destination: "/docs/lux-l1s",
        permanent: true,
      },
      {
        source: "/docs/virtual-machines/rust-vms/:path*",
        destination: "/docs/lux-l1s/rust-vms/:path*",
        permanent: true,
      },
      {
        source: "/docs/tooling/lux-cli/create-wallet",
        destination: "/docs/tooling/lux-cli",
        permanent: true,
      },
      {
        source: "/docs/lux-l1s/add-utility/create-chain-bridge",
        destination: "/docs/cross-chain/interchain-token-transfer/overview",
        permanent: true,
      },
      {
        source: "/docs/deprecated/tutorials-contest/2022/lux-subnet-development",
        destination: "/academy/lux-l1/lux-fundamentals/04-creating-an-l1",
        permanent: true,
      },
      {
        source: "/docs/nodes/maintain/reduce-disk-usage",
        destination: "/docs/nodes/maintain/chain-state-management",
        permanent: true,
      },
      // 404 fixes - December 2025
      {
        source: "/docs/build",
        destination: "/docs",
        permanent: true,
      },
      {
        source: "/docs/build/:path*",
        destination: "/docs",
        permanent: true,
      },
      {
        source: "/docs/nodes/chain-configs",
        destination: "/docs/nodes/chain-configs/primary-network/c-chain",
        permanent: true,
      },
      {
        source: "/docs/nodes/chain-configs/c-chain",
        destination: "/docs/nodes/chain-configs/primary-network/c-chain",
        permanent: true,
      },
      {
        source: "/docs/nodes/chain-configs/x-chain",
        destination: "/docs/nodes/chain-configs/primary-network/x-chain",
        permanent: true,
      },
      {
        source: "/docs/nodes/on-third-party-services/latitude",
        destination: "/docs/nodes/run-a-node/on-third-party-services/latitude",
        permanent: true,
      },
      {
        source: "/docs/reference/luxgo/keystore-api",
        destination: "/docs/rpcs/other",
        permanent: true,
      },
      {
        source: "/docs/specs/coreth-arc20s",
        destination: "/docs/primary-network",
        permanent: true,
      },
      {
        source: "/docs/tooling/guides/import-lux-l1",
        destination: "/docs/tooling/lux-cli/guides/import-lux-l1",
        permanent: true,
      },
      {
        source: "/docs/tooling/maintain/view-lux-l1s",
        destination: "/docs/tooling/lux-cli/maintain/view-lux-l1s",
        permanent: true,
      },
      {
        source: "/docs/virtual-machines/evm-l1-customization",
        destination: "/docs/lux-l1s/evm-configuration/evm-l1-customization",
        permanent: true,
      },
      {
        source: "/academy/lux-l1/l1-native-tokenomics/01-tokens-fundamentals/08-transfer-an-erc-20-token",
        destination: "/academy/lux-l1/l1-native-tokenomics/01-tokens-fundamentals/05-erc20",
        permanent: true,
      },
      {
        source: "/docs/lux-l1s/evm-configuration/transaction-fees",
        destination: "/docs/lux-l1s/precompiles/fee-manager",
        permanent: true,
      },
      // BuilderKit redirect to SDK docs
      {
        source: "/builderkit",
        destination: "/docs/tooling/lux-sdk",
        permanent: true,
      },
      {
        source: "/docs/builderkit",
        destination: "/docs/tooling/lux-sdk",
        permanent: true,
      },
      // AWS one-click validator redirect
      {
        source: "/docs/nodes/build/launch-an-lux-validator-on-aws-with-one-click",
        destination: "/docs/nodes/run-a-node/on-third-party-services/aws-marketplace",
        permanent: true,
      },
      // Academy tokenomics path fixes
      {
        source: "/academy/lux-l1/l1-native-tokenomics/01-tokens-fundamentals/02-native-tokens",
        destination: "/academy/lux-l1/l1-native-tokenomics/01-tokens-fundamentals/03-native-tokens",
        permanent: true,
      },
      {
        source: "/academy/lux-l1/l1-native-tokenomics/02-native-tokens/:path*",
        destination: "/academy/lux-l1/l1-native-tokenomics/02-custom-tokens/:path*",
        permanent: true,
      },
      // Multi-chain architecture starter kit networks redirect
      {
        source: "/academy/lux-l1/multi-chain-architecture/03-lux-starter-kit/06-networks",
        destination: "/academy/lux-l1/interchain-messaging/03-lux-starter-kit/04-networks",
        permanent: true,
      },
      {
        source: "/docs/apis/luxgo/apis/subnet-evm",
        destination: "/docs/rpcs/subnet-evm",
        permanent: true,
      },
      {
        source: "/docs/apis/luxgo/apis/p-chain",
        destination: "/docs/rpcs/p-chain",
        permanent: true,
      },
      // SDK client methods redirect
      {
        source: "/docs/api-reference/lux-sdk/client-sdk/methods/:path*",
        destination: "/docs/tooling/lux-sdk/client/methods/:path*",
        permanent: true,
      },
      // APIs redirect to RPCs
      {
        source: "/docs/apis",
        destination: "/docs/rpcs",
        permanent: true,
      },
      {
        source: "/docs/apis/luxgo/apis/c-chain",
        destination: "/docs/rpcs/c-chain",
        permanent: true,
      },
      {
        source: "/docs/apis/luxgo/apis/:path*",
        destination: "/docs/rpcs/:path*",
        permanent: true,
      },
      {
        source: "/docs/build/dapp/smart-contracts/staking",
        destination: "/docs/primary-network/validate/how-to-stake",
        permanent: true,
      },
      {
        source: "/docs/docs/lux-l1s/evm-configuration/customize-lux-l1",
        destination: "/docs/lux-l1s/evm-configuration/customize-lux-l1",
        permanent: true,
      },
      {
        source: "/docs/docs/lux-l1s/upgrade/precompile-upgrades",
        destination: "/docs/lux-l1s/upgrade/precompile-upgrades",
        permanent: true,
      },
      {
        source: "/docs/docs/:path*",
        destination: "/docs/:path*",
        permanent: true,
      },
      {
        source: "/docs/overview",
        destination: "/docs",
        permanent: true,
      },
      {
        source: "/docs/virtual-machines/evm-customization/executing-test-cases",
        destination: "/docs/lux-l1s/custom-precompiles/executing-test-cases",
        permanent: true,
      },
      // Node config flags redirect
      {
        source: "/docs/nodes/configure/chain-config-flags",
        destination: "/docs/nodes/configure/configs-flags",
        permanent: true,
      },
      // Docker node setup redirect
      {
        source: "/docs/nodes/operate/docker",
        destination: "/docs/nodes/run-a-node/using-docker",
        permanent: true,
      },
      // Installer redirect
      {
        source: "/docs/nodes/run/with-installer",
        destination: "/docs/nodes/run-a-node/using-install-script/installing-lux-go",
        permanent: true,
      },
      // Stake redirect
      {
        source: "/docs/stake",
        destination: "/docs/primary-network/validate/how-to-stake",
        permanent: true,
      },
      // SDK getting-started redirect
      {
        source: "/docs/tooling/lux-sdk/getting-started",
        destination: "/docs/tooling/lux-sdk/client/getting-started",
        permanent: true,
      },
      // Virtual machines redirects
      {
        source: "/docs/virtual-machines/custom-precompiles/background-requirements",
        destination: "/docs/lux-l1s/custom-precompiles/background-requirements",
        permanent: true,
      },
      {
        source: "/docs/virtual-machines/timestamp-vm/:path*",
        destination: "/docs/lux-l1s/timestamp-vm/:path*",
        permanent: true,
      },
      {
        source: "/academy/codebase-entrepreneur-academy/09-fundraising/:path*",
        destination: "/academy/entrepreneur/fundraising-finance/09-fundraising/:path*",
        permanent: true,
      },
      {
        source: "/academy/lux-l1/l1-native-tokenomics/01-tokens-fundamentals/05-transfers-in-smart-contracts",
        destination: "/academy/lux-l1/l1-native-tokenomics/01-tokens-fundamentals/05-erc20",
        permanent: true,
      },
      {
        source: "/docs/api-reference/lux-sdk/client-sdk/:path*",
        destination: "/docs/tooling/lux-sdk/client/:path*",
        permanent: true,
      },
      {
        source: "/docs/roadmap",
        destination: "/docs",
        permanent: true,
      },
      {
        source: "/hack2build/:path*",
        destination: "/hackathons",
        permanent: true,
      },
      {
        source: "/stats/token",
        destination: "/stats/lux-token",
        permanent: true,
      },
      {
        source: "/stats/tokens",
        destination: "/stats/lux-token",
        permanent: true,
      },
      {
        source: "/stats/primary-network/validators",
        destination: "/stats/validators",
        permanent: true,
      },
      {
        source: "/docs/overview/getting-started/lux-consensus",
        destination: "/docs/primary-network/lux-consensus",
        permanent: true,
      },
      {
        source: "/docs/quickstart/multisig-utxos-with-luxjs",
        destination: "/docs/tooling/lux-sdk/client/methods/wallet-methods/wallet",
        permanent: true,
      },
      {
        source: "/docs/subnets/create-a-virtual-machine-vm",
        destination: "/docs/lux-l1s/virtual-machines-index",
        permanent: true,
      },
      {
        source: "/docs/tooling/transactions/:path*",
        destination: "/docs/tooling/lux-cli/transactions/:path*",
        permanent: true,
      },
      {
        source: "/academy/lux-l1/lux-fundamentals/03-multi-chain-architecture-intro/04-setup-core",
        destination: "/academy/lux-l1/lux-fundamentals/03-multi-chain-architecture-intro/05-setup-core",
        permanent: true,
      },
      {
        source: "/academy/lux-l1/customizing-evm/05-evm-configuration/03-setup-chainid",
        destination: "/academy/lux-l1/customizing-evm/05-genesis-configuration/03-setup-chainid",
        permanent: true,
      },
      {
        source: "/academy/lux-l1/customizing-evm/05-evm-configuration/08-build-and-run-custom-genesis-blockchain",
        destination: "/academy/lux-l1/customizing-evm/05-genesis-configuration/08-build-and-run-custom-genesis-blockchain",
        permanent: true,
      },
      {
        source: "/academy/lux-l1/interchain-messaging/08-securing-cross-chain-communication/:path*",
        destination: "/academy/lux-l1/interchain-messaging",
        permanent: true,
      },
      {
        source: "/academy/lux-l1/multi-chain-architecture/02-custom-blockchains/01-custom-blockchains",
        destination: "/academy/lux-l1/lux-fundamentals/03-multi-chain-architecture-intro/04-custom-blockchains-vs-layer-2",
        permanent: true,
      },
      {
        source: "/docs/apis/luxgo",
        destination: "/docs/rpcs",
        permanent: true,
      },
      {
        source: "/docs/lux-l1s/subnet-evm/genesis",
        destination: "/docs/lux-l1s/evm-configuration/customize-lux-l1",
        permanent: true,
      },
      {
        source: "/docs/lux-l1s/subnet-evm/permissioning/transaction-allow-list",
        destination: "/docs/lux-l1s/precompiles/transaction-allowlist",
        permanent: true,
      },
      {
        source: "/docs/builderkit/:path*",
        destination: "/docs/tooling/lux-sdk",
        permanent: true,
      },
      {
        source: "/docs/learn/lux-l1s",
        destination: "/docs/lux-l1s",
        permanent: true,
      },
      {
        source: "/docs/nodes/maintain/bootstrapping",
        destination: "/docs/nodes/maintain/chain-state-management",
        permanent: true,
      },
      {
        source: "/docs/nodes/using-install-script/preparing-environment",
        destination: "/docs/nodes/run-a-node/using-install-script/preparing-environment",
        permanent: true,
      },
      {
        source: "/docs/quickstart/lux-summit-testnet-quickstart",
        destination: "/docs/primary-network",
        permanent: true,
      },
      {
        source: "/docs/quickstart/tools-list",
        destination: "/docs/tooling",
        permanent: true,
      },
      {
        source: "/docs/quickstart/transfer-lux-between-x-chain-and-c-chain",
        destination: "/docs/tooling/lux-sdk/client/methods/wallet-methods/wallet",
        permanent: true,
      },
      {
        source: "/docs/subnets/create-a-evm-blockchain-on-subnet-with-luxjs",
        destination: "/docs/tooling/lux-sdk",
        permanent: true,
      },
      {
        source: "/docs/subnets/create-a-vm-timestampvm",
        destination: "/docs/lux-l1s/timestamp-vm/introduction",
        permanent: true,
      },
      {
        source: "/docs/subnets/introduction-to-vm",
        destination: "/docs/primary-network/virtual-machines",
        permanent: true,
      },
      {
        source: "/academy/lux-l1/customizing-evm/05-evm-configuration/01-genesis-block",
        destination: "/academy/lux-l1/customizing-evm/05-genesis-configuration/01-genesis-block",
        permanent: true,
      },
      {
        source: "/academy/lux-l1/l1-native-tokenomics/01-tokens-fundamentals",
        destination:
          "/academy/lux-l1/l1-native-tokenomics/01-tokens-fundamentals/01-introduction",
        permanent: true,
      },
      {
        source: "/academy/lux-l1/l1-native-tokenomics/02-custom-native-tokens",
        destination:
          "/academy/lux-l1/l1-native-tokenomics/02-custom-tokens/01-introduction",
        permanent: true,
      },
      {
        source: "/academy/lux-l1/l1-native-tokenomics/10-governance/01-introduction",
        destination: "/academy/lux-l1/l1-native-tokenomics/08-governance/01-introduction",
        permanent: true,
      },
      {
        source: "/docs/api-reference/standards/cryptographic-primitives",
        destination: "/docs/rpcs/other/standards/cryptographic-primitives",
        permanent: true,
      },
      {
        source: "/docs/api-reference/standards/serialization-primitives",
        destination: "/docs/rpcs/other/standards/serialization-primitives",
        permanent: true,
      },
      {
        source: "/docs/lux-l1/customizing-evm/05-genesis-configuration/01-genesis-block",
        destination: "/academy/lux-l1/customizing-evm/05-genesis-configuration/01-genesis-block",
        permanent: true,
      },
      {
        source: "/docs/nodes/chain-configs/primary-network",
        destination: "/docs/nodes/chain-configs/primary-network/c-chain",
        permanent: true,
      },
      {
        source: "/docs/quickstart",
        destination: "/docs/primary-network",
        permanent: true,
      },
      {
        source: "/docs/quickstart/transaction-fees",
        destination: "/docs/lux-l1s/precompiles/fee-manager",
        permanent: true,
      },
      {
        source: "/docs/quickstart/exchanges/integrate-exchange-with-lux",
        destination: "/docs/primary-network/exchange-integration",
        permanent: true,
      },
      {
        source: "/docs/subnets/deploying-cross-chain-evm-bridge",
        destination: "/docs/cross-chain/interchain-token-transfer/overview",
        permanent: true,
      },
      {
        source: "/docs/virtual-machines/evm-customization/precompile-overview",
        destination: "/docs/lux-l1s/precompiles/allowlist-interface",
        permanent: true,
      },
      {
        source: "/docs/en/learners-tutorials/how-lux-handles-high-frequency-order-trading",
        destination: "/docs/primary-network",
        permanent: true,
      },
      {
        source: "/academy/lux-l1/l1-native-tokenomics/02-custom-tokens/02-configure-custom-native-token",
        destination:
          "/academy/lux-l1/l1-native-tokenomics/02-custom-tokens/02-custom-native-vs-erc20-native",
        permanent: true,
      },
      {
        source: "/docs/lux-l1/l1-native-tokenomics/04-native-minter",
        destination: "/academy/lux-l1/l1-native-tokenomics/04-native-minter/01-introduction",
        permanent: true,
      },
      {
        source: "/docs/lux-l1s/add-utility/cross-chain-bridge",
        destination: "/docs/cross-chain/interchain-token-transfer/overview",
        permanent: true,
      },
      {
        source: "/docs/lux-l1s/permissioned-l1s/03-create-an-l1/03-genesis-breakdown",
        destination: "/academy/lux-l1/permissioned-l1s/03-create-an-L1/03-genesis-breakdown",
        permanent: true,
      },
      {
        source: "/docs/nodes/maintain/chain-state-management",
        destination: "/docs/nodes/node-storage/chain-state-management",
        permanent: true,
      },
      {
        source: "/docs/nodes/maintain/chain-state-size-reduction",
        destination: "/docs/nodes/node-storage/periodic-state-sync",
        permanent: true,
      }
    ];
  },
};

export default withMDX(config);
