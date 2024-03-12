import React,{useState} from 'react'

const Counter = () => {
    const[counter,setCounter]=useState(0)
    function handleAdd(){
        setCounter(prevCounter=>prevCounter+1);
        setCounter(prevCounter=>prevCounter+1);
        setCounter(prevCounter=>prevCounter+1);
        setCounter(prevCounter=>prevCounter+1);
      
    }
    function handleRemove(){
        setCounter(counter-1);
    }
  return (
    <div>
<div className='text-white'>{counter}</div>
<button className='bg-green-400' onClick={handleAdd}>ADD</button>
<button className='bg-orange-400' onClick={handleRemove}>Remove</button>
    </div>
    

  )
}

export default Counter