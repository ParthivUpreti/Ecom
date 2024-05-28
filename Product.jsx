import { useContext, useEffect,useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";
import styles from './Product.module.css';
import { data } from "./store/Contextapi";
const Product=()=>{
    let {Productid}=useParams();
    let nav=useNavigate();
    let val=useLoaderData();
    let[arr,setarr,totalitem]=useContext(data);
    let newval=val.filter((ele)=>{
        return ele.id==Productid;
    })

    function clickhandler(){
        nav("/Cart");
        let newarr=[...arr];
        newarr=[...newarr,...newval];
        setarr(newarr);
    }

    return(<>
    <center>
    <div className={styles.container}>
        {
            newval.length!=0 ? <img className={styles.img} src={newval[0].image}/> : <div/>
        }
        <div className={styles.title}>{ newval.length!=0 && newval[0].title}</div>
        <div className={styles.price}>
            <div><FaDollarSign/></div>
            <div>{newval.length!=0 && newval[0].price}</div>
        </div>
        <div className={styles.description}>{newval.length!=0 && newval[0].description}</div>
        <button className={styles.btn} onClick={ newval.length!=0 && clickhandler}>Add to Cart</button>
    </div>
    </center>
    </>)
}

export default Product;