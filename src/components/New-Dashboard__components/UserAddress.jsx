import React from "react";
import styles from "./UserAddress.module.css";

const UserAddress = () => {
  return (
    <div className={styles["userAddress-container"]}>
      <div className={styles["userAddress__section1"]}>
        <h5>Address</h5>
      </div>
      <form>
        <div className={styles["userAddress__section2"]}>
          <div>
            <label htmlFor="profileAddress">Address</label>
            <input
              // className={styles["popup__TextField"]}
              type="text"
              name="profileAddress"
              id="profileAddress"
              placeholder="Street address"
            />
          </div>
          <div>
            <input
              // className={styles["popup__TextField"]}
              type="text"
              name="landmark"
              placeholder="landmark"
            />
          </div>
        </div>
        <div className={styles["userAddress__section3"]}>
          <div>
            <label htmlFor="profileCity">City</label>
            <input
              // className={styles["popup__TextField"]}
              type="text"
              name="profileCity"
              id="profileCity"
              placeholder="eg. New Delhi"
            />
          </div>
          <div>
            <label htmlFor="profileState">State</label>
            <input
              // className={styles["popup__TextField"]}
              type="text"
              name="profileState"
              id="profileState"
              placeholder="eg. Delhi"
            />
          </div>
          <div>
            <label htmlFor="profilePinCode">Pin Code</label>
            <input
              // className={styles["popup__TextField"]}
              type="text"
              name="profilePinCode"
              id="profilePinCode"
              placeholder="eg. 110052"
            />
          </div>
        </div>
        <button className={styles["UserAddress-button"]}>Save changes</button>
      </form>
    </div>
  );
};

export default UserAddress;
