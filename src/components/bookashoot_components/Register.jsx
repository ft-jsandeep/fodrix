import React, { useState } from "react";
import Images from "../../All_Images/Images";
import "./Register.css";
import Bookingclient from "./Bookingclient";

const RegisterPage = () => {
  return (
    <>
      <div className="register-photo">
        <div className="form-container">
          <div className="image-holder">
            <img
              loading="lazy"
              alt="img"
              className="img-fluid col-lg-6 col-md-6 d-none d-md-block"
              src={Images.Register}
            />
          </div>

          <h2 className="text-center">
            <strong></strong>
          </h2>

          <div className="form-group text-center">
            <input
              className="form-control register_main "
              type="text"
              name="name"
              placeholder="Name"
              id="name_register"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control register_main"
              type="email"
              name="email"
              placeholder="Email"
              id="email_register"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control register_main"
              type="mobile"
              name="mobile"
              placeholder="Phone Number"
              id="phonenumber_register"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control register_main"
              type="password"
              name="password"
              placeholder="Password"
              id="password_register"
            />
          </div>
          <div className="form-group">
            <a href="/OTP">
              <button
                onClick={Bookingclient}
                className="btn btn-success btn-block"
                id="btnbookregister"
              >
                Next
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
