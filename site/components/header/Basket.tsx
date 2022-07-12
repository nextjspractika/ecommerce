import IconBasket from './../icons/IconBasket';
import classes from '../header/header.module.css';

type BasketProps={
    cartNumber:number;
}


export function Basket(props:BasketProps){

    return(
        
        <div className={classes.basket}>            
            <svg height="50" width="50">
                <circle cx="25" cy="25" r="20"  fill="radial-gradient(50% 50% at 50% 50%, rgba(253, 172, 31, 0) 0%, #FFEFCC 89.58%)" />               
            </svg>
            <IconBasket/>
            <p>{props.cartNumber}</p>
         </div>
         
         
    )

}