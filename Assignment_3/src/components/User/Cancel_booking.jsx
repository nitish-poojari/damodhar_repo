import React from 'react'
import User_Home from './User_Home';

function Cancel_booking() {
  
    let user_cancel_data=[
        {
        userName:'Damodhar jadhao',
        contact:9923064941,
        email:"damu@gmail.com",
        hotelName:"Abhishek Veg",
        city:"Pune",
        persons:5
      },
      {
        userName:'Damodhar jadhao',
        contact:9923064941,
        email:"damu@gmail.com",
        hotelName:"AmarPreet",
        city:"Aurangabad",
        persons:2
      } ]
      return (
        <>
            <User_Home />
        <div>
          <h3 className="text-center m-3">Cancelled booking</h3>
          <hr />
        </div>
        <div className="container m-5">
          <div className="table">
            <table class="table  table-hover">
              <thead className="bg-danger">
                <tr>
                  <td>Sr.No</td>
                  <td>user Name</td>
                  <td>Contact</td>
                  <td>Email</td>
                  <td>Hotel Name</td>
                  <td>City</td>
                  <td>Persons</td>
                </tr>
              </thead>
              <tbody>
                {
                  user_cancel_data.map((val,index)=>{
                    return (
                      <tr key={index} class="table-active">
                    <td>{index+1}</td>
                    <td>{val.userName}</td>
                    <td>{val.contact}</td>
                    <td>{val.email}</td>
                    <td>{val.hotelName}</td>
                    <td>{val.city}</td>
                    <td>{val.persons}</td>
                  </tr>
                    )
                    
                  })
                }
    
              </tbody>
            </table>
          </div>
        </div>
      </>
      )
}

export default Cancel_booking