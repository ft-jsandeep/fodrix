import React from "react";
import styles from "./DashboardProfile.module.css";
import ProfilePersonalDetails from "./ProfilePersonalDetails";
import UserAddress from "./UserAddress";
import UserPassword from "./UserPassword";

const DashboardProfile = () => {
  return (
    <>
      <div className={styles["NewDashboard-Body__container"]}>
        <div className={styles["NewDashboard-header"]}>
          <h1>Profile</h1>
        </div>
        <div className={styles["NewDashboard-booking__route"]}>
          <h5>Account settings</h5>
        </div>
        <div className={styles["NewDashboard-photoshootCard"]}>
          <ProfilePersonalDetails />
          <div className={styles["NewDashboard-photoshootCard__section2"]}>
            <UserAddress />
            <UserPassword />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardProfile;
