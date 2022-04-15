import React, { useEffect, useState } from "react";

import { useHistory } from "react-router";
import swal from "sweetalert";
import "./login.css";
import Images from "../../All_Images/Images";
import loginjs from "./loginjs";
import { Helmet } from "react-helmet";

global.peruserEmail = "";
global.loggedIn = true;
global.userfirstname = "";
global.usermobileno = "";
export var logged = null;
let apiKey = process.env.REACT_APP_CITY_HOME;
// console.log(apiKey);

export default function Login(props) {
  const history = useHistory();
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [lemail, setLemail] = useState("");
  const [lpassword, setLpassword] = useState("");

  const RegisterClick = () => {
    localStorage.setItem("first_name", firstname);
    localStorage.setItem("last_name", lastname);
    localStorage.setItem("email", email);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("password", password);

    history.push("/OTP");
  };

  const LoginClick = async () => {
    // const firstname = localStorage.getItem("first_name");
    // const lemail = localStorage.getItem("email");
    // const mobile = localStorage.getItem("mobile");
    console.log("we are in login click");

    const loginData = {
      l_email: lemail,
      l_password: lpassword,
    };
    console.log("Our object is created");

    const verify_Login = await fetch(apiKey + "/login", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    // console.log(verify_Login);
    const loginResponse = await verify_Login.json();
    // swal("Login Details" + loginResponse.status + loginResponse.message);
    if (loginResponse.status === true) {
      localStorage.setItem("userFirstName", loginResponse.data.b_firstname);
      localStorage.setItem("userMobile", loginResponse.data.b_mobile);
      localStorage.setItem("userEmail", loginResponse.data.b_email);

      global.loggeduserlogged = true;

      localStorage.setItem("auth", true);
      // localStorage.setItem("isuserloged", true);
      // window.localStorage.setItem("isAuth", "true");
      // console.log(window.localStorage.getItem("isAuth"));
      history.push("/dashboard");
      document.location.reload();
      // console.log("WE are in if dashboard");
    } else {
      swal("User not found");
      // localStorage.setItem("auth", false);
      console.log(localStorage.getItem("auth"));
      // global.loggeduserlogged = false;
      // global.loggedIn = false;
      //invalid id or password
    }
  };

  useEffect(() => {
    loginjs();

    const title = document.querySelector("title");
    title.innerText = `Login | Fodrix`;

    const desc = document.querySelector("meta[name='description']");
    desc.setAttribute("content", "Login into your Fodrix Account - Fodrix");

    const canonical = document.querySelector("link[rel='canonical']");
    canonical.setAttribute("href", "https://www.fodrix.com/login");
  }, []);
  // verify btn redirect to login
  return (
    <>
      {/* <Helmet>
        <title>Login | Fodrix</title>
        <meta
          name="description"
          content="Login into your Fodrix Account - Fodrix"
        />
      </Helmet> */}
      <div class="login-box">
        <img
          src={Images.fodrixiconnew}
          className="image_login"
          alt="Fodrix Logo"
          width="50px"
          height="137px"
          style={{ "padding-bottom": "13px" }}
        />
        <div class="btn-group">
          <button
            type="button"
            className="btn btn--preferred active"
            id="signup-box-link"
            onClick={loginjs}
            style={{ backgroundColor: "#007bff", color: "white" }}
          >
            Register
          </button>

          <button
            type="button"
            className="btn btn--preferred"
            id="login-box-link"
            style={{ "border-left": "1px solid #ddd" }}
            onClick={loginjs}
          >
            Log in
          </button>
        </div>

        <div class="email-login">
          <label for="u-form" className="label_login">
            Email
          </label>
          <div class="u-form-group">
            <input
              type="email"
              placeholder="Email"
              id="l_email"
              onChange={(val) => {
                setLemail(val.target.value);
              }}
              required
            />
          </div>
          <label for="u-form" className="label_login">
            Password
          </label>
          <div class="u-form-group">
            <input
              type="password"
              placeholder="Password"
              id="l_password"
              onChange={(val) => {
                setLpassword(val.target.value);
              }}
              required
            />
          </div>

          <div class="u-form-group">
            <button onClick={LoginClick}>Log in</button>
          </div>

          <div class="foot-lnk">
            <a href="#forgot" style={{ color: "#007bff" }}>
              Forgot Password?
            </a>
          </div>
          <div class="foot-lnk">
            <label for="pass">
              Don't Have an account?
              <a href="#" class="active" id="login-box-link" onClick={loginjs}>
                Register
              </a>
            </label>
          </div>
        </div>
        <form class="email-signup">
          <label for="u-form" className="label_login">
            First Name
          </label>
          <div class="u-form-group">
            <input
              type="text"
              placeholder="First Name"
              id="first_name"
              onChange={(val) => {
                setFirstname(val.target.value);
              }}
              required
            />
          </div>
          <label for="u-form" className="label_login">
            Last Name
          </label>
          <div class="u-form-group">
            <input
              type="text"
              placeholder="Last Name"
              id="last_name"
              onChange={(val) => {
                setLastname(val.target.value);
              }}
              required
            />
          </div>
          <label for="u-form" className="label_login">
            Email
          </label>
          <div class="u-form-group">
            <input
              type="email"
              placeholder="Email"
              id="email_register"
              onChange={(val) => {
                setEmail(val.target.value);
              }}
              required
            />
          </div>
          <label for="u-form" className="label_login">
            Mobile Number
          </label>
          <div class="u-form-group">
            <input
              type="text"
              placeholder="Mobile Number"
              id="mobile_register"
              onChange={(val) => {
                setMobile(val.target.value);
              }}
              required
            />
          </div>
          <label for="u-form" className="label_login">
            Password
          </label>
          <div class="u-form-group">
            <input
              type="password"
              placeholder="Password"
              id="password_register"
              onChange={(val) => {
                setPassword(val.target.value);
              }}
              required
            />
          </div>
          <div className="text-center privacy_text">
            By clicking on Create Account. I agree to Fodrix’s&nbsp;
            <a href="/privacyPolicy">Privacy Policy </a>and
            <a href="/termsAndConditions"> Terms and Conditions</a>.
          </div>
          <div class="u-form-group">
            <button onClick={RegisterClick}>Register</button>
          </div>
          <div class="foot-lnk_r">
            <label for="pass">
              Already Have an account?
              <a href="#" id="signup-box-link" onClick={loginjs}>
                Log in
              </a>
            </label>
          </div>
        </form>
      </div>
    </>
  );
}
