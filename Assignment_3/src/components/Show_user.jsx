import React from "react";
import Admin_home from "./Admin_home";
function Show_user() {
  let show_user_data = [
    {
      Name: "Damodhar",
      contact: 9923064941,
      Email: "damodhar@gmail.com",
      city: "Aurangabad",
    },
    {
      Name: "Sahil",
      contact: 9168329427,
      Email: "sahil@gmail.com",
      city: "pune",
    },
    {
      Name: "Abhishek",
      contact: 1234567890,
      Email: "abhi@gmail.com",
      city: "jalna",
    },
  ];
  return (
    <>
      <Admin_home></Admin_home>
      <div>
        <h3 className="text-center m-3"> Users Details</h3>
        <hr />
      </div>
      <div className="container m-5">
        <div className="table">
          <table class="table  table-hover">
            <thead className="table-dark">
              <tr>
                <td>Sr.No</td>
                <td>Name</td>
                <td>Contact</td>
                <td>Email</td>
                <td>City</td>
              </tr>
            </thead>
            <tbody>
              {show_user_data.map((val, index) => {
                return (
                  <tr key={index} class="table-active">
                    <td>{index + 1}</td>
                    <td>{val.Name}</td>
                    <td>{val.contact}</td>
                    <td>{val.Email}</td>
                    <td>{val.city}</td>
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
export default Show_user;
