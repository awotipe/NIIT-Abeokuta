import React from "react";
import classes from "./MMS.module.css";
import Sponsor from "../../Components/Sponsors/Sponsors"
import Curriculum from "../../Assests/curriculum.png"
import Design from "../../Assests/MMS-Software.png"
import Testimony from "../../Components/Testimonials/Testimonials"

const MMS = () => {
  return (
    <div className={classes.container}>
      <div className={classes.hero}>
        <h3>SOFTWARE ENGINEERING</h3>
      </div>
      <div className={classes.innerContainer}>
        <div className={classes.about}>
          <div className={classes.aboutTop}>
            <h2>RVMMS Full Stack Software Development</h2>
          </div>
          <div className={classes.aboutBody}>
          <div className={classes.aboutBody1}>
            <p>
              The Rev MMS Full Stack Development program is aimed at creating
              software engineering professionals. Students will learn most
              prevalent and latest technologies in the software Industry. It
              builds strong foundational skills in Java Technologies & Web
              Development programs. Software curriculum have Multiple Job pro
              les based architecture like Database Developer, Java Programmer,
              Web Application Developer in Java, Web Designing using HTML & CSS3
              and ReactJS with React Native, Microservices with Spring and
              Kubernetes, continuous Delivery with Docker and Jenkins etc.
            </p>
            </div>
            <div className={classes.aboutBody2}>
            <p>
              This curriculum is also powered by NIIT's revolutionary
              methodology, which provides the teacher and the group of students
              to mould the learning style dependent on the profile of the
              learners and give an environment to provide constructivism and
              collaborative learning.Ithas been therefore aptly called as LACC
              (Learning Architecture based on Collaborative Constructivism).
            </p>
          </div>
          </div>
        </div>
        <div className={classes.curriculum}>
            <img src={Curriculum} alt="Curriculum" />
        </div>
        <div className={classes.design}>
            <img src={Design} alt="Design" />
        </div>
        <Sponsor/>
        <Testimony/>
      </div>
    </div>
  );
};

export default MMS;
