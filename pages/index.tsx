import { Divider } from '@interchain-ui/react'

import { Layout, Wallet } from '@/components'
import { AddAssets } from '@/components/assets/AddAssets'

export default function Home() {
  return (
    <Layout>
      <div className="flex items-center justify-center gap-4">
        <Wallet />
        <AddAssets />
      </div>
      <Divider mb="$16" />
    </Layout>
  )
}
