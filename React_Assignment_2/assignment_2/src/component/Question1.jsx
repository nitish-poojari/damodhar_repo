import React from 'react'
import { useState } from 'react'

const Question1 = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const readEmail=(e)=>{
        setEmail(e.target.value)
    }

    const readPassword=(e)=>{
        setPassword(e.target.value)
    }

   function Update_data(){
    console.log(`Email : ${email}`)
    console.log(`Password : ${password}`)
   } 
      
    return (
        <div className='container'>
            <h3 className='text-center m-3'>Assignment 2</h3>
            <div className='m-2'>
                <h6>1)Create a login component to get email address and password from user. The component should contain a login button. The login button should print the user credentials on console.</h6>
                <div className='row d-flex'>
                    <div className='col-md-3'></div>
                    <div className='row col-md-6 border mt-5'>
                        <div className="m-2">
                            <label className="form-label">Email address</label>
                            <input onChange={readEmail} type="email" className="form-control" />
                        </div>
                        <div className="m-2">
                            <label className="form-label">Password</label>
                            <input onChange={readPassword} type="password" className="form-control" />
                        </div>
                        <div className="m-2 p-2">
                            <button onClick={Update_data}  type="submit" className="btn btn-success ">Login</button>
                        </div>
                    </div>
                    <div className='col-md-3'></div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Question1