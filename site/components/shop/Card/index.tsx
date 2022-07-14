import classes from './card.module.css'
import useClassName from '../../../hooks/useClassName'
import type { Product } from '@commerce/types/product'
import Image from 'next/image'
import { useState } from 'react'
import { useAddItem } from '@framework/cart'
import CartIcon from '../../icons/IconBasket'


type TProps = {
  className?: string
  isCardList?: boolean
  product: Product
}

export function Card(props: TProps) {
  const [loading, setLoading] = useState(false)
  const addItem = useAddItem()
  const addToCart = async () => {
    setLoading(true)
    try {
      await addItem({
        productId: String(props.product.id),
        variantId: String(props.product.variants[0]?.id),
      })
      setLoading(false)
    } catch (err) {
      setLoading(false)
    }
  }
  const { isCardList = true, className } = props
  const cn = useClassName()
  return (
    <div
      className={cn([classes.card, className], {
        [classes['card__list']]: isCardList,
      })}
    >
      <button
      className={classes['cart-button']}
      onClick={addToCart}
    >
    <CartIcon />
    </button>
      <div className={classes.card__img}>
        <Image
           height={200}
           width={280}
           layout="fixed"
          src={props.product.images[0].url}
          alt={props.product.name}
        />
      </div>
      <h5 className={classes.card__title}>{props.product.name}</h5>
      <span className={classes.card__price}>
        {props.product.price.value.toString() + ' RUB'}
      </span>
    </div>
  )
}

export default Card
