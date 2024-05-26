import type { Meta, StoryObj } from '@storybook/react'

import AssetList from '../components/assets/AssetList'

const meta = {
  title: 'Example/AssetList',
  component: AssetList,
  parameters: {
    layout: 'left',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AssetList>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    list: [
      {
        chainName: 'Juno',
        imgSrc: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png',
        isOtherChains: false,
        name: 'Terra Classic',
        onDeposit: () => alert('Deposit USTC'),
        onWithdraw: () => alert('Withdraw USTC'),
        symbol: 'USTC',
        tokenAmount: '89.66',
        tokenAmountPrice: '10',
      },
      {
        chainName: 'Juno',
        imgSrc: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png',
        isOtherChains: false,
        name: 'Teritori',
        onDeposit: () => alert('Deposit TORI'),
        onWithdraw: () => alert('Withdraw TORI'),
        symbol: 'TORI',
        tokenAmount: '102.61',
        tokenAmountPrice: '101.02',
      },
    ],
    titles: ['Asset', 'Balance'],
  },
}
