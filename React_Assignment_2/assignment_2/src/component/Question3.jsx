import React, { useState } from 'react'

function Question3() {
    const [counter,setValue]=useState(0)
    const Add=()=>{
        setValue(counter+1)
    }
    const del=()=>{
        setValue(counter-1)
    }
  return (
    <div className='container mt-2'>
        <h6>3) Create a counter component with two buttons and one label. One button will increment while another button will decrement the counter. The label should show the current value of counter.</h6>

        <div className='mt-5'>
            <button onClick={Add} className='btn btn-success m-3 p-2'>+</button>
            <label htmlFor="">{counter}</label>
            <button onClick={del} className='btn btn-success m-3 p=2'>-</button>
        </div>
        <hr />
    </div>
  )
}

export default Question3