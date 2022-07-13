import { Header } from '@components/header'
import Footer from '@components/footer'

type LayoutProps = {
  cartNumber: number
  totalPrice: number
  children: React.ReactNode
}

export function Layout(props: LayoutProps) {
  return (
    <>
      <Header cartNumber={props.cartNumber} totalPrice={props.totalPrice} />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}
