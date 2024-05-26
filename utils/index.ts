import { Asset, Chain } from '@chain-registry/types'
import { chains } from 'chain-registry'

export function getLogo(from: Asset | Chain) {
  return from.logo_URIs?.svg || from.logo_URIs?.png || from.logo_URIs?.jpeg
}

export function getChainLogo(name: string) {
  const chain = chains.find((chain) => chain.chain_name === name)
  return chain ? getLogo(chain) : null
}

export const fmtAddress = (address: string) => {
  if (address.length < 10) return address
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}
