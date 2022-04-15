import React from "react";
import styles from "./FeaturedPhotographer.module.css";
import PhotographerCard from "./PhotographerCard";
import Images from "../../All_Images/Images";

let photographers = [
  {
    name: "Himanshu Kesharwani",
    location: "Kolkata, West Bengal",
    profilePic: Images.Himanshukesharwani,
    displayImages: [Images.Mumbai, Images.kerala, Images.kolkata, Images.pune],
    description:
      "sodales accumsan ligula. Aenean sed diam tristique, fermentum minec, ornare arch.",
  },

  {
    name: "Himanshu Kesharwani",
    location: "Kolkata, West Bengal",
    profilePic: Images.Himanshukesharwani,
    displayImages: [Images.Mumbai, Images.kerala, Images.kolkata, Images.pune],
    description:
      "sodales accumsan ligula. Aenean sed diam tristique, fermentum minec, ornare arch.",
  },

  {
    name: "Himanshu Kesharwani",
    location: "Kolkata, West Bengal",
    profilePic: Images.Himanshukesharwani,
    displayImages: [Images.Mumbai, Images.kerala, Images.kolkata, Images.pune],
    description:
      "sodales accumsan ligula. Aenean sed diam tristique, fermentum minec, ornare arch.",
  },

  {
    name: "Himanshu Kesharwani",
    location: "Kolkata, West Bengal",
    profilePic: Images.Himanshukesharwani,
    displayImages: [Images.Mumbai, Images.kerala, Images.kolkata, Images.pune],
    description:
      "sodales accumsan ligula. Aenean sed diam tristique, fermentum minec, ornare arch.",
  },
];

const FeaturedPhotographer = () => {
  return (
    <>
      {photographers.map((photographer) => (
        <PhotographerCard
          name={photographer.name}
          location={photographer.location}
          profilePic={photographer.profilePic}
          description={photographer.description}
          displayImages={photographer.displayImages}
        />
      ))}
    </>
  );
};

export default FeaturedPhotographer;
