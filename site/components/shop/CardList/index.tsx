import Card from '../Card'
import classes from './cardList.module.css'

let cards = [
  {
    id: '1',
    className: 'card__list',
    image: '/assets/bag1.png',
    title: 'Le Bambinou Long',
    price: 580,
    currency: '$',
  },
  {
    id: '2',
    isCardList: true,
    image: '/assets/bag1.png',
    title: 'Le Bambinou Long',
    price: 580,
    currency: '$',
  },
  {
    id: '3',
    isCardList: true,
    image: '/assets/bag1.png',
    title: 'Le Bambinou Long',
    price: 580,
    currency: '$',
  },
  {
    id: '4',
    isCardList: true,
    image: '/assets/bag1.png',
    title: 'Le Bambinou Long',
    price: 580,
    currency: '$',
  },
  {
    id: '5',
    isCardList: true,
    image: '/assets/bag1.png',
    title: 'Le Bambinou Long',
    price: 580,
    currency: '$',
  },
  {
    id: '6',
    isCardList: true,
    image: '/assets/bag1.png',
    title: 'Le Bambinou Long',
    price: 580,
    currency: '$',
  },
]

export function CardList() {
  let List = cards.map((card: any) => (
    <Card
      className="card__list"
      isCardList={card.isCardList}
      key={card.id}
      image={card.image}
      title={card.title}
      price={card.price}
      currency={card.currency}
    />
  ))
  return <div className={classes.list}> {List}</div>
}

export default CardList
