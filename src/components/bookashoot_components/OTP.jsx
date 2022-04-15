import React, { useEffect } from "react";
import swal from "sweetalert";
import "./otp.css";
let apiKey = process.env.REACT_APP_CITY_HOME;
const OTP = () => {
  console.log("we r in OTP");
  const email = localStorage.getItem("email");
  const firstname = localStorage.getItem("first_name");
  const lastname = localStorage.getItem("last_name");
  const mobile = localStorage.getItem("mobile");
  const password = localStorage.getItem("password");

  const sendOtptomail = async () => {
    console.log("we are in sendOtptomail");
    const datareg = {
      to: email,
    };
    console.log("stringify results" + JSON.stringify(datareg));
    console.log("normaL results" + datareg);
    let otpreg = await fetch(apiKey + "/user/sendemailotp", {
      method: "POST",
      body: JSON.stringify(datareg),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    console.log("we are outside api executed successfully " + otpreg);
    const otpreg1 = await otpreg.json();
    if (otpreg1.status === true) {
      // swal("Email OTP sent " + " " + otpreg1.message);
      swal(`Email OTP sent ${otpreg1.message}`);
    } else {
      swal(otpreg1.message).then(function () {
        window.location = "/";
      });
    }
    // console.log("Email OTP sent " + otpreg1.status + otpreg1.message);
  };

  const verifyOtp = async () => {
    console.log("we are in verify mail");
    const otpvalue1 = document.getElementById("otp_value").value;
    console.log("otp value1" + otpvalue1);
    const otpreg = {
      otp: otpvalue1,
      email: email,
    };

    const otpverifyreg = await fetch(apiKey + "/verify_otp", {
      method: "POST",
      body: JSON.stringify(otpreg),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const otpreg2 = await otpverifyreg.json();
    console.log("otpregister 2" + otpreg2.message + otpreg2.status);
    if (otpreg2.status === true) {
      console.log("we are in if condition");
      const registerData = {
        // firstname1: firstname,
        // lastname1: lastname,
        // email1: email,
        // mobile1: mobile,
        // password1: password,

        b_firstname: firstname,
        b_lastname: lastname,
        b_email: email,
        b_mobile: mobile,
        b_password: password,
      };

      await fetch(apiKey + "/register_user", {
        method: "POST",
        body: JSON.stringify(registerData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      // const otpreg3 = await otpverifyreg1.json();
      swal("User register successfully").then(function () {
        window.location = "/login";
      });
    } else {
      alert("Incorrect OTP");
    }
  };

  useEffect(() => {
    sendOtptomail();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center otp_component">
        <div className="card py-5 px-3 card_otpcomponents">
          <span className="mobile-text text-center">
            Please enter the OTP sent on your email <strong>{email}</strong>
          </span>
          <div className="d-flex flex-row mt-5">
            <input
              type="text"
              className="form-control form_otpcomponent"
              id="otp_value"
              // onChange={(val) => {
              //   setOtpvalue(val.target.value);
              // }}
            />
            {/* <input type="text" className="form-control form_otpcomponent" />
            <input type="text" className="form-control form_otpcomponent" />
            <input type="text" className="form-control form_otpcomponent" />
            <input type="text" className="form-control form_otpcomponent" />
            <input type="text" className="form-control form_otpcomponent" /> */}
          </div>

          <span className="d-block not-receive_otpcomponents">Resend OTP</span>
          <div className="text-center mt-0">
            <button className="verify_otpcomponents" onClick={verifyOtp}>
              Verify
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default OTP;
