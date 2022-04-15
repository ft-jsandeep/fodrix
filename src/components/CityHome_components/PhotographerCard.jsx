import React from "react";
import styles from "./PhotographerCard.module.css";
// import Images from "../../All_Images/Images";

const PhotographerCard = (props) => {
  return (
    <div className={styles["card-container"]}>
      <div className={styles["image-slider__container"]}>
        <div className={styles["image-box"]}>
          {props.displayImages.map((image, id) => (
            <div className={styles["image"]}>
              <img src={image} key={id} alt="" />
            </div>
          ))}
          {/* <img className={styles["img1"]} src={Images.kolkata} alt="" />
          </div>
          <div className={styles["image"]}>
            <img className={styles["img2"]} src={Images.kolkata} alt="" />
          </div>
          <div className={styles["image"]}>
            <img className={styles["img3"]} src={Images.kolkata} alt="" />
          </div>
          <div className={styles["image"]}>
            <img className={styles["img4"]} src={Images.kolkata} alt="" /> */}
        </div>
        {/* </div> */}
        {/* <div className={styles["upper-container"]}> */}
      </div>
      <div className={styles["image-container"]}>
        <img
          className={styles["image-container__img"]}
          src={props.profilePic}
        />
      </div>
      <div className={styles["lower-container"]}>
        <div>
          <h3>{props.name}</h3>
          <h4>{props.location}</h4>
        </div>
        <div>
          <p>{props.description}</p>
        </div>
        <div>
          {/* <a href="#" className={styles.btn}>
            View profile
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default PhotographerCard;
