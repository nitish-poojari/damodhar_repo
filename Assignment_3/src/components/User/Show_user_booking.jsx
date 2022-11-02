import React from 'react'
import User_Home from './User_Home';
import {Link} from 'react-router-dom';
function Show_user_booking() {
    let user_booking_data=[
        {
        userName:'Damodhar jadhao',
        contact:9923064941,
        email:"damu@gmail.com",
        hotelName:"Great Punjab",
        city:"Pune",
        persons:5
      },
      {
        userName:'Damodhar jadhao',
        contact:9923064941,
        email:"damu@gmail.com",
        hotelName:"Lemon Tree",
        city:"Aurangabad",
        persons:2
      } ]

      return (
        <>
        <User_Home />
        <div>
          <h3 className="text-center m-3">All bookings</h3>
          <hr />
        </div>
        <div className="container m-5">
          <div className="table">
            <table class="table  table-hover">
              <thead className="table-dark">
                <tr>
                  <td>Sr.No</td>
                  <td>user Name</td>
                  <td>Contact</td>
                  <td>Email</td>
                  <td>Hotel Name</td>
                  <td>City</td>
                  <td>Persons</td>
                  <td>Cancel Booking</td>
                </tr>
              </thead>
              <tbody>
                {
                  user_booking_data.map((val,index)=>{
                    return (
                      <tr key={index} class="table-active">
                    <td>{index+1}</td>
                    <td>{val.userName}</td>
                    <td>{val.contact}</td>
                    <td>{val.email}</td>
                    <td>{val.hotelName}</td>
                    <td>{val.city}</td>
                    <td>{val.persons}</td>
                    <td><Link to="/canceled_bookings"><button className='btn btn-warning'>Cancel</button></Link></td>
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
export default Show_user_booking