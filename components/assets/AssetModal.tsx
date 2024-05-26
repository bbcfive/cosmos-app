import { useEffect, useState } from 'react'

import AssetList from './AssetList'
import { DepositModal } from './DepositModal'
import { AssetLists } from './state/Assets'

export const AssetModal = ({ open }: { open: boolean }) => {
  const assetLists = AssetLists.useAddedAssetList()
  const [openDepositModal, setOpenDepositModal] = useState<boolean>(false)
  const [openWithdrawModal, setOpenWithdrawModal] = useState<boolean>(false)

  if (!open || !assetLists) return null

  const fmtAssetLists = assetLists.assets.map((item) => ({
    chainName: item.display,
    imgSrc: item.images?.[0].png || item.images?.[0].svg || item.images?.[0].jpeg,
    name: item.name,
    isOtherChains: false,
    onDeposit: () => {
      AssetLists.setSelectedAsset(item)
      setOpenDepositModal(true)
    },
    onWithdraw: () => {
      AssetLists.setSelectedAsset(item)
      setOpenWithdrawModal(true)
    },
    symbol: item.symbol,
    tokenAmount: '0',
    tokenAmountPrice: '0',
  }))

  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <AssetList list={fmtAssetLists} titles={['Asset', 'Balance']} />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        }}
      >
        {openDepositModal && (
          <DepositModal
            onClose={() => {
              AssetLists.setSelectedAsset(null)
              setOpenDepositModal(false)
            }}
          />
        )}
      </div>
    </div>
  )
}
