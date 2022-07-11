
import { useState } from 'react';
import { Layout } from '@components/layout';
import classes from './home.module.css';

export default function Home(){
let num =0;
const [count, setCount] = useState(num);
    return(
        <Layout cartNumber={count}>
           
           <button className={classes.addToBasket} onClick={()=>{
            window.localStorage.setItem('cartNumber',(count+1).toString());
            setCount(count+1); 
            
            }}>add to basket</button>
        </Layout>
    )
}