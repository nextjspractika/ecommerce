import React from 'react';
import { Layout } from '@components/layout';

export default function Shop(){
   // let cartNumber = localStorage.getItem('cartNumber');
 
    let  cartNumber = typeof window !== 'undefined' ? localStorage.getItem('cartNumber') : null;
    let totalPrice = typeof window !== 'undefined' ? localStorage.getItem('totalPrice') : null;
    if(cartNumber==null)
        cartNumber='0';
    if(totalPrice==null)
        totalPrice='0';
    return(
        <Layout cartNumber={parseInt(cartNumber)} totalPrice={parseInt(totalPrice)}>
           <div>sss</div>
          
        </Layout>
    )
}