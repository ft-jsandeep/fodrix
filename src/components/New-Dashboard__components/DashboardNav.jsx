import React from "react";
import styles from "./DashboardNav.module.css";
import Images from "../../All_Images/Images";
import { Link, useHistory } from "react-router-dom";
import { Dashboard } from "@material-ui/icons";

const DashboardNav = (props) => {
  const history = useHistory();
  const logoutDashboardHandler = () => {
    localStorage.clear();
    history.push("/");
  };
  const DashboardDisplayHandler = () => {
    props.closeHandler(true);
  };
  let classes = styles["DashboardNav-container"];
  if (props.sideNavDisplay === true) {
    classes = `${styles["DashboardNav-container"]}  ${styles["DashboardNavDisplay"]}`;
  } else
    classes = `${styles["DashboardNav-container"]}  ${styles["hamburgerNavDisplay"]}`;
  return (
    <div className={classes}>
      <div className={styles["DashboardNav-header__container"]}>
        <div className={styles["DashboardNav-logo"]}>
          <Link to="/">
            <img
              src={Images.fodrixiconnew}
              alt="Fodrix"
              width="130px"
              height="71px"
            />
          </Link>
        </div>
        <div className={styles["DashboardNav-UserInfo"]}>
          <img
            src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
            alt="Fodrix"
            width="45px"
            height="45px"
            style={{ borderRadius: "50%" }}
          />
          <span>ABC</span>
        </div>
      </div>
      <div className={styles["DashboardNav-route__container"]}>
        <Link className={styles["DashboardNav-route"]} to="/dashboard">
          <i className="fas fa-camera"></i>
          <p>Bookings</p>
        </Link>
        <Link className={styles["DashboardNav-route"]} to="/dashboard/profile">
          <i className="fas fa-user"> </i>
          <p>Profile</p>
        </Link>
        <div
          className={styles["DashboardNav-route"]}
          onClick={logoutDashboardHandler}
        >
          <i class="fas fa-logout-arrow"></i>
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
