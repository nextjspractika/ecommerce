import CardList from '@components/shop/CardList'
import React from 'react'
import { ContentLayout } from '@components/shop/Layout'
import { Layout } from '@components/layout'

export function Shop() {
  let cartNumber =
    typeof window !== 'undefined' ? localStorage.getItem('cartNumber') : null
  let totalPrice =
    typeof window !== 'undefined' ? localStorage.getItem('totalPrice') : null
  if (cartNumber == null) cartNumber = '0'
  if (totalPrice == null) totalPrice = '0'
  let title = 'Shop'
  return (
    <Layout cartNumber={parseInt(cartNumber)} totalPrice={parseInt(totalPrice)}>
      <ContentLayout title={title}>
        <CardList />
      </ContentLayout>
    </Layout>
  )
}
export default Shop
