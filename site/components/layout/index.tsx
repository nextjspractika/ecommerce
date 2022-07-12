import classes from '../header/header.module.css';
import Link from 'next/link';
import { Header } from '@components/header';

type LayoutProps={
    
    cartNumber:number;
    totalPrice:number;
    children:React.ReactNode;
    
}

export function Layout( props:LayoutProps){
   
    return(
        <>
            <Header cartNumber={props.cartNumber} totalPrice={props.totalPrice}/>
            <main>
                {props.children}
            </main>

        </>
          
    )
}