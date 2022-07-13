import CartIcon from '../../icons/IconBasket'
import classes from './cartbutton.module.css'
import { useState } from 'react'

export function CartButton() {
  let num = 0
  let price = 0
  const [count, setCount] = useState(num)
  const [totalPrice, setTotalPrice] = useState(price)
  return (
    <button
      className={classes['cart-button']}
      onClick={() => {
        window.localStorage.setItem('cartNumber', (count + 1).toString())
        window.localStorage.setItem('totalPrice', (totalPrice + 100).toString())
        setCount(count + 1)
        setTotalPrice(totalPrice + 100)
      }}
    >
      <CartIcon />
    </button>
  )
}

export default CartButton
