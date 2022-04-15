import React, { useState } from "react";
import styles from "./CallbackPopup.module.css";
import CloseIcon from "@material-ui/icons/Close";
import CallbackAlert from "./CallbackAlert";
import { useRef } from "react";

const CallbackPopup = (props) => {
  const form = useRef(null);
  const clearFirstNameValue = useRef();
  const clearLastNameValue = useRef();
  const clearEmailValue = useRef();
  const clearMobileValue = useRef();
  // const clearPhotoshootValue = useRef();
  const clearCityValue = useRef();
  const clearCommentsValue = useRef();
  let formContainer = styles.popupContainer;
  let formContainer__inner = styles["popupContainer__inner"];
  if (props.callBackForm) {
    formContainer = styles.popupCallbackContainer;
    formContainer__inner = styles["popupCallbackContainer__inner"];
  }

  // const dummyApiData = {
  //   firstName: "Shivam",
  //   lastName: "Rawat",
  //   email: "rajat045@gmail.com",
  //   mobile: "9988765674",
  //   typeOfPhotoshoot: "Travel",
  //   city: "Jaipur",
  //   comments: "",
  // };

  const url = "https://api.fodrix.com/addCallBack";
  // const [callbackData, setCallbackData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   mobile: "",
  //   typeOfPhotoshoot: "",
  //   city: "",
  //   comments: "",
  // });

  const [alertDisplay, setAlertDisplay] = useState(false);

  // const callbackInputHandler = (e) => {
  //   const newCallbackData = { ...callbackData };
  //   newCallbackData[e.target.id] = e.target.value;
  //   setCallbackData(newCallbackData);
  //   console.log(newCallbackData);

  //   ////////////////////////////////////////////////////

  //   name = e.target.name;
  //   value = e.target.value;

  //   setCallbackData((prevState) => {
  //     return { ...prevState, [name]: value };
  //   });
  //   console.log(callbackData);

  //   ///////////////////////////////////////////////////

  // };

  // const callbackSubmitHandler = async (e) => {
  //   e.preventDefault();
  //   const res = await fetch(url, {
  //     method: "POST",
  //     body: JSON.stringify(callbackData),
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   });
  //   const data = await res.json();
  //   console.log(data);
  //   setAlertDisplay(true);
  //   setTimeout(() => {
  //     setAlertDisplay(false);
  //   }, 6000);
  // };

  const callbackSubmitHandler = (e) => {
    e.preventDefault();
    try {
      const data = new FormData(form.current);
      const formApiData = {};
      console.log("We are line#76");
      // console.log(data.get(document.querySelector(".callbackFormHandle")));
      // console.log(...data);
      for (const [key, value] of data) {
        formApiData[`${key}`] = value;
        // console.log(key, value);
      }
      console.log(formApiData);
      fetch(url, {
        method: "POST",
        body: JSON.stringify(formApiData),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          // console.log("ack received");
          setAlertDisplay(true);
          clearFirstNameValue.current.value = "";
          clearLastNameValue.current.value = "";
          clearEmailValue.current.value = "";
          clearMobileValue.current.value = "";
          clearCityValue.current.value = "0";
          clearCommentsValue.current.value = "";

          console.log("log after clearing input fields...");
          setTimeout(() => {
            setAlertDisplay(false);
            // console.log("inside setimeout");
          }, 6000);
        })
        .catch((e) => {
          // throw new Error(e);
          console.log(e);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    props.popup && (
      <div id="OfferAlertScrollId">
        {alertDisplay && <CallbackAlert />}
        <form
          ref={form}
          action=""
          id={formContainer}
          className="callbackFormHandle"
          onSubmit={callbackSubmitHandler}
        >
          {props.callBackForm && (
            <iframe
              width="650"
              height="365"
              src="https://www.youtube.com/embed/00nao5ghhmg?autoplay=1&mute=1&playlist=00nao5ghhmg&loop=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          <div id={formContainer__inner}>
            <div id={styles.popupHeader}>
              <h1>Looking for Photographer?</h1>
              <CloseIcon
                onClick={() => {
                  props.closePopup(false);
                }}
                id={styles.closeIcon}
              />
            </div>
            <div id={styles["popupForm__inputContainer"]}>
              <div className={styles["popupForm__input"]}>
                <label htmlFor="">
                  First Name <sup>*</sup>
                </label>
                <input
                  className={styles["popup__TextField"]}
                  type="text"
                  required
                  name="firstName"
                  // value={callbackData.firstName}

                  ref={clearFirstNameValue}
                />
              </div>
              <div className={styles["popupForm__input"]}>
                <label htmlFor="">
                  Last Name <sup>*</sup>
                </label>
                <input
                  className={styles["popup__TextField"]}
                  type="text"
                  required
                  name="lastName"
                  // value={callbackData.lastName}

                  ref={clearLastNameValue}
                />
              </div>
              <div className={styles["popupForm__input"]}>
                <label htmlFor="">
                  Email <sup>*</sup>
                </label>
                <input
                  className={styles["popup__TextField"]}
                  type="text"
                  required
                  name="email"
                  // value={callbackData.email}

                  ref={clearEmailValue}
                />
              </div>
              <div className={styles["popupForm__input"]}>
                <label htmlFor="">
                  Mobile <sup>*</sup>
                </label>
                <input
                  className={styles["popup__TextField"]}
                  type="text"
                  required
                  name="mobile"
                  // value={callbackData.mobile}
                  ref={clearMobileValue}
                />
              </div>
            </div>
            <div id={styles["popup-photoshootDetails__container"]}>
              <div id={styles["popup-photoshootType__container"]}>
                <div id={styles["photoshootType__heading"]}>
                  <label>
                    Type of Photoshoot <sup>*</sup>
                  </label>
                </div>
                <div className={styles["popup-photoshootType"]}>
                  <div className={styles["popup-photoshootType__Section1"]}>
                    <div className={styles["popup-photoshootType__values"]}>
                      <input
                        type="radio"
                        id="Travel"
                        name="typeOfPhotoshoot"
                        value="Travel"
                      />
                      <label for="Travel">Travel</label>
                    </div>
                    <div className={styles["popup-photoshootType__values"]}>
                      <input
                        type="radio"
                        id="wedding"
                        name="typeOfPhotoshoot"
                        value="Wedding"
                      />
                      <label for="wedding">Wedding</label>
                    </div>
                    <div className={styles["popup-photoshootType__values"]}>
                      <input
                        type="radio"
                        id="business"
                        name="typeOfPhotoshoot"
                        value="Business"
                      />
                      <label for="business">Business</label>
                    </div>

                    <div className={styles["popup-photoshootType__values"]}>
                      <input
                        type="radio"
                        id="baby"
                        name="typeOfPhotoshoot"
                        value="Baby"
                      />
                      <label for="baby">Baby</label>
                    </div>
                    <div className={styles["popup-photoshootType__values"]}>
                      <input
                        type="radio"
                        id="family"
                        name="typeOfPhotoshoot"
                        value="Family"
                      />
                      <label for="family">Family</label>
                    </div>
                  </div>
                  <div className={styles["popup-photoshootType__Section2"]}>
                    <div className={styles["popup-photoshootType__values"]}>
                      <input
                        type="radio"
                        id="maternity"
                        name="typeOfPhotoshoot"
                        value="Maternity"
                      />
                      <label for="maternity">Maternity</label>
                    </div>

                    <div className={styles["popup-photoshootType__values"]}>
                      <input
                        type="radio"
                        id="personal"
                        name="typeOfPhotoshoot"
                        value="Personal"
                      />
                      <label for="personal">Personal</label>
                    </div>
                    <div className={styles["popup-photoshootType__values"]}>
                      <input
                        type="radio"
                        id="prewed"
                        name="typeOfPhotoshoot"
                        value="Pre-Wedding"
                      />
                      <label for="prewed">Pre-Wedding</label>
                    </div>
                    <div className={styles["popup-photoshootType__values"]}>
                      <input
                        type="radio"
                        id="other"
                        name="typeOfPhotoshoot"
                        value="Other"
                      />
                      <label for="other">Other</label>
                    </div>
                  </div>
                </div>
              </div>
              <div id={styles["photoshoot-city__container"]}>
                <select
                  name="city"
                  id={styles["photoshoot-city"]}
                  // value={callbackData.city}
                  ref={clearCityValue}
                >
                  <option value="0">Choose City</option>
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
                <textarea
                  id={styles["popup__requestField"]}
                  placeholder="Comments or Special request"
                  name="comments"
                  rows="4"
                  cols="33"
                  ref={clearCommentsValue}
                  // value={callbackData.comments}
                />
              </div>
            </div>

            <button id={styles["popup-button"]} type="submit">
              Get a Callback
            </button>
          </div>
        </form>
      </div>
    )
  );
};

export default CallbackPopup;
