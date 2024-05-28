import { useContext, useEffect, useState } from "react";
import Cartbuilder from "./Cartbuilder";
import { useLocation } from "react-router-dom";
import { data } from "./store/Contextapi";
import { useRef } from "react";
const Cart=()=>{
    let val=useRef("");
    const loc=useLocation();
    let[arr,setarr,totalitem]=useContext(data);
    console.log(arr);
    let total=0;
    return(<>
        {arr.map((ele)=>{
            total+=ele.price;
            return <Cartbuilder total={total} obj={ele} refer={val} key={ele.title}/>
        })}
        <div ref={val}>{total}</div>
    </>)
}

export default Cart;