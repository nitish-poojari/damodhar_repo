import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Admin_home() {
  const navigate = useNavigate();
  let sign_out = () => {
    navigate("/");
  };
  return (
    <div className="container-fluid">
      {/* nav bar start */}
      <section>
        <header className="d-flex flex-wrap align-items-center justify-content-center bg-dark justify-content-md-between py-3 mb-4 border-bottom">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link
                to="/Add_hotel"
                className="nav-link btn btn-outline-success  text-light"
                aria-current="page"
              >
                Add Hotel
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/update_hotel"
                className="nav-link text-light btn btn-outline-success"
              >
                update Hotel
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/show_user"
                className="nav-link text-light btn btn-outline-success"
              >
                Show user
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/show_booking"
                className="nav-link text-light btn btn-outline-success"
              >
                Show Booking
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/cancelled_Booking"
                className="nav-link text-light btn btn-outline-success"
              >
                Show cancellation
              </Link>
            </li>
          </ul>
          <div className=" me-5 text-end">
            <button
              type="button"
              onClick={sign_out}
              className="text-light btn btn-outline-danger"
            >
              Sign-out
            </button>
          </div>
        </header>
      </section>
    </div>
  );
}

export default Admin_home;
