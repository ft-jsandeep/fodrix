import React, { useEffect, useState } from "react";
import styles from "./ConfirmedBookings.module.css";

const PendingBookings = () => {
  const [pendingShoot, setPendingShoot] = useState([]);
  let url = "https://api.fodrix.com//user/clientRecord_success/";
  const fetchPendingBookings = () => {
    let api = url + localStorage.getItem("userEmail");
    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.data);
        setPendingShoot(data.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchPendingBookings();
  }, []);

  return (
    <div className={styles["NewDashboard-photoshootCard"]}>
      {pendingShoot.map((request, id) => (
        <div className={styles["pending-booking__container"]} key={id}>
          <h6>{request.date}</h6>

          <div className={styles["pending-booking__inner"]}>
            <h3>{request.location}</h3>
            <p>₹ {request["c_package"]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PendingBookings;
