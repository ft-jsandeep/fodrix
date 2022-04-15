import React from "react";
import "./p-login.css";
import Images from "../../All_Images/Images";

import Footer from "../footer_components/Footer";
export default function Plogin() {
  return (
    <>
      <div className="img-fluid background_login">
        <div class="form_plogin">
          <div class="image-section_plogin">
            <img src={Images.fodrixLogo} />
          </div>
          <p class="p1_plogin">Photographer Login</p>

          <p class="p2_plogin">
            Welcome back, sign in to access jobs and other features
          </p>
          <form>
            <br />
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
            ></input>
            <a href="/dashboard">
              <button>Send OTP</button>
            </a>
            <br />
            <pre />
            <input type="number " name="OTP" placeholder="OTP" />
            <a href="/dashboard">
              <button>Verify</button>
            </a>
            <pre />
            <a href="#" className="ResendSubmit">
              Resend OTP
            </a>
            <pre />
            {/* <a href="#" class="btn_plogin">
              Not a pro yet? Sign up{" "}
            </a> */}
            <pre />
          </form>
        </div>
      </div>
    </>
  );
}
