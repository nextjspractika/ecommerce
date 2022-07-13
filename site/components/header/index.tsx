import classes from './header.module.css'
import Link from 'next/link'
import { Basket } from './Basket'
type HeaderProps = {
  cartNumber: number
  totalPrice: number
}

export function Header(props: HeaderProps) {
  return (
    <nav className={classes.navbar}>
      <div className={classes.leftElements}>
        <img src={'/assets/headerImg/Logo.png'} alt="logo" />
        <p>shoplogo</p>
      </div>
      <div className={classes.centerElements}>
        <Link href={'/home'}>
          <a>home</a>
        </Link>
        <Link href={'/shop'}>
          <a>shop</a>
        </Link>
        <Link href={'/site/pages/home'}>
          <a>blog</a>
        </Link>
        <Link href={'/'}>
          <a>CONTACTS</a>
        </Link>
      </div>

      <div className={classes.rightElements}>
        <p className={classes.p}>$ {props.totalPrice}</p>
        <Basket cartNumber={props.cartNumber} />
      </div>
    </nav>
  )
}
