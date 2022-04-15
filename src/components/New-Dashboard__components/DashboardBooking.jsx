import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./DashboardBooking.module.css";
import PendingBookings from "./PendingBookings";
import ConfirmedBookings from "./ConfirmedBookings";

const DashboardBooking = () => {
  const [activeTab, setActiveTab] = useState(1);
  const confirm = useRef();
  const pending = useRef();
  useEffect(() => {
    if (activeTab === 1) {
      confirm.current.classList.add("bookingTabActiveState");
      pending.current.classList.remove("bookingTabActiveState");
    } else {
      pending.current.classList.add("bookingTabActiveState");
      confirm.current.classList.remove("bookingTabActiveState");
    }

    console.log(confirm.current);
  }, [activeTab]);
  return (
    <div className={styles["NewDashboard-Body__container"]}>
      <div className={styles["NewDashboard-header"]}>
        <h1>Bookings</h1>
        <Link to="/userDashboard">
          <button>Book a photoshoot</button>
        </Link>
      </div>
      <div className={styles["NewDashboard-booking__route"]}>
        <div
          className={styles["NewDashboard-booking__link"]}
          onClick={() => setActiveTab(1)}
          ref={confirm}
        >
          <h5>Confirmed</h5>
        </div>
        <div
          className={styles["NewDashboard-booking__link"]}
          onClick={() => setActiveTab(2)}
          ref={pending}
        >
          <h5>Pending</h5>
        </div>
      </div>
      <div className={styles["NewDashboard-photoshootCard"]}>
        {activeTab === 1 ? <ConfirmedBookings /> : <PendingBookings />}
      </div>
    </div>
  );
};

export default DashboardBooking;
