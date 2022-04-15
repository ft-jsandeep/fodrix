import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Searchbox from "../Searchbox_component/Searchbox";
// import Faq from "../faqs_components/Faq";
import "../HowItWorks_components/how.css";
import "./packages.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
export default function CardsPackage() {
  const dispatch = useDispatch();
  const package1Handler = () => {
    dispatch({ type: "packages", price: "3999" });
  };
  const package2Handler = () => {
    dispatch({ type: "packages", price: "5999" });
  };
  const package3Handler = () => {
    dispatch({ type: "packages", price: "7999" });
  };
  return (
    <>
      <h1 className="h1 text-center p-2">Travel Packages</h1>
      <div class="packages_code">
        <div class="wrapper">
          <div class="table basic">
            <div class="package-name"></div>
            <ul class="features">
              <li>
                <div class=" heading">1 Hour</div>
              </li>
              <li>
                <div class="list-name">Unlimited Photos</div>
                <hr className="line"></hr>
              </li>
              <li>
                <div class="list-name">High Resolution 15 edited photos</div>
                <hr className="line"></hr>
              </li>

              <li>
                <div class="list-name">
                  1-2 Location<div>(2 Km in range)</div>
                </div>
                <hr className="line"></hr>
              </li>
              <li>
                <div class="list-name">Valid upto 3 People</div>
                <hr className="line"></hr>
              </li>
              <li>
                <div class="list-name">Rs. 3,999/-</div>
                <hr className="line"></hr>
              </li>
            </ul>
            <div class="btn">
              <Link to="/userdashboard">
                <button onClick={package1Handler}>Request Booking</button>
              </Link>
            </div>
          </div>

          <div class="table premium">
            <ul class="features">
              <li>
                <div class="heading premiumheading"> 2 Hours</div>
              </li>
              <li>
                <div class="list-name_two">Unlimited Photos</div>
                <hr className="hr_two"></hr>
              </li>
              <li>
                <div class="list-name_two">
                  High Resolution 25 edited photos
                </div>
                <hr className="hr_two"></hr>
              </li>

              <li>
                <div class="list-name_two">
                  1-2 Locations
                  <div>(2 Km in range)</div>
                </div>
                <hr className="hr_two"></hr>
              </li>

              <li>
                <div class="list-name_two">Valid upto 5 people</div>
                <hr className="hr_two"></hr>
              </li>
              <li>
                <div class="list-name_two">Rs. 5,999/-</div>
                <hr className="hr_two"></hr>
              </li>
            </ul>

            <div class="btn">
              <Link to="/userdashboard">
                <button onClick={package2Handler}>Request Booking</button>
              </Link>
            </div>
          </div>
          <div class="table ultimate">
            <ul class="features">
              <li>
                <div class="heading">3 Hours</div>
              </li>
              <li>
                <div class="list-name">Unlimited Photos</div>
                <hr className="line"></hr>
              </li>
              <li>
                <div class="list-name">High Resolution 40 edited photos</div>
                <hr className="line"></hr>
              </li>

              <li>
                <div class="list-name">
                  Multiple Location<div>(5 Km in range)</div>
                </div>
                <hr className="line"></hr>
              </li>
              <li>
                <div class="list-name">Valid upto 7 people</div>
                <hr className="line"></hr>
              </li>
              <li>
                <div class="list-name">Rs. 7,999/-</div>
                <hr className="line"></hr>
              </li>
            </ul>
            <div class="btn">
              <Link to="/userdashboard">
                <button onClick={package3Handler}>Request booking</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="faq">
        <Faq />
      </div> */}

      {/* <div className="searchdes"> */}
      {/* <Searchbox /> */}
      <div className="search_heading">
        <h3>Get an awesome photoshoot experience!</h3>
      </div>
      <div className="search_how">
        <Searchbox />
      </div>
      {/* </div> */}
    </>
  );
}
