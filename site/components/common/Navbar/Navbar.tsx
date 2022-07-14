import { FC } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
import NavbarRoot from './NavbarRoot'
import { Logo, Container } from '@components/ui'
import { Searchbar, UserNav } from '@components/common'

interface Link {
  href: string
  label: string
}

interface NavbarProps {
  links?: Link[]
}

const Navbar = () => (
  <NavbarRoot>
    <Container clean className="mx-auto max-w-8xl px-6 bg-[#FFFAED]"  >
      <div className={s.nav}>
       
                      
            <div className={s.leftElements}>
               <img src={'/assets/headerImg/Logo.png'} alt="logo" />
               <p>shoplogo</p>
            </div>            
          
            <div className={s.centerElements}>
              <Link href={'/'}>
                <a>home</a>
              </Link>
              <Link href={'/shop'}>
                <a>shop</a>
              </Link>
              <Link href={'/site/pages/home'}>
                <a>blog</a>
              </Link>
              <Link href={'/'}>
                <a>CONTACTS</a>
              </Link>
            </div>
        
        
        
          <UserNav />
        
      </div>
      {process.env.COMMERCE_SEARCH_ENABLED && (
        <div className="flex pb-4 lg:px-6 lg:hidden">
          <Searchbar id="mobile-search" />
        </div>
      )}
    </Container>
  </NavbarRoot>
)

export default Navbar
