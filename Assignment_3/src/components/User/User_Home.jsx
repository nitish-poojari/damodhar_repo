import React from "react";
import { Link, useNavigate } from "react-router-dom";
function User_Home() {
  const navigate = useNavigate();
  const user_sign_out = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="container-fluid">
        {/* nav bar start */}
        <section>
          <header className="d-flex flex-wrap align-items-center justify-content-center bg-dark justify-content-md-between py-3 mb-4 border-bottom">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link
                  to="/Available_hotel"
                  className="nav-link btn btn-outline-success  text-light"
                  aria-current="page"
                >
                  Available Hotel
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/selected_hotel"
                  className="nav-link text-light btn btn-outline-success"
                >
                  Selected Hotel
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/user_bookings"
                  className="nav-link text-light btn btn-outline-success"
                >
                  Show Booking
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/canceled_bookings"
                  className="nav-link text-light btn btn-outline-success"
                >
                  Show Cancellation
                </Link>
              </li>
            </ul>

            <div className=" me-5 text-end">
              <button
                type="button"
                onClick={user_sign_out}
                className="text-light btn btn-outline-danger"
              >
                Sign-out
              </button>
            </div>
          </header>
        </section>
      </div>
    </div>
  );
}
export default User_Home;
