import classes from './card.module.css'
import useClassName from '../../../hooks/useClassName'
import CartButton from '../CartButton'
import type { Product } from '@commerce/types/product'
import Image from 'next/image'

type TProps = {
  className?: string
  isCardList?: boolean
  product: Product
}

export function Card(props: TProps) {
  const { isCardList = true, className } = props
  const cn = useClassName()
  return (
    <div
      className={cn([classes.card, className], {
        [classes['card__list']]: isCardList,
      })}
    >
      <CartButton />
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
