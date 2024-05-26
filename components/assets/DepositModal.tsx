import { Box } from '@interchain-ui/react'
import React, { useState } from 'react'

import { fmtAddress } from '@/utils'

import { AssetLists } from './state/Assets'

export const DepositModal = ({ onClose }: { onClose: () => void }) => {
  const [value, setValue] = useState<number | null>(null)

  const currency = 'ATOM'
  const count = 2
  const wait = 20
  const atomWallet = 'atom1xv9tklw7d82sezh9haa573wufgy59vmwe6xx2n'

  const selectedAsset = AssetLists.useSelectedAsset()
  const mockWallet = `${selectedAsset?.base.slice(6)}` ?? '1xv9tklw7d82sezh9haa573wufgy59vmwe6xx2n'

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#1A1A1A',
        padding: '20px',
        borderRadius: '8px',
        width: '400px',
        color: '#E0E0E0',
      }}
    >
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Deposit {currency}</p>
        <button style={{ background: 'none', border: 'none', color: '#E0E0E0', fontSize: '18px' }} onClick={onClose}>
          X
        </button>
      </header>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
          <p>From Comsos Hub</p>
          <Box display="flex" flexDirection="column" gap="$6">
            <input
              style={{
                width: '100%',
                backgroundColor: '#333',
                color: '#E0E0E0',
                border: '1px solid #555',
                height: '32px',
              }}
              value={fmtAddress(atomWallet)}
              readOnly
            />
          </Box>
        </div>

        <p style={{ alignSelf: 'center', fontSize: '24px', justifySelf: 'center' }}>{'->'}</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
          <p>To {selectedAsset?.name}</p>
          <Box display="flex" flexDirection="column" gap="$6">
            <input
              style={{
                width: '100%',
                backgroundColor: '#333',
                color: '#E0E0E0',
                border: '1px solid #555',
                height: '32px',
              }}
              value={fmtAddress(selectedAsset?.address ?? mockWallet)}
              readOnly
            />
          </Box>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
          <p>Select amount</p>
          <p>
            Available {count} {currency}
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            border: '1px solid #333',
            borderRadius: '4px',
            padding: '8px',
            backgroundColor: '#222',
          }}
        >
          {/* chain icon */}
          <input
            type="number"
            value={value ?? count}
            onChange={(v) => {
              const num = parseInt(v.target.value)
              setValue(num)
            }}
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              border: 'none',
              color: '#E0E0E0',
              fontSize: '16px',
            }}
          />
          <p style={{ marginLeft: '8px' }}>{currency} = $1,013</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
          <button
            onClick={() => setValue(count)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#444',
              color: '#E0E0E0',
              border: 'none',
              borderRadius: '4px',
            }}
          >
            Max
          </button>
          <button
            onClick={() => setValue(count / 2)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#444',
              color: '#E0E0E0',
              border: 'none',
              borderRadius: '4px',
            }}
          >
            1/2
          </button>
          <button
            onClick={() => setValue(count / 3)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#444',
              color: '#E0E0E0',
              border: 'none',
              borderRadius: '4px',
            }}
          >
            1/3
          </button>
        </div>
      </div>

      <div style={{ marginBottom: '16px' }}>
        {/* wait icon */}
        <p style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#AAA' }}>
          <span style={{ fontSize: '16px' }}>Estimated time:</span>{' '}
          <span style={{ fontSize: '16px', fontWeight: 'bold' }}>{wait} seconds</span>
        </p>
      </div>

      <button
        style={{
          height: '40px',
          width: '100%',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          marginBottom: '8px',
          fontSize: '16px',
        }}
        onClick={onClose}
      >
        Transfer
      </button>
      <button style={{ background: 'none', border: 'none', color: '#E0E0E0', fontSize: '16px' }} onClick={onClose}>
        Cancel
      </button>
    </div>
  )
}
