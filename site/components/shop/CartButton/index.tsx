import CartIcon from '../../icons/IconBasket'
import classes from './cartbutton.module.css'

export function CartButton(props:any) {
  return (
    <button
      className={classes['cart-button']}
      onClick={props}
    >
    <CartIcon />
    </button>
  )
}

export default CartButton
