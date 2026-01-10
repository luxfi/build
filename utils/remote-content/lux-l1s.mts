import { FileConfig } from './shared.mts';

/**
 * Lux L1s (formerly Subnets) configuration content
 * Includes L1 configs, Subnet-EVM, and Validator Manager
 */
export function getLuxL1sConfigs(): FileConfig[] {
  return [
    {
      sourceUrl: "https://raw.githubusercontent.com/ava-labs/luxgo/master/subnets/config.md",
      outputPath: "content/docs/nodes/configure/lux-l1-configs.mdx",
      title: "Lux L1 Configs",
      description: "This page describes the configuration options available for Lux L1s.",
      contentUrl: "https://github.com/ava-labs/luxgo/blob/master/subnets/",
    },
    {
      sourceUrl: "https://raw.githubusercontent.com/ava-labs/subnet-evm/master/plugin/evm/config/config.md",
      outputPath: "content/docs/nodes/chain-configs/subnet-evm.mdx",
      title: "Subnet-EVM Configs",
      description: "This page describes the configuration options available for the Subnet-EVM.",
      contentUrl: "https://github.com/ava-labs/subnet-evm/blob/master/plugin/evm/config/",
    },
    {
      sourceUrl: "https://raw.githubusercontent.com/ava-labs/icm-contracts/refs/heads/main/contracts/validator-manager/README.md",
      outputPath: "content/docs/lux-l1s/validator-manager/contract.mdx",
      title: "Validator Manager Contracts",
      description: "This page lists all available contracts for the Validator Manager.",
      contentUrl: "https://github.com/ava-labs/icm-contracts/blob/main/contracts/validator-manager/",
    },
    {
      sourceUrl: "https://raw.githubusercontent.com/ava-labs/subnet-evm/1ab7114c339f866b65cc02dfd586b2ed9041dd0b/precompile/contracts/warp/README.md",
      outputPath: "content/docs/lux-l1s/evm-configuration/warpmessenger.mdx",
      title: "WarpMessenger Precompile - Technical Details",
      description: "Technical documentation for the WarpMessenger precompile implementation in subnet-evm.",
      contentUrl: "https://github.com/ava-labs/subnet-evm/blob/1ab7114c339f866b65cc02dfd586b2ed9041dd0b/precompile/contracts/warp/",
    },
  ];
}

