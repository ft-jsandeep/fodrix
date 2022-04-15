import React from "react";
import styles from "./UserPassword.module.css";

const UserPassword = () => {
  return (
    <div className={styles["userPassword-container"]}>
      <div className={styles["userPassword__section1"]}>
        <h5>Password</h5>
      </div>
      <form>
        <div className={styles["userPassword__section2"]}>
          <div>
            <label htmlFor="currentPassword">Current Password</label>
            <input
              // className={styles["popup__TextField"]}
              type="text"
              name="currentPassword"
              id="currentPassword"
            />
          </div>
          <div>
            <label htmlFor="newPassword">New Password</label>
            <input
              // className={styles["popup__TextField"]}
              type="text"
              name="newPassword"
              id="newPassword"
            />
          </div>
        </div>
        <div className={styles["userPassword__section3"]}>
          <div>
            <label htmlFor="confirmPassword">Confirm New Password</label>
            <input
              // className={styles["popup__TextField"]}
              type="text"
              name="confirmPassword"
              id="confirmPassword"
            />
          </div>
          <div>
            <button className={styles["UserPassword-button"]}>Update</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserPassword;
