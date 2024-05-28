import { Outlet } from "react-router-dom";
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { data } from "./store/Contextapi.jsx";
import { useRef, useState } from "react";
import Cartbuilder from "./Cartbuilder.jsx";
import Cart from "./Cart.jsx";
const App=()=>{
  let [arr,setarr]=useState([]);
  let totalitem=useRef(1);
  return(<>
    <data.Provider value={[arr,setarr,totalitem]}>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </data.Provider>
  </>)
}

export default App;