import Image from 'next/image'
import { useState} from 'react';
import styles from "../styles/Home.module.css"
import Link from "next/link"

export default function Guide({}) {
        const [ numberOrder , setOrder]  = useState([0, 1, 2]);
        const shuffle = (arr)=> {
                let copy = [...arr];
                let first = copy[0];
                copy.push(first);
                copy.shift();
                return copy;
        } 
        
        const matrix = [['benzema','kante','ronaldo'],['qmark','messi','salah'],['lewandowski', 'qmark','jorginho']];
        const matrixMap = matrix.map((element) => {
                return (
                        <div key ={element[0]}>
                                <Image src={`/${element[numberOrder[0]]}.jpg`} width={110} height={110} alt={element[numberOrder[0]]}/> 
                                <Image src={`/${element[numberOrder[1]]}.jpg`} width={110} height={110} alt={element[numberOrder[0]]}/> 
                                <Image src={`/${element[numberOrder[2]]}.jpg`} width={110} height={110} alt={element[numberOrder[0]]}/> 
                        </div>              
                )
        });
        return (
            <>
            <div onClick = {()=>setOrder(shuffle(numberOrder))} className={styles.guide} >
                {matrixMap}
            </div>
            <article className={styles.article}>
            <p>
            Game theory is a hard discipline. This site provides a different perspective to understand it.
            </p>
            <p>
            Data parsed from offcial voting results from France Football and FIFA
            </p>
            <p>
                To get started, click<Link href='./ballon_dor' passHref><strong> here</strong></Link>
            </p>
            </article>
            </>

        )
  }
