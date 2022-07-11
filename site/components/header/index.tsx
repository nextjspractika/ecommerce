import classes from '../header/header.module.css';
import Link from 'next/link';


export function Header(props:any){
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
                    <Link href={'./home'}><a>HOME</a></Link>
                    <Link href={'./shop'}><a>SHOP</a></Link>
                    <Link href={'/'}><a>BLOG</a></Link>
                    <Link href={'/'}><a>CONTACTS</a></Link>
                </div>
                <div className={classes.rightElements}>
                    <p className={classes.p}>$ 200</p>
                    <div className={classes.basket}>
                        <img src={'/assets/headerImg/Basket.png'} />
                        <p>{props.cartNumber}</p>
                    </div>
                </div>
            </nav>

        </>
    )
}