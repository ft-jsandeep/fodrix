import React from "react";
import styles from "./ProfilePersonalDetails.module.css";

const ProfilePersonalDetails = () => {
  return (
    <div className={styles["ProfilePersonalDetails__container"]}>
      <form className={styles["ProfilePersonalDetails__FormContainer"]}>
        <div className={styles["ProfilePersonalDetails-section1"]}>
          <img
            src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
            alt="Fodrix"
            width="100px"
            height="100px"
          />
          <div
            className={
              styles["ProfilePersonalDetails-section1__inputContainer"]
            }
          >
            <div>
              <label htmlFor="profileFirstName">First Name</label>
              <input
                // className={styles["popup__TextField"]}
                type="text"
                name="firstName"
                id="profileFirstName"
              />
            </div>
            <div>
              <label htmlFor="profileLastName">Last Name</label>
              <input
                // className={styles["popup__TextField"]}
                type="text"
                name="LastName"
                id="profileLastName"
              />
            </div>
          </div>
        </div>
        <div className={styles["ProfilePersonalDetails-section2"]}>
          <label htmlFor="profileEmail">Email</label>
          <input
            // className={styles["popup__TextField"]}
            type="text"
            name="Email"
            id="profileEmail"
          />
        </div>
        <div className={styles["ProfilePersonalDetails-section3"]}>
          <div>
            <label htmlFor="profileCountryCode">Country code</label>
            <input
              // className={styles["popup__TextField"]}
              type="text"
              name="CountryCode"
              id="profileCountryCode"
            />
          </div>
          <div>
            <label htmlFor="profilePhoneNumber">Phone number</label>
            <input
              // className={styles["popup__TextField"]}
              type="text"
              name="PhoneNumber"
              id="profilePhoneNumber"
            />
          </div>
        </div>
        <div className={styles["ProfilePersonalDetails-section4"]}>
          <label htmlFor="profileInsta">Instagram Handle</label>
          <input
            // className={styles["popup__TextField"]}
            type="text"
            name="InstagramHandle"
            id="profileInsta"
          />
        </div>
        <button className={styles["ProfilePersonalDetails-button"]}>
          Save changes
        </button>
      </form>
    </div>
  );
};

export default ProfilePersonalDetails;
