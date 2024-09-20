import React from "react";
import classes from "./Hero.module.css";
import HeroImage from "../../Assests/Logo.png";
import Line from "../../Assests/line.png";


const Hero = () => {
  return (
    <div className={classes.container}>
    <div className={classes.innerContainer}>
      <div className={classes.hero}>
        <div className={classes.heroImage}>
          <img src={HeroImage} alt="logo" />
        </div>
        <h2>LET YOUR CAREER GROWTH GO VIRAL</h2>
        <p>
          Welcome To The Digital Era. Get Yourself Skilled In Our Digital
          Marketing Program At NIIT Today.
        </p>
      </div>
    </div>
      <div className={classes.line}>
        <img src={Line} alt="Line" />
      </div>
    </div>
  );
};

export default Hero;
