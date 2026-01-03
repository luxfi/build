/**
 * Account utilities for Lux addresses
 */
import BinTools from 'luxfi/dist/utils/bintools'
import { Buffer } from 'buffer/'
import { createHash } from 'crypto'

const bintools = BinTools.getInstance()

/**
 * Converts a public key to an X/P chain address
 */
export function publicKeyToXPAddress(publicKey: string, hrp: string): string {
  // Remove 0x prefix if present
  const cleanPubKey = publicKey.startsWith('0x') ? publicKey.slice(2) : publicKey

  // Convert hex public key to buffer
  const pubKeyBuffer = Buffer.from(cleanPubKey, 'hex')

  // Hash the public key with sha256 then ripemd160 (standard address derivation)
  const sha256Hash = createHash('sha256').update(pubKeyBuffer).digest()
  const ripemd160Hash = createHash('ripemd160').update(sha256Hash).digest()

  // Create address buffer
  const addressBuffer = Buffer.from(ripemd160Hash)

  // Encode as bech32 with the given hrp
  return bintools.addressToString(hrp, 'P', addressBuffer)
}
