import { IoMdSearch } from "react-icons/io";
import styles from './Header.module.css';
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { useState } from "react";
import SearchItem from "./SearcItem";
import { useAuth0 } from "@auth0/auth0-react";
const Header=()=>{
    let{isAuthenticated,logout,loginWithRedirect}=useAuth0();
    let[choices,setchoices]=useState([]);
    function fetchhandler(value){
        let url="https://fakestoreapi.com/products";
        fetch(url).then((data)=>{
            return data.json();
        }).then((data)=>{
            let arr=data.filter((ele)=>{
                return(ele && value && ele.title.toLowerCase().includes(value.toLowerCase()));
            })
            setchoices(arr);
        });
    }
    function changehandler(ele){
        fetchhandler(ele.target.value);
    }

    function debouncing(input,delay){
        let time;
        return (...args)=>{
            clearTimeout(time);
            time=setTimeout(()=>{
                input(...args);
            },delay);
        }
    }
    return(<>
    <div className={styles.container}>
    <Link to="http://localhost:5173/Home"><img src="https://t3.ftcdn.net/jpg/02/45/84/16/360_F_245841615_d7QzRv937jfiC176rmKK60ckNXU9V76z.jpg" className={styles.navimg}></img></Link>
    <div className={styles.inputbox}>
        <div className={styles.searchbar}>
            <input type="text" onChange={debouncing(changehandler,1000)} className={styles.input}></input>
            <SearchItem arr={choices}/>
        </div>
        <button className={styles.btn}><IoMdSearch/></button>
    </div>
    <div className={styles.navicon}>
        <Link to="http://localhost:5173/Home"><FaHome/></Link>
        <Link to="http://localhost:5173/Cart"><FaShoppingCart/></Link>
        {isAuthenticated ? <Link to="http://localhost:5173/Profile"><CgProfile/></Link> : <button className={styles.login} onClick={()=>{loginWithRedirect()}}>Login</button>}
    </div>
    </div>
    <hr style={{backgroundColor:"red",height:"2px"}}/>
    </>)
}

export default Header;