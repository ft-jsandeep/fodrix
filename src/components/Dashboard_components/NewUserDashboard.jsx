import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import paymentStart from "../bookashoot_components/payment";
import Dashboardimageload from "./Dashboardimageload";
import styles from "./NewUserDashboard.module.css";

const NewUserDashboard = () => {
  const history = useHistory();

  const logoutButtonHandler = () => {
    localStorage.clear();
    history.push("/login");
  };

  const NewUserDashboardHandler = (e) => {
    e.preventDefault();
    paymentStart();
  };

  return (
    <div className={styles["newUserDashboard__container"]}>
      <div className={styles["newUserDashboard-menu__container"]}>
        <div className={styles["newUserDashboard-menuContainer__inner"]}>
          <Dashboardimageload />
        </div>
        <div className={styles["newUserDashboard-menuContainer__inner"]}>
          <div className={styles["newUserDashboard-button__container"]}>
            <button
              onClick={logoutButtonHandler}
              className={styles["NewUserDashboard-button"]}
            >
              Logout
            </button>
            <Link to="/">
              <button className={styles["NewUserDashboard-button"]}>
                Home
              </button>
            </Link>
          </div>
        </div>
      </div>
      <form
        className={styles["newUserDashboard-form__container"]}
        onSubmit={NewUserDashboardHandler}
      >
        <div className={styles["NewUserDashboard-container__inner"]}>
          <div className={styles["NewUserDashboard-childBlock"]}>
            <p>Name</p>
          </div>
          <div>
            <p>{localStorage.getItem("userFirstName")}</p>
          </div>
        </div>
        <div className={styles["NewUserDashboard-container__inner"]}>
          <div className={styles["NewUserDashboard-childBlock"]}>
            <p htmlFor="">Email Id</p>
          </div>
          <div className={styles["NewUserDashboard-childBlock"]}>
            <p>{localStorage.getItem("userEmail")}</p>
          </div>
        </div>
        <div className={styles["NewUserDashboard-container__inner"]}>
          <div className={styles["NewUserDashboard-childBlock"]}>
            <p htmlFor="">Mobile Number</p>
          </div>
          <div className={styles["NewUserDashboard-childBlock"]}>
            <p>{localStorage.getItem("userMobile")}</p>
          </div>
        </div>
        <div className={styles["NewUserDashboard-container__inner"]}>
          <div className={styles["NewUserDashboard-childBlock"]}>
            <p>Destination of shoot</p>
          </div>
          <div className={styles["NewUserDashboard-childBlock"]}>
            <select
              name="city"
              id="photoshoot-city"
              // defaultValue={Destination}
              required
            >
              <option value="">Choose City</option>
              <option value="Agartala"> Agartala </option>
              <option value="Agra"> Agra </option>
              <option value="Ahemadabad"> Ahemadabad </option>
              <option value="Aizawl"> Aizawl </option>
              <option value="Ajmer"> Ajmer </option>
              <option value="Almora"> Almora </option>
              <option value="Amaravati"> Amaravati </option>
              <option value="Ambala"> Ambala </option>
              <option value="Amritsar"> Amritsar </option>
              <option value="Aurangabad"> Aurangabad </option>
              <option value="Ayodhya"> Ayodhya </option>
              <option value="Badrinath"> Badrinath </option>
              <option value="Bangalore"> Bangalore </option>
              <option value="Bhopal"> Bhopal </option>
              <option value="Bhubaneshwar"> Bhubaneshwar </option>
              <option value="Bikaner"> Bikaner </option>
              <option value="Bilaspur"> Bilaspur </option>
              <option value="Bodhgaya"> Bodhgaya </option>
              <option value="Calangute, Goa"> Calangute, Goa </option>
              <option value="Canacona, Goa"> Canacona, Goa </option>
              <option value="Chandigarh"> Chandigarh </option>
              <option value="Chennai"> Chennai </option>
              <option value="Chittoor"> Chittoor </option>
              <option value="Coimbatore"> Coimbatore </option>
              <option value="Dalhousie"> Dalhousie </option>
              <option value="Daman"> Daman </option>
              <option value="Darjeeling"> Darjeeling </option>
              <option value="Dehradun"> Dehradun </option>
              <option value="Delhi"> Delhi </option>
              <option value="Dharamshala"> Dharamshala </option>
              <option value="Dwarka"> Dwarka </option>
              <option value="Fatehpur Sikri"> Fatehpur Sikri </option>
              <option value="Gandhinagar"> Gandhinagar </option>
              <option value="Gangtok, Sikkim"> Gangtok, Sikkim </option>
              <option value="Gurgaon"> Gurgaon </option>
              <option value="Guwahati"> Guwahati </option>
              <option value="Gwalior"> Gwalior </option>
              <option value="Hampi"> Hampi </option>
              <option value="Haridwar"> Haridwar </option>
              <option value="Hyderabad"> Hyderabad </option>
              <option value="Imphal"> Imphal </option>
              <option value="Indore"> Indore </option>
              <option value="Itanagar"> Itanagar </option>
              <option value="Jabalpur"> Jabalpur </option>
              <option value="Jaipur"> Jaipur </option>
              <option value="Jaisalmer"> Jaisalmer </option>
              <option value="Jammu"> Jammu </option>
              <option value="Jhansi"> Jhansi </option>
              <option value="Jodhpur"> Jodhpur </option>
              <option value="Junagadh"> Junagadh </option>
              <option value="Kanpur"> Kanpur </option>
              <option value="Kasauli"> Kasauli </option>
              <option value="Kavaratti"> Kavaratti </option>
              <option value="Kedarnath"> Kedarnath </option>
              <option value="Kohima"> Kohima </option>
              <option value="Kolkata"> Kolkata </option>
              <option value="Kufri"> Kufri </option>
              <option value="Kullu"> Kullu </option>
              <option value="Leh"> Leh </option>
              <option value="Lucknow"> Lucknow </option>
              <option value="Madurai"> Madurai </option>
              <option value="Manali"> Manali </option>
              <option value="Mangalore"> Mangalore </option>
              <option value="Mathura"> Mathura </option>
              <option value="Mumbai"> Mumbai </option>
              <option value="Mussorie"> Mussorie </option>
              <option value="Mysore"> Mysore </option>
              <option value="Nagpur"> Nagpur </option>
              <option value="Nainital"> Nainital </option>
              <option value="Nashik"> Nashik </option>
              <option value="Ooty"> Ooty </option>
              <option value="Panaji, Goa"> Panaji, Goa </option>
              <option value="Patna, Bihar"> Patna, Bihar </option>
              <option value="Portblair"> Portblair </option>
              <option value="Prayagraj"> Prayagraj </option>
              <option value="Puducherry"> Puducherry </option>
              <option value="Pune"> Pune </option>
              <option value="Puri"> Puri </option>
              <option value="Raipur"> Raipur </option>
              <option value="Ranchi"> Ranchi </option>
              <option value="Raurkela"> Raurkela </option>
              <option value="Rishikesh"> Rishikesh </option>
              <option value="Rohtak"> Rohtak </option>
              <option value="Shillong"> Shillong </option>
              <option value="Shimla"> Shimla </option>
              <option value="Silchar"> Silchar </option>
              <option value="Silliguri"> Silliguri </option>
              <option value="Sonipat"> Sonipat </option>
              <option value="Surat"> Surat </option>
              <option value="Tawang"> Tawang </option>
              <option value="Thiruvananthpuram"> Thiruvananthpuram </option>
              <option value="Tirupati"> Tirupati </option>
              <option value="Udaipur"> Udaipur </option>
              <option value="Vadodara"> Vadodara </option>
              <option value="Varanasi"> Varanasi </option>
              <option value="Vijayawada"> Vijayawada </option>
              <option value="Visakhapatnam"> Visakhapatnam </option>
              <option value="Vrindavan"> Vrindavan </option>
              <option value="Warangal"> Warangal </option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div className={styles["NewUserDashboard-container__inner"]}>
          <div className={styles["NewUserDashboard-childBlock"]}>
            <p>Type of event</p>
          </div>
          <div className={styles["NewUserDashboard-childBlock"]}>
            <p>Travel</p>
          </div>
        </div>
        <div className={styles["NewUserDashboard-container__inner"]}>
          <div className={styles["NewUserDashboard-childBlock"]}>
            <p>Package</p>
          </div>
          <div className={styles["NewUserDashboard-childBlock"]}>
            <select
              name="package"
              // defaultValue={Package}
              required
            >
              <option value="">Select a package</option>
              <option value="3999">1 Hour 3999/-</option>
              <option value="5999">2 Hours 5999/-</option>
              <option value="7999">3 Hours 7999/-</option>
            </select>
          </div>
        </div>
        <div className={styles["NewUserDashboard-container__inner"]}>
          <div className={styles["NewUserDashboard-childBlock"]}>
            <p>Date</p>
          </div>
          <div className={styles["NewUserDashboard-childBlock"]}>
            <input
              id="photoshootDate"
              type="date"
              //   defaultValue={Date}
              // min={new Date().toISOString().split("T")[0]}
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
              required
            />
          </div>
        </div>
        <div className={styles["NewUserDashboard-container__inner"]}>
          <div className={styles["NewUserDashboard-childBlock"]}>
            <p>Time</p>
          </div>
          <div className={styles["NewUserDashboard-childBlock"]}>
            <select
              id="photoshootTime"
              //   defaultValue={Time}
              required
            >
              <option value="">Select your time slot</option>
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
          </div>
        </div>
        <div className={styles["NewUserDashboard-paymentButton__container"]}>
          <button className={styles["NewUserDashboard-button"]} type="submit">
            Proceed to Pay
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewUserDashboard;
