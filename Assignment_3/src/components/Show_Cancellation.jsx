import React from "react";
import Admin_home from "./Admin_home";
function Show_Cancellation() {
  let Show_Cancelled_data = [
    {
      userName: "Damodhar jadhao",
      contact: 9923064941,
      email: "damu@gmail.com",
      hotelName: "Great Punjab",
      city: "Pune",
      Reasons: "not available",
    },
    {
      userName: "Ram Patil",
      contact: 1234567890,
      email: "ram@gmail.com",
      hotelName: "Abhishek Veg",
      city: "Aurangabad",
      Reasons: "Something",
    },
  ];
  return (
    <>
      <Admin_home></Admin_home>
      <div className="container">
        <h3 className="text-center m-4">Cancelled booking</h3>
        <hr></hr>
        <div className="container m-3">
          <div className="table">
            <table class="table  table-hover">
              <thead className="bg-danger text-light">
                <tr>
                  <td>Sr.no</td>
                  <td>user Name</td>
                  <td>Contact</td>
                  <td>Email</td>
                  <td>Hotel Name</td>
                  <td>City</td>
                  <td>Reasons</td>
                </tr>
              </thead>
              <tbody>
                {Show_Cancelled_data.map((val, index) => {
                  return (
                    <tr kay={index} class="table-active">
                      <td>{index + 1}</td>
                      <td>{val.userName}</td>
                      <td>{val.contact}</td>
                      <td>{val.email}</td>
                      <td>{val.hotelName}</td>
                      <td>{val.city}</td>
                      <td>{val.Reasons}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default Show_Cancellation;
