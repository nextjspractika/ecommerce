
import { useState } from 'react';
import { Layout } from '@components/layout';
import classes from './home.module.css';

export default function Home(){
let num =0;
let price =0;
const [count, setCount] = useState(num);
const [totalPrice, setTotalPrice] = useState(price);
    return(
        <Layout cartNumber={count} totalPrice={totalPrice}>
           
           <button className={classes.addToBasket} onClick={()=>{
            window.localStorage.setItem('cartNumber',(count+1).toString());
            window.localStorage.setItem('totalPrice',(totalPrice+100).toString());
            setCount(count+1); 
            setTotalPrice(totalPrice+100);
            }}>add to basket</button>
        </Layout>
    )
}