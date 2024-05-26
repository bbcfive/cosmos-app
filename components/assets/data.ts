import { ChainRegistryClient } from '@chain-registry/client'

// create an instance of ChainRegistryClient by passing in the chain names
const client = new ChainRegistryClient({
  chainNames: ['osmosis', 'juno', 'stargaze'],
})

// get asset list
export const getAssetList = (chainName: string) => client.getChainAssetList(chainName)
