// import { useState } from "react";

// function Counter(){
//     const [value,setValue]=useState(2)
    
//         const handleAdd=()=>{
//             if(value>=0){
//             setValue(value+1);
//         }
//     }
 
//     const handleRemove=()=>{
//         if(value>0){
//             setValue(value-1)
//         }
//         ;
//     }
//     return (
//         <>
//        <h1>{value}</h1>
//        <button onClick={handleAdd}>Add</button>
//        <button onClick={handleRemove}>Remove</button>
//         </>
//     )
// }

// export default Counter;

import React,{useState} from 'react'
const Counter = () => {
    let [number,setNumber]=useState(0);
    function handleClick(e){
        // setTimeout(()=>{ setNumber(number=>number+1);},1500);
setNumber(number+1);
      
    }
  return (
    <>
    <h1>{number}</h1>
    <button onClick={handleClick}>Add</button>
    </>
  )
}

export default Counter