import React from "react";
import Admin_home from "./Admin_home";
function Show_booking() {
  let Show_booking_data = [
    {
      userName: "Damodhar jadhao",
      contact: 9923064941,
      email: "damu@gmail.com",
      hotelName: "Great Punjab",
      city: "Pune",
      persons: 5,
    },
    {
      userName: "Ram Patil",
      contact: 1234567890,
      email: "ram@gmail.com",
      hotelName: "Abhishek Veg",
      city: "Aurangabad",
      persons: 3,
    },
    {
      userName: "Abc",
      contact: 1234567890,
      email: "abc@gmail.com",
      hotelName: "KBC Veg",
      city: "Mumbai",
      persons: 4,
    },
  ];
  return (
    <>
      <Admin_home></Admin_home>
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
              </tr>
            </thead>
            <tbody>
              {Show_booking_data.map((val, index) => {
                return (
                  <tr key={index} class="table-active">
                    <td>{index + 1}</td>
                    <td>{val.userName}</td>
                    <td>{val.contact}</td>
                    <td>{val.email}</td>
                    <td>{val.hotelName}</td>
                    <td>{val.city}</td>
                    <td>{val.persons}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default Show_booking;
