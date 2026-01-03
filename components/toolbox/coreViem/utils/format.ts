/**
 * Formats a numerical LUX balance (in nLUX) to a human-readable string with LUX denomination
 * @param balance - The balance in nLUX (nano LUX, 1 LUX = 10^9 nLUX)
 * @returns Formatted balance string with LUX denomination
 */
export function formatLuxBalance(balance: number | bigint): string {
    const balanceNum = typeof balance === 'bigint' ? Number(balance) : balance;
    return (
        (balanceNum / 1_000_000_000).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }) + " LUX"
    );
} 