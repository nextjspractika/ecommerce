import CardList from '@components/shop/CardList'
import React from 'react'
import { ContentLayout } from '@components/shop/Layout'
import { Layout } from '@components/layout'
import commerce from '@lib/api/commerce'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Card from '@components/shop/Card'

export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  const productsPromise = commerce.getAllProducts({
    variables: { first: 6 },
    config,
    preview,
    // Saleor provider only
    ...({ featured: true } as any),
  })
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const { products } = await productsPromise
  const { pages } = await pagesPromise
  const { categories, brands } = await siteInfoPromise

  return {
    props: {
      products,
      categories,
      brands,
      pages,
    },
    revalidate: 60,
  }
}


export function Shop({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
        <CardList>{products.map((product: any, i: number) => (
          <Card key={product.id} product={product} />
        ))}</CardList>
      </ContentLayout>
    </Layout>
  )
}
export default Shop
