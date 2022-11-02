import React from 'react'
import {Link } from 'react-router-dom'
import User_Home from './User_Home';

function Select_hotel() {
    let selected_data=[
        {
          src :"https://m.economictimes.com/thumb/msid-90724647,width-1254,height-836,resizemode-4,imgsize-28786/indian-hotels.jpg",
          title:'Abhishek veg',
          address:"Pune Maharashtra"  
        },
        {
          src :"https://r1imghtlak.mmtcdn.com/7e11fdf2b43a11e987d20a4cef95d023.jpg?&output-quality=75&downsize=910:612&crop=910:612;0,35&output-format=jpg",
          title:'Rama International',
          address:"Aurangabad Maharashtra"  
        }
      ]  
  return (
    <>
    <User_Home />
    <h3 className="text-center m-4">Selected  Hotels</h3>
      <hr />
    <div className="d-flex justify-content-center row ">
      
      {/* card1 */}
      {selected_data.map((val,index)=>{
        return (
          
          <div className="card  m-4 " style={{ width: "18rem" , height:'430px' }}>
            <img
              style={{height:'200px', width:'284px'}}
              src={val.src}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-center">{val.title}</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <p>{val.address}</p>
              <Link to="/user_bookings" className="btn btn-danger">
                Book
              </Link>
            </div>
          </div>          
        )
      })}
      {/* card1 end */}
    </div>
    </>
  )
}
export default Select_hotel