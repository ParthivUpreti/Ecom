import { useState } from "react";
function useCounter(initialvalue){
    let [arr,setarr]=useState(initialvalue);
    function increment(){
        setarr(arr+1);
    }
    function decrement(){
        setarr(arr-1);
    }
    return ([increment,decrement]);
}
export default useCounter;