import classes from '../header/header.module.css';
import Link from 'next/link';
import { Header } from '@components/header';

export function Layout( props:any){
   
    return(
        <>
            <Header cartNumber={props.cartNumber}/>
            <main>
                {props.children}
            </main>
        </>
          
    )
}