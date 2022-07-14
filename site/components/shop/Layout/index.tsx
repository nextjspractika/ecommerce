import classes from './layout.module.css'
import Placeholder from '../../Placeholder'

type LayoutProps = {
  title: string
  children: React.ReactNode
}

export function ContentLayout(props: LayoutProps) {
  return (
    <div className={classes.main}>
      <Placeholder />
      <div className={classes.top}>
        <div>
          <span className={classes.home}>Home</span>
          <span> / {props.title}</span>
        </div>
        <h2>{props.title}</h2>
        <div>
          <span>Showing 1-12 of 36 results</span>
          <select className={classes.select} name="" id="">
            <option value="">Default sorting</option>
          </select>
        </div>
      </div>
      {props.children}
    </div>
  )
}
