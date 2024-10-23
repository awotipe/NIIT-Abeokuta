import React from "react";
import classes from "./Courses.module.css";
import Student from "../../Assests/python.png";
import Student2 from "../../Assests/digital.png";
import Student3 from "../../Assests/web.png";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.topCourses}>
          <h3>POPULAR PROGRAMMES</h3>
          <p>Elevate your skills with our most in-demand programmes</p>
          <div className={classes.line}>
            <hr />
          </div>
          <div className={classes.btn}>
            <button className={classes.shortTerm}>SHORT TERM COURSE</button>
            <button className={classes.longTerm}>LONG TERM COURSE</button>
          </div>
        </div>
        <div className={classes.cardWrap}>
          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img src={Student} alt="Student"  className={classes.myImages}/>
              <div className={classes.cardText}>
                <h3>PYTHON PROGRAMMING</h3>
                <hr/>
                <p>Duration: 3 Months Certification: NIIT Fee: ₦100,000</p>
                <Link to="/register">
                <button>Register Now</button>
                </Link>
              </div>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img src={Student2} alt="Student" className={classes.myImages} />
              <div className={classes.cardText}>
              <h3>DIGITAL MARKETING</h3>
                <hr/>
                <p>Duration: 6 Months Certification: NIIT Fee: ₦180,600</p>
                <Link to="/register">
                <button>Register Now</button>
                </Link>
              </div>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img src={Student3} alt="Student" className={classes.myImages}/>
              <div className={classes.cardText}>
              <h3>WEB DESIGN</h3>
                <hr/>
                <p>Duration: 6 Months Certification: NIIT Fee: ₦189,250</p>
                <Link to="/register">
                <button>Register Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.butt}>
          <button>EXPLORE MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
