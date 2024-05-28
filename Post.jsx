import { useContext, useRef, useState } from 'react';
import styles from './Post.module.css';
import { FaDollarSign } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import {Rating} from 'react-simple-star-rating';
import { data } from './store/Contextapi';
const Post=({ele})=>{
    let[arr,setarr,]=useContext(data);
    let nav=useNavigate();
    let totalitem=useRef(1);
    function carthandler(){
        nav("/Cart");
        let newarr=[...arr];
        setarr([...newarr,ele]);
    }
    return(<>
       <div className={styles.container}>
            <div><img className={styles.img} src={ele.image}></img></div>
            <div className={styles.item}>
                <div className={styles.title}>{ele.title}</div>
                <div className={styles.price}>
                    <div><FaDollarSign/></div>
                    <div className={styles.value}>{ele.price}</div>
                </div>
                <input type="number" ref={totalitem} className={styles.number}></input>
                <div className={styles.rating}>
                    <Rating initialValue={ele.rating.rate}></Rating>
                    <a href="#">{ele.rating.count}</a>
                </div>
                <button className={styles.btn} onClick={carthandler}>Add to Cart</button>
            </div>
       </div> 
    </>)
}

export default Post;