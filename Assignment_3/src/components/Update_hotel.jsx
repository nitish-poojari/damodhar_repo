import React from "react";
import { useState } from "react";
import Admin_home from "./Admin_home";
function Update_hotel() {
  let update_Hotels = [
    {
      hotelName: "Great punjab",
      contact: 9876543210,
      address: "Pune",
      status: 1,
    },
    {
      hotelName: "Abhishek VEG",
      contact: 9878877210,
      address: "Pune",
      status: 1,
    },
    {
      hotelName: "Lemon tree",
      contact: 9878877645,
      address: "Aurangabad",
      status: 1,
    },
    {
      hotelName: "Grand Perl",
      contact: 9578877210,
      address: "Pune",
      status: 1,
    },
  ];
  let [updateState, setUpdateState] = useState([...update_Hotels]);
  let [array, steArray] = useState([...updateState]);
  let [updateObj, setUpdateObj] = useState({});
  let [indexOf, setIndexOf] = useState(0);

  let handleChange = (e) => {
    setUpdateObj({ ...updateObj, [e.target.id]: e.target.value });
  };

  let updateHotel = (e) => {
    updateState.splice([indexOf], 1, updateObj);
    steArray([...updateState]);
  };

  let setData = (e) => {
    setIndexOf(Number(e.target.name));
  };

  return (
    <>
      <Admin_home></Admin_home>
      <div className="row  m-5">
        <div className=" col-4 ">
          <form className="m-1 border p-4">
            <div className="register">
              <h5 className="text-center">Update Hotel</h5>
              <hr />
            </div>
            <div className="mb-3">
              <label htmlFor="name1" className="form-label">
                Hotel Name
              </label>
              <input
                type="text"
                className="form-control"
                id="hotelName"
                placeholder={update_Hotels[indexOf].hotelName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Contact
              </label>
              <input
                type="number"
                className="form-control"
                id="contact"
                aria-describedby="emailHelp"
                placeholder={update_Hotels[indexOf].contact}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder={update_Hotels[indexOf].address}
                onChange={handleChange}
              />
            </div>
            <button
              onClick={updateHotel}
              type="button"
              className="btn btn-danger mb-3"
            >
              Update
            </button>
          </form>
        </div>

        {/* table start here */}
        <div className="table col  m-2">
          <h3 className="text-center">Hotel List</h3>
          <hr></hr>
          <table className="table  table-hover">
            <thead className="bg-success">
              <tr>
                <td>Sr.No</td>
                <td>Hotel Name</td>
                <td>Contact</td>
                <td>Address</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {array.map((val, index) => {
                return (
                  <tr className="table-active">
                    <td>{index + 1}</td>
                    <td>{val.hotelName}</td>
                    <td>{val.contact}</td>
                    <td>{val.address}</td>
                    <td>
                      <button
                        onClick={setData}
                        name={index}
                        className="btn btn-warning"
                      >
                        Update
                      </button>
                      &nbsp;
                    </td>
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
export default Update_hotel;
