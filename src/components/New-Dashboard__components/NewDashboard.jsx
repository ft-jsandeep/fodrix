import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter, useHistory } from "react-router-dom";
import DashboardBooking from "./DashboardBooking";
import DashboardNav from "./DashboardNav";
import DashboardProfile from "./DashboardProfile";
import styles from "./NewDashboard.module.css";
import Images from "../../All_Images/Images";

const NewDashboard = () => {
  const [menuDisplay, setMenuDisplay] = useState(false);
  const history = useHistory();
  const pathArray = history.location.pathname.split("/");
  const currentPath = pathArray[pathArray.length - 1];

  // useEffect(() => {
  //   if (window.innerWidth >= 810) setMenuDisplay(true);
  // }, [menuDisplay]);

  // const dashboardNavCloseHandler = (handle) => {
  //   if (handle) setMenuDisplay(false);
  //   if (window.innerWidth >= 810) setMenuDisplay(true);
  // };

  return (
    <div className={styles["NewDashboard-container"]}>
      <img
        className={styles["NewDashboard-hamburger"]}
        src={Images.hamburger}
        onClick={() => setMenuDisplay(true)}
      />
      {menuDisplay && (
        <DashboardNav
          // largeDisplay={false}
          // closeHandler={dashboardNavCloseHandler}
          sideNavDisplay={false}
        />
      )}
      {menuDisplay && (
        <p
          className={styles["DashboardNav-close"]}
          onClick={() => setMenuDisplay(false)}
        >
          X
        </p>
      )}
      <DashboardNav sideNavDisplay={true} />
      {currentPath == "dashboard" ? <DashboardBooking /> : <DashboardProfile />}
    </div>
  );
};

export default NewDashboard;
