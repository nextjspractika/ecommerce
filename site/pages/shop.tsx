import CardList from '@components/shop/CardList'
import Footer from '@components/footer'
import React from 'react'
import { useState } from 'react';
import { Layout } from '@components/layout'
import {Navbar} from '@components/common';

export function Shop() {
  let num =0;
  let price =0;
  const [count, setCount] = useState(num);
  const [totalPrice, setTotalPrice] = useState(price);

 
  /*let cartNumber =
    typeof window !== 'undefined' ? localStorage.getItem('cartNumber') : null
  let totalPrice =
    typeof window !== 'undefined' ? localStorage.getItem('totalPrice') : null
  if (cartNumber == null) cartNumber = '0'
  if (totalPrice == null) totalPrice = '0'
*/
  return (
    <Layout cartNumber={count} totalPrice={totalPrice}>
      <Navbar/>
      <CardList />
      <Footer />
    </Layout>
  )
}
export default Shop
