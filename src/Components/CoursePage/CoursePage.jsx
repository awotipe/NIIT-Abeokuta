import React from 'react'
import classes from "./CoursePage.module.css"
import Student from "../../Assests/python.png";
import Student2 from "../../Assests/digital.png";
import Student3 from "../../Assests/web.png";
import Development from "../../Assests/web dev.png";
import Cybersecurity from "../../Assests/cyber.png"
import Analytics from "../../Assests/data analytics.png"
import Hardware from "../../Assests/hardware.png";
import Multimedia from "../../Assests/multimedia.png"
import Linux from "../../Assests/linux.png"
import { Link } from "react-router-dom";

const CoursePage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.topCourses}>
          <h3>POPULAR PROGRAMMES</h3>
          <p>Elevate your skills with our most in-demand programmes</p>
          <div className={classes.line}>
            <hr />
          </div>
        </div>
        <div className={classes.cardWrap}>
          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img src={Student} alt="Student"  className={classes.myImages}/>
              <div className={classes.cardText}>
                <h3>PYTHON PROGRAMMING</h3>
                <hr/>
                <p>Duration: 3 Months <br/>Certification: NIIT <br/> Fee: ₦200,000</p>
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
                <p>Duration: 4 Months <br/>Certification: NIIT <br/>Fee: ₦200,000</p>
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
                <p>Duration: 6 Months <br/>Certification: NIIT <br/>Fee: ₦400,000</p>
                <Link to="/register">
                <button>Register Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.cardWrap}>
          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img src={Development} alt="WEB DEVELOPMENT"  className={classes.myImages}/>
              <div className={classes.cardText}>
                <h3>DIPLOMA IN WEB DEVELOPMENT</h3>
                <hr/>
                <p>Duration: 8 Months <br/>Certification: NIIT <br/>Fee: ₦510,000</p>
                <Link to="/register">
                <button>Register Now</button>
                </Link>
              </div>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img src={Analytics} alt="Student" className={classes.myImages} />
              <div className={classes.cardText}>
              <h3>DATA ANALYTICS</h3>
                <hr/>
                <p>Duration: 4 Months <br/>Certification: NIIT <br/>Fee: ₦400,000</p>
                <Link to="/register">
                <button>Register Now</button>
                </Link>
              </div>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img src={Cybersecurity} alt="Student" className={classes.myImages}/>
              <div className={classes.cardText}>
              <h3>CYBERSECURITY/NETWORKING</h3>
                <hr/>
                <p>Duration: 8 Months <br/>Certification: NIIT <br/>Fee: ₦470,000</p>
                <Link to="/register">
                <button>Register Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.cardWrap}>
          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img src={Hardware} alt="Student"  className={classes.myImages}/>
              <div className={classes.cardText}>
                <h3>HARDWARE/NETWORKING</h3>
                <hr/>
                <p>Duration: 6 Months <br/>Certification: NIIT <br/>Fee: ₦200,000</p>
                <Link to="/register">
                <button>Register Now</button>
                </Link>
              </div>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img src={Multimedia} alt="Student" className={classes.myImages} />
              <div className={classes.cardText}>
              <h3>MULTIMEDIA SKILLS</h3>
                <hr/>
                <p>Duration: 5 Months <br/>Certification: NIIT <br/>Fee: ₦400,000</p>
                <Link to="/register">
                <button>Register Now</button>
                </Link>
              </div>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img src={Linux} alt="Student" className={classes.myImages}/>
              <div className={classes.cardText}>
              <h3>LINUX & ORACLE DATABASE</h3>
                <hr/>
                <p>Duration: 8 Months <br/>Certification: NIIT <br/>Fee: ₦450,000</p>
                <Link to="/register">
                <button>Register Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursePage
