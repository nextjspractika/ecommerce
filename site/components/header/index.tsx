import classes from '../header/header.module.css';
import Link from 'next/link';
import Image from 'next/image';
///import logo from "../../../site/public/assets/headerImg/Basket.png";
//import logo2 from "../../../site/public/assets/headerImg/Basket.png";
import logo from './Basket.png';
export function Header(){
   // console.log(logo);
    console.log('1');
    return(
        <>
            <nav className={classes.navbar}>
                <div className={classes.leftElements}>
                    <img src={'/assets/headerImg/Logo.png'} alt="logo" />
                    <p>shoplogo</p>
                </div>
                <div className={classes.centerElements}>
                    <Link href={'/'}><a>HOME</a></Link>
                    <Link href={'/'}><a>SHOP</a></Link>
                    <Link href={'/'}><a>BLOG</a></Link>
                    <Link href={'/'}><a>CONTACTS</a></Link>
                </div>
                <div className={classes.rightElements}>
                    <p className={classes.p}>$ 200</p>
                    <img src={'/assets/headerImg/Basket.png'} />
                </div>
            </nav>
        </>
    )
}