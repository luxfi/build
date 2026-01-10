/**
 * Network IDs for Lux Network
 * MainnetID = 1, TestnetID = 2, DevnetID = 3, CustomID = 1337
 */

export const networkIDs = {
  MainnetID: 1 as const,
  TestnetID: 2 as const,
  LocalID: 3 as const,    // DevnetID
  DevnetID: 3 as const,
  CustomID: 1337 as const,

  // HRP (Human Readable Part) for bech32 addresses
  getHRP: (networkID: number): string => {
    const hrpMap: Record<number, string> = {
      1: 'lux',
      2: 'testnet',
      3: 'local',
      1337: 'custom',
    };
    return hrpMap[networkID] || 'custom';
  },

  // Network name from ID
  getNetworkName: (networkID: number): string => {
    const nameMap: Record<number, string> = {
      1: 'mainnet',
      2: 'testnet',
      3: 'devnet',
      1337: 'custom',
    };
    return nameMap[networkID] || 'custom';
  },
};

export type NetworkID = typeof networkIDs.MainnetID | typeof networkIDs.TestnetID;

export default networkIDs;
