import CardList from '@components/shop/CardList'
import React from 'react'
import { Layout } from '@components/common'
import { ContentLayout } from '@components/shop/Layout'
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

export default function Shop({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  let title = 'Shop'
  return (
      <ContentLayout title={title}>
        <CardList>{products.map((product: any, i: number) => (
          <Card key={product.id} product={product} />
        ))}</CardList>
      </ContentLayout>
  )
}
Shop.Layout = Layout
