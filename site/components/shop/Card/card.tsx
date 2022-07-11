import classes from './card.module.css'

interface CardProps {
  image: string
  title: string
  price: string
}

export function Card({ image, title, price }: CardProps) {
  return (
    <div className={classes.card}>
      <span className={classes.card__cart}></span>
      <div className={classes.card__img}>
        <img width="100%" height="auto" src={image} alt={title} />
      </div>
      <h5 className={classes.card__title}>{title}</h5>
      <span className={classes.card__price}>{price}</span>
    </div>
  )
}

export default Card
