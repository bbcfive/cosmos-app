import { Box, Combobox } from '@interchain-ui/react'
import { useState } from 'react'

import { Button } from '../wallet/Connect'
import { AssetModal } from './AssetModal'
import { AssetLists } from './state/Assets'

export const AddAssets = () => {
  const [open, setOpen] = useState<boolean>(false)
  const assetLists = AssetLists.useAssetLists()
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
      }}
    >
      <Button text="Add Asset" icon="document" onClick={() => void setOpen(true)} />
      {open && assetLists && (
        <Box display="flex" flexDirection="column" gap="$6">
          {/* Seems like Combobox is not rendering Combobox.Item properly */}
          <Combobox
            label="Add assets"
            openOnFocus
            styleProps={{
              width: '350px',
            }}
          >
            {assetLists.assets.map((asset) => {
              return (
                <Combobox.Item key={asset.name}>
                  <span onClick={() => void AssetLists.addToAssetList(asset)}>{asset.name}</span>
                </Combobox.Item>
              )
            })}
          </Combobox>
          {/* So use span list to mock Combobox.Item */}
          {assetLists.assets.map((asset) => (
            <span key={asset.name} onClick={() => void AssetLists.addToAssetList(asset)}>
              {asset.name}
            </span>
          ))}
        </Box>
      )}
      <AssetModal open={open} />
    </div>
  )
}
