import classes from './card.module.css'
import useClassName from '../../../hooks/useClassName'
import IconBasket from '../../icons/IconBasket'
import CartButton from '../CartButton'

type TProps = {
  className?: string
  isCardList?: boolean
  image: string
  title: string
  price: number
  currency: String
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
        <img width="100%" height="auto" src={props.image} alt={props.title} />
      </div>
      <h5 className={classes.card__title}>{props.title}</h5>
      <span className={classes.card__price}>
        {props.price.toString() + props.currency}
      </span>
    </div>
  )
}

export default Card
