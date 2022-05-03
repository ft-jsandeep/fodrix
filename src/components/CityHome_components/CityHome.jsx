import React, { useState, useEffect } from "react";
import "./City_Home.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import CallbackPopup from "../../mainUtils/CallbackPopup";
import FeaturedPhotographer from "./FeaturedPhotographer";
export default function CityHome() {
  let apiKey = process.env.REACT_APP_CITY_HOME;
  const history = useHistory();
  console.log("we r in cityhome");
  const imageurl = apiKey + "/downloadbycity/";
  // console.log(imageurl);
  const city = localStorage.getItem("city");
  const [Citydetails, setCitydetails] = useState([]);
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  // console.log(Citydetails.id);
  // console.log(imageurl + Citydetails.id);
  const getCityname = async () => {
    // console.log("we are in getcity");
    // console.log(imageurl+Citydetails.id);
    try {
      const response = await fetch(apiKey + "getCityDetails/" + city);
      const cityData = await response.json();
      // console.log(cityData);
      if (cityData.status === true) {
        //  console.log(cityData.data.id);
        setCitydetails(cityData.data);
      } else {
        swal("please enter a valid city");
        history.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCityname();
  }, []);
  const dispatch = useDispatch();

  const Datetime = () => {
    localStorage.setItem("bookingdate", date);
    localStorage.setItem("bookingtime", time);
    dispatch({ type: "cityHome", city: city, date: date, time: time });
  };
  // console.log(JSON.parse(localStorage.getItem("city")));

  return (
    <>
      <div className="bordered">
        <div className="card_body">
          <h1> Welcome to {Citydetails.place} </h1>{" "}
          <div className="card-description"> {Citydetails.about} </div>{" "}
        </div>{" "}
        <div className="img_random">
          <div className="img_body">
            {" "}
            <img
              loading="lazy"
              className="image"
              src={imageurl + Citydetails.id}
              alt="not found"
            />{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="second_row">
        <div className="card touristSpots">
          <div className="body_touristSpots">
            <h1>
              {" "}
              {Citydetails.place}
              &nbsp;Tourist Spots
            </h1>{" "}
            <ul className="tourist_spots" id="tourist_spots_ul">
              <li id="tourist_spots_li"> {Citydetails.spot1} </li>{" "}
              <li id="tourist_spots_li"> {Citydetails.spot2} </li>{" "}
              <li id="tourist_spots_li"> {Citydetails.spot3} </li>{" "}
              <li id="tourist_spots_li"> {Citydetails.spot4} </li>{" "}
              <li id="tourist_spots_li"> {Citydetails.spot5} </li>{" "}
              <li id="tourist_spots_li"> {Citydetails.spot6} </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
        <div className="map">
          <iframe
            src={Citydetails.map_link}
            className="map_frame"
            title="map"
          ></iframe>{" "}
        </div>{" "}
      </div>{" "}
      {/* array of work images, profile image, name, address, description */}
      <div className="featuredPhotographer-cityHome__container">
        <FeaturedPhotographer />
      </div>
      <CallbackPopup popup={true} callBackForm={true} />
      {/* <div className="fourth-row">
        <h1>Featured Photographers</h1>
        <div className="fourth-container">

          {Photographer.map((data) => {
            return (
              <>
                <div className="city_cards">
                  <div className="background">
                    <Carousel>
                      {data.image.map((img) => {
                        return (
                          <>
                            <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src={img.src}
                                alt="First slide"
                              />
                            </Carousel.Item>
                          </>
                        );
                      })}
                    </Carousel>

                    {data.image.map((img) => {
                      return (
                        <>
                          <div>
                            <img alt="img" src={img.src} />
                          </div>
                        </>
                      );
                    })}
                  </div>
                  <div className="profileimage">
                    <img alt="profile-image" src={data.phimage} />
                  </div>
                  <div className="nameph">
                    <h4>{data.name} </h4>
                  </div>
                  <div className="description_ph">
                    <p>{data.desc} </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div> */}
      <div className="third-row">
        <h1 className="heading-thirdCity"> Request your photographer </h1>{" "}
        <h3 className="subheading-third">
          What time of the day would you like ?
        </h3>{" "}
        <p className="p-third">
          Once you submit a request, our team will respond to confirm the
          availability of photographer for your date and time slot.{" "}
        </p>{" "}
      </div>
      <div className="DateTime">
        <div className="datediv">
          <label for="date"> Date : </label>{" "}
          <input
            type="date"
            className="input_date"
            id="bookingdate"
            onClick={() => {
              var dtTod = new Date();

              var month = dtTod.getMonth() + 1;
              var day = dtTod.getDate() + 2;
              var year = dtTod.getFullYear();

              if (month < 10) {
                month = "0" + month.toString();
              }
              if (day < 10) {
                day = "0" + day.toString();
              }

              var maxDate = year + "-" + month + "-" + day;

              document
                .getElementById("bookingdate")
                .setAttribute("min", maxDate);
            }}
            onChange={(val) => {
              setDate(val.target.value);
            }}
            required
          />{" "}
        </div>{" "}
        <div className="timediv">
          <label for="eventTime"> Time: </label>{" "}
          {/* <input
            type="time"
            // list="timelist"
            className="input_time"
            id="bookingtime"
            // placeholder="Select your time slot"
            onChange={(val) => {
              setTime(val.target.value);
            }}
            required={true}
          />{" "} */}
          <select
            id="eventTime"
            onChange={(val) => {
              setTime(val.target.value);
            }}
            className="input_time"
            required
          >
            <option value="0">Select your time slot</option>
            <option value="6">06:00am</option>
            <option value="7">07:00am</option>
            <option value="8">08:00am</option>
            <option value="9">09:00am</option>
            <option value="10">10:00am</option>
            <option value="11">11:00am</option>
            <option value="12">12:00pm</option>
            <option value="13">1:00pm</option>
            <option value="14">2:00pm</option>
            <option value="15">3:00pm</option>
            <option value="16">4:00pm</option>
            <option value="17">5:00pm</option>
            <option value="18">6:00pm</option>
            <option value="19">7:00pm</option>
            <option value="20">8:00pm</option>
          </select>
        </div>{" "}
      </div>{" "}
      <Link to="/userdashboard">
        {" "}
        <button type="submit" id="request_booking_btn" onClick={Datetime}>
          Request Booking
        </button>{" "}
      </Link>
    </>
  );
}
