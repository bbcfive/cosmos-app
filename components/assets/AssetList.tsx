import React from 'react'

export interface Asset {
  chainName: string
  imgSrc: string | undefined
  isOtherChains: boolean
  name: string
  onDeposit: () => void
  onWithdraw: () => void
  symbol: string
  tokenAmount: string
  tokenAmountPrice: string
}

interface AssetListProps {
  list: Asset[]
  titles: string[]
}

const AssetList: React.FC<AssetListProps> = ({ list, titles }) => {
  return (
    <div
      style={{
        overflowX: 'auto',
        width: '100%',
      }}
    >
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          border: '1px solid #ddd',
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                padding: '16px',
                borderBottom: '2px solid #ddd',
                textAlign: 'left',
                fontSize: '14px',
              }}
            />
            {titles.map((title, index) => (
              <th
                key={index}
                style={{
                  padding: '16px',
                  borderBottom: '2px solid #ddd',
                  textAlign: 'left',
                  fontSize: '14px',
                  backgroundColor: '#f5f5f5',
                  fontWeight: 600,
                  color: '#333',
                }}
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index} style={{ backgroundColor: '#f9f9f9' }}>
              <td
                style={{
                  padding: '16px',
                  borderBottom: '2px solid #ddd',
                  textAlign: 'left',
                  fontSize: '14px',
                }}
              >
                <img
                  src={item.imgSrc}
                  alt={item.name}
                  width={32}
                  height={32}
                  style={{
                    marginRight: '16px',
                  }}
                />
              </td>
              <td
                style={{
                  padding: '16px',
                  borderBottom: '2px solid #ddd',
                  textAlign: 'left',
                  fontSize: '14px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div
                    style={{
                      fontWeight: 'bold',
                    }}
                  >
                    {item.name}
                  </div>
                  <div
                    style={{
                      color: '#666',
                    }}
                  >
                    {item.symbol}
                  </div>
                </div>
              </td>
              <td
                style={{
                  padding: '16px',
                  borderBottom: '2px solid #ddd',
                  fontSize: '14px',
                  textAlign: 'right',
                }}
              >
                <div>{item.tokenAmount}</div>
                <div
                  style={{
                    color: '#666',
                  }}
                >
                  ${item.tokenAmountPrice}
                </div>
              </td>
              <td
                style={{
                  padding: '16px',
                  borderBottom: '2px solid #ddd',
                  textAlign: 'left',
                  fontSize: '14px',
                }}
              >
                <button
                  onClick={() => item.onDeposit()}
                  style={{
                    padding: '8px 16px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    backgroundColor: '#3b82f6',
                    color: 'white',
                  }}
                >
                  Deposit
                </button>
              </td>
              <td
                style={{
                  padding: '16px',
                  borderBottom: '2px solid #ddd',
                  textAlign: 'left',
                  fontSize: '14px',
                }}
              >
                <button
                  onClick={item.onWithdraw}
                  style={{
                    padding: '8px 16px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    backgroundColor: '#ef4444',
                    color: 'white',
                  }}
                >
                  Withdraw
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AssetList
