import IconBasket from './../icons/IconBasket'
import classes from '../header/header.module.css'

type BasketProps = {
  cartNumber: number
}

export function Basket() {
  return (
    <div className={classes.basket}>
      <svg height="50" width="50">
        <circle cx="25" cy="25" r="20" stroke="#FFEFCC" fill="#feebc0" />
      </svg>
      <IconBasket />
      
    </div>
  )
}
