import React from "react";
import { Link } from "react-router-dom";
import User_Home from './User_Home';

function Available_hotel() {

    let Available_data=[
      {
        src :"https://m.economictimes.com/thumb/msid-90724647,width-1254,height-836,resizemode-4,imgsize-28786/indian-hotels.jpg",
        title:'Abhishek veg',
        address:"Pune Maharashtra"  
      },
      {
        src :"https://r1imghtlak.mmtcdn.com/7e11fdf2b43a11e987d20a4cef95d023.jpg?&output-quality=75&downsize=910:612&crop=910:612;0,35&output-format=jpg",
        title:'Rama International',
        address:"Aurangabad Maharashtra"  
      },
      {
        src:'https://www.raffles.com/assets/0/72/76/103/1798/df97d417-b1b2-46af-9928-3ac639e98198.jpg',
        title:'Nandavan',
        address:'Jalna Maharashtra'
      },
      {
        src:'https://www.gannett-cdn.com/-mm-/f85d715f4ef18e245988237e803cdef2db1daf68/c=0-255-4256-2656/local/-/media/USATODAY/test/2013/10/25/1382729502000-160857233.jpg',
        title:'Grand perl',
        address:'Mumbai maharashtra'
      },
      {
        src:'https://www.tridenthotels.com/img/mobile-foo-banner/udaipur.png',
        title:'Lemon tree',
        address:'Banglore'
      }

    ]

  return (
    <>
    <User_Home />
    
    <h3 className="text-center m-4">Available Hotels</h3>
      <hr />
    <div className="d-flex justify-content-center row ">
      
      {/* card1 */}
      {Available_data.map((val,index)=>{
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
              <Link to="/selected_hotel" className="btn btn-danger">
                Select
              </Link>
            </div>
          </div>
          
        )
      })}

      {/* card1 end */}
    </div>
    </>
  );
}

export default Available_hotel;
