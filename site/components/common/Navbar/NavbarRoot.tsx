import { FC, useState, useEffect } from 'react'
import throttle from 'lodash.throttle'
import cn from 'clsx'
import s from './Navbar.module.css'

const NavbarRoot: FC = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default NavbarRoot
