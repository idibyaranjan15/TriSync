import React,{useState} from 'react'
import  "./App.css"
const App = () => {


  const [counter,setCounter]=useState(1)
 
  const handleAdd=()=>{
    if(counter<20){
      setCounter((item)=>item+1)
      console.log(counter+1,"added")
    }

  }
  const handleRemove=()=>{
    if(counter>0){
      setCounter((item)=>item-1);
      console.log(counter+1,"removed")
    }


  }

  return (
    <>
    <h1>Learning React</h1>
    <h2>Counter Value : {counter}</h2>
    <button onClick={handleAdd}>Add</button>
    <button onClick={handleRemove}>Remove</button>
    </>
  )
}

export default App