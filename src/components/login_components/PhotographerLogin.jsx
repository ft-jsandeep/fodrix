import React from "react";
import "./p-login.css";
import Images from "../../All_Images/Images";

export default function PhotograherLogin() {
  return (
    <>
      <div className="img-fluid background_login">
        <div class="form_plogin">
          <div class="image-section_plogin">
            <img src={Images.fodrixLogo} alt=" not Found" />
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

            <pre />
          </form>
        </div>
      </div>
    </>
  );
}
