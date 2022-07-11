import Card from '../Card/card'
import classes from './cardList.module.css'

let cards = [
  {
    id: '1',
    image: '/assets/bag1.png',
    title: 'Le Bambinou Long',
    price: '$580',
  },
  {
    id: '2',
    image: '/assets/bag1.png',
    title: 'Le Bambinou Long',
    price: '$580',
  },
  {
    id: '3',
    image: '/assets/bag1.png',
    title: 'Le Bambinou Long',
    price: '$580',
  },
  {
    id: '1',
    image: '/assets/bag1.png',
    title: 'Le Bambinou Long',
    price: '$580',
  },
  {
    id: '2',
    image: '/assets/bag1.png',
    title: 'Le Bambinou Long',
    price: '$580',
  },
  {
    id: '3',
    image: '/assets/bag1.png',
    title: 'Le Bambinou Long',
    price: '$580',
  },
]

export function CardList() {
  let List = cards.map((card: any) => (
    <Card
      key={card.id}
      image={card.image}
      title={card.title}
      price={card.price}
    />
  ))
  return <div className={classes.list}> {List}</div>
}

export default CardList
