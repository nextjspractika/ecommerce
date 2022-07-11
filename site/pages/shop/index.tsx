import React from 'react';
import { Layout } from '@components/layout';

export default function Shop(){
   // let cartNumber = localStorage.getItem('cartNumber');
    let cartNumber = typeof window !== 'undefined' ? localStorage.getItem('cartNumber') : null
    return(
        <Layout cartNumber={cartNumber}>
           <div>sss</div>
          
        </Layout>
    )
}