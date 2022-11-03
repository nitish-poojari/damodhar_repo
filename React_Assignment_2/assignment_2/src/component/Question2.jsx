import React, { useState } from 'react'

function Question2() {
    const[Name,setName]=useState("")
    const[Email,setEmail]=useState("")
    const[Mobile,setNumber]=useState("")
    
    const readName=(e)=>{
        setName(e.target.value)
    }

    const readEmail=(e)=>{
        setEmail(e.target.value)
    }

    const readNumber=(e)=>{
        setNumber(e.target.value)
    }

    function Update_data(){
        console.log(`Name : ${Name}`)
        console.log(`Email : ${Email}`)
        console.log(`Mobile-Number : ${Mobile}`)
    }
    return (
        <div className='container'>
            <div className='m-2'>  
            <h6>2) Create a registration component to get the user details. The component should contain a register button. The button should print the user credentials on console.</h6>             
                <div className='row d-flex'>
                    <div className='col-md-3'></div>
                    <div className='row col-md-6 border mt-5'>

                        <div className="m-2">
                            <label className="form-label">Name</label>
                            <input onChange={readName} type="text" className="form-control" />
                        </div>

                        <div className="m-2">
                            <label className="form-label">Email address</label>
                            <input onChange={readEmail} type="email" className="form-control" />
                        </div>

                        <div className="m-2">
                            <label className="form-label">Contact Number</label>
                            <input onChange={readNumber} type="password" className="form-control" />
                        </div>

                        <div className="m-2 p-2">
                            <button onClick={Update_data} type="submit" className="btn btn-success ">Login</button>
                        </div>
                    </div>
                    <div className='col-md-3'></div>
                </div>
            </div>
            <hr />
        </div>

    )
}
export default Question2