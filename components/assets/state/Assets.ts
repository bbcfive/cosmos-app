import { Asset, AssetList, Chain } from '@chain-registry/types'
import { assets, chains } from 'chain-registry'
import { enableMapSet } from 'immer'
import { useEffect } from 'react'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { getAssetList } from '../data'

enableMapSet()

export namespace AssetLists {
  // [definition] ⬇ --------
  type ChainId = Chain['chain_id']

  // [store] ⬇ --------
  type Store = {
    selectedChain: Chain
    assetLists: Map<ChainId, AssetList>
    addedAssetList: Map<ChainId, AssetList>
    selectedAsset: Asset | null
  }
  const useStore = create(
    immer<Store>(() => ({
      selectedChain: chains[1],
      assetLists: new Map(),
      addedAssetList: new Map(),
      selectedAsset: null,
    })),
  )

  // [hooks] ⬇ --------
  export function useAddedAssetList() {
    return useStore((x) => x.addedAssetList.get(x.selectedChain.chain_id))
  }

  export function useSelectedAsset() {
    return useStore((x) => x.selectedAsset)
  }

  export function useAssetLists() {
    const chainId = useStore((x) => x.selectedChain.chain_id)
    const data = useStore((x) => {
      if (!chainId) return null
      return x.assetLists.get(chainId)
    })

    const ds = process.env.REACT_APP_DATA_SOURCE

    useEffect(() => {
      if (!chainId) return
      const chainName = chains.find((x) => x.chain_id === chainId)?.chain_name
      if (!chainName) return

      const assetList = (() => {
        if (ds === 'client') return getAssetList(chainName)
        return assets.find(({ chain_name }) => chain_name === chainName)
      })()

      if (assetList)
        useStore.setState((draft) => {
          draft.assetLists.set(chainId, assetList)
        })
    }, [chainId])

    return data
  }

  // [operations] ⬇ --------

  export const setSelectedChain = (chain: Chain) =>
    useStore.setState((draft) => {
      draft.selectedChain = chain
    })

  export const setSelectedAsset = (asset: Asset | null) =>
    useStore.setState((draft) => {
      draft.selectedAsset = asset
    })

  export const addToAssetList = (asset: Asset) =>
    useStore.setState((draft) => {
      const chainId = draft.selectedChain.chain_id
      const addedAssetList = draft.addedAssetList.get(chainId)
      if (addedAssetList?.assets.find((x) => x.name === asset.name)) return
      draft.addedAssetList.set(chainId, {
        chain_name: draft.selectedChain.chain_name,
        assets: [...(addedAssetList?.assets ?? []), asset],
      })
    })
}
