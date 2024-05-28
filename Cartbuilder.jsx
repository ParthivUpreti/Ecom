import Cart from "./Cart";
import styles from './Cartbuilder.module.css';
import {useNavigate} from 'react-router-dom'
import { FaDollarSign } from "react-icons/fa";
import { useContext, useRef, useState } from "react";
import { data } from "./store/Contextapi";
const Cartbuilder=({obj,total,refer})=>{
    let [val,setval]=useState(1);
    let currtotal=total;
    let[arr,setarr,totalitem]=useContext(data);
    console.log(arr);
    function decrement(){
        if(val!=0)
        setval(val-1);
        refer.current.innerText=Number(refer.current.innerText)-Number(obj.price);
    }
    function increment(){
        setval(val+1);
        refer.current.innerText=Number(refer.current.innerText)+Number(obj.price);
    }
    return(<>
        <div className={styles.container}>
            <div><img src={obj.image} className={styles.img}></img></div>
            <div>{obj.title}</div>
            <div>
               <button onClick={decrement}>-</button>
               <span >{val}</span>
               <button onClick={increment}>+</button>
            </div>
            <div className={styles.price}>
                <div><FaDollarSign/></div>
                <div style={{fontWeight:"bold"}}>{(obj.price)*val}</div>
            </div>
            <div><button className={styles.btn}>Delete</button></div>
        </div>
    </>)
}

export default Cartbuilder;