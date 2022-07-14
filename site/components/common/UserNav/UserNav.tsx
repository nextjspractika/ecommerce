import cn from 'clsx'
import Link from 'next/link'
import s from './UserNav.module.css'
import { Avatar } from '@components/common'
import useCart from '@framework/cart/use-cart'
import { useUI } from '@components/ui/context'
import { Heart, Bag, Menu } from '@components/icons'
import CustomerMenuContent from './CustomerMenuContent'
import useCustomer from '@framework/customer/use-customer'
import React from 'react'
import { Basket } from '@components/header/Basket'
import usePrice from '@framework/product/use-price'
import {
  Dropdown,
  DropdownTrigger as DropdownTriggerInst,
  Button,
} from '@components/ui'

import type { LineItem } from '@commerce/types/cart' 

const countItem = (count: number, item: LineItem) => count + item.quantity;

const UserNav: React.FC<{
  className?: string
}> = ({ className }) => {
  const { data } = useCart()
  const { price: total } = usePrice(
    data && {
      amount: Number(data.totalPrice),
      currencyCode: data.currency.code,
    }
  )

  console.log(data);
  const { data: isCustomerLoggedIn } = useCustomer()
  const {
    toggleSidebar,
    closeSidebarIfPresent,
    openModal,
    setSidebarView,
    openSidebar,
  } = useUI()

  const itemsCount = data?.lineItems.reduce(countItem, 0) ?? 0
  const DropdownTrigger = isCustomerLoggedIn
    ? DropdownTriggerInst
    : React.Fragment

  return (
    <nav className={cn(s.root, className)}>
      <p>{total}</p>
      <ul className={s.list}>
        {process.env.COMMERCE_CART_ENABLED && (
          <li className={s.item}>
            <Button
              className={s.item}
              variant="naked"
              onClick={() => {
                setSidebarView('CART_VIEW')
                openSidebar()
              }}
              aria-label={`Cart items: ${itemsCount}`}
            >
              <Basket />
              {itemsCount > 0 && (
                <span className={s.basket}>{itemsCount}</span>
              )}
            </Button>
          </li>
        )}
        {process.env.COMMERCE_WISHLIST_ENABLED && (
          <li className={s.item}>
            <Link href="/wishlist">
              <a onClick={closeSidebarIfPresent} aria-label="Wishlist">
                <Heart />
              </a>
            </Link>
          </li>
        )}
       
        
      </ul>
    </nav>
  )
}

export default UserNav
