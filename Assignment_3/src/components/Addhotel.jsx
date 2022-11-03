import React from "react";
import { useState } from "react";
import Admin_home from "./Admin_home";
function Addhotel() {
  let Hotels = [
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
  let [hotelState, setHotelState] = useState([...Hotels]);
  let [deletedState, setDeletedState] = useState([...hotelState]);
  let [hotelObj, setHotelObj] = useState({});

  let handleChange = (e) => {
    setHotelObj({ ...hotelObj, [e.target.id]: e.target.value });
  };

  let add = () => {
    if (Object.keys(hotelObj).length !== 0) {
      setHotelState([...hotelState, hotelObj]);
    } else {
      alert("Enter Some Data.");
    }
  };
  let deleteData = (e) => {
    hotelState[e.target.name].status = 0;
    setDeletedState([...hotelState]);
    console.log("deleted");
  };
  return (
    <>
      <Admin_home></Admin_home>
      <div className="container-fluid d-flex justify-content-around m-3">
        <div className="col-md-4 ">
          <form className="m-1 border p-4">
            <div className="register">
              <h5 className="text-center">Add New Hotel</h5>
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
                placeholder="Enter hotel name"
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
                placeholder="91+"
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
                placeholder="Enter Address"
                onChange={handleChange}
              />
            </div>
            <button
              type="button"
              onClick={add}
              className="btn btn-success mb-3"
            >
              Add
            </button>
          </form>
        </div>
        <div className="col-md-6 m-2">
          {/* Available Hotels */}
          <section>
            <h3 className="text-center">Available hotels</h3>
            <hr />
            {/* table */}
            <div className="table">
              <table className="table table-dark table-hover">
                <thead>
                  <tr>
                    <td>Sr.No</td>
                    <td>Hotel Name</td>
                    <td>Contact</td>
                    <td>Address</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                  {hotelState.map((val, index) => {
                    if (val.status !== 0) {
                      return (
                        <tr key={index} className="table-active">
                          <td>{index + 1}</td>
                          <td>{val.hotelName}</td>
                          <td>{val.contact}</td>
                          <td>{val.address}</td>
                          <td>
                            <button
                              onClick={deleteData}
                              name={index}
                              className="btn btn-danger"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    }
                  })}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
export default Addhotel;
