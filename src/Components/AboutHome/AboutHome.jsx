import React from "react";
import classes from "./AboutHome.module.css";
import Logo from "../../Assests/Logo.png";
import Student from "../../Assests/AboutImage.png";
import Background from "../../Assests/backImage.png";

const AboutHome = () => {
  return (
    <div className={classes.container}>
        <div className={classes.aboutBack}>
            <img src={Background} alt="background"/>
        </div>
    <div className={classes.innerContainer}>
      <div className={classes.aboutText}>
        <div className={classes.logo}>
          <img src={Logo} alt="Logo" />
        </div>
        <h5>About Us</h5>
        <p>
          NIIT is a leading Skills and Talent Development Corporation that is
          building a manpower pool for global industry requirements.
        </p>
        <p>
          The company, which was set up in 1981 to help the nascent IT industry
          overcome its human resource challenges, today ranks among the world's
          leading training companies owing to its vast and comprehensive array
          of talent development programs.
        </p>
        <button>Learn More</button>
      </div>
      <div className={classes.aboutImage}>
        <img src={Student} alt="Student"/>
      </div>
    </div>
    </div>
  );
};

export default AboutHome;
