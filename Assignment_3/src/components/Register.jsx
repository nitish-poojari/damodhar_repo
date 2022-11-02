import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let register = () => {
    if (Name.length !== 0 && Email.length !== 0 && password.length !== 0) {
      navigate("/");
    } else {
      alert("Enter Details..");
    }
  };
  return (
    <div className="container d-flex justify-content-center m-5">
      <div className="col-md-4 m-5"></div>
      {/* form  start */}
      <div className="col-md-4 ">
        <form className="m-2 border p-4">
          <div className="register">
            <h5 className="text-center">Registration form</h5>
            <hr />
          </div>
          <div className="mb-3">
            <label htmlFor="name1" className="form-label">
              Name
            </label>
            <input
              value={Name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              id="name1"
              placeholder="Enter your Name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="abc@gmail.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your Password"
            />
          </div>
          <button onClick={register} className="btn btn-success mb-3">
            Submit
          </button>
          <p className="text-dark">
            <Link to="/">Login Now</Link>
          </p>
        </form>
      </div>
      <div className="col-md-4"></div>
    </div>
  );
}
export default Register;
