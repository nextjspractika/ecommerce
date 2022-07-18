import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
import { ProductCard } from '@components/product'
import { Grid, Marquee, Hero } from '@components/ui'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import CarouselCompound from '@components/slider/carousel-compound'
import classes from './index.module.css';
import ImageSlider from '@components/slider/ImageSlider'
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

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    
    
    <CarouselCompound infinite>
      <CarouselCompound.Page>
        <ImageSlider source='/assets/sliderImages/slide1.png' 
          header='La banane Meunier' 
          headerText='A bag is a kind of soft container. It can hold or carry things. It may be made from cloth, leather, plastic, or paper.'
        />
      </CarouselCompound.Page>
      <CarouselCompound.Page>
      <ImageSlider source='/assets/sliderImages/slide1.png' 
          header='La banane Meunier' 
          headerText='A bag is a kind of soft container. It can hold or carry things. It may be made from cloth, leather, plastic, or paper.'
        />
      </CarouselCompound.Page>
      <CarouselCompound.Page>
      <ImageSlider source='/assets/sliderImages/slide1.png' 
          header='La banane Meunier' 
          headerText='A bag is a kind of soft container. It can hold or carry things. It may be made from cloth, leather, plastic, or paper.'
        />
      </CarouselCompound.Page>
      </CarouselCompound>
      
      
    
  )
}

Home.Layout = Layout
