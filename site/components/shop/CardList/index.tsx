import classes from './cardList.module.css'
import { ReactNode, Component, Children } from 'react'

interface CardListProps{
  className?: string
  children?: ReactNode[] | Component[] | any[]
}

export function CardList({
  children
}:CardListProps) {
  return <div className={classes.list}>  
  {Children.map(children, (child) => ({
    ...child,
    props: {
      ...child.props,
      className: '',
    },
  }))}</div>
}

export default CardList
