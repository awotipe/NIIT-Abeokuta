import React from "react";
import classes from "./Footer.module.css";
import Logo from "../../Assests/NIIT Logo.png";
import Logo2 from "../../Assests/IT CORE LOGO.png";
import Facebook from "../../Assests/facebook.png";
import Instagram from "../../Assests/instagram.png";
import Twitter from "../../Assests/twitter.png";
// import Youtube from "../../Assests/youtube.png";
import Linkedin from "../../Assests/linkedin.png";
import { Link, NavLink } from "react-router-dom";
import { TiLocation } from "react-icons/ti";
import { IoCall } from "react-icons/io5";
import { PiPaperPlaneTiltFill } from "react-icons/pi";

const Footer = () => {
  return (
    <div className={classes.container}>
      <footer>
        <hr />
        <div className={classes.footWrap}>
          <div className={classes.footLeft}>
            <div className={classes.footLogo}>
              <Link to="/">
                <img src={Logo} alt="Logo" />
                <img src={Logo2} alt="Logo" />
              </Link>
            </div>
            <div className={classes.niit}>
              <p>
                NIIT is a leading Skills and Talent Development Corporation that
                is building a manpower pool for global industry requirements.
              </p>
            </div>
            <div className={classes.address}>
              <h3>Agbara Office</h3>
              <p>
                <TiLocation />Suite E, Agbara Estate Shopping Mall
                Beside Stanbic IBTC Bank, Beach Town, Agbara, Ogun State
              </p>
              <p>
                <IoCall /> 07066968813, 08094355003
              </p>
              <p>niitagbara@gmail.com</p>
            </div>
            <div className={classes.address}>
              <h3>Abeokuta Office</h3>
              <p>
                <TiLocation /> Suite B107/108 MKO Abiola Way,
                Providence Event Center, by NNPC, Leme Abeokuta, Ogun State, Nigeria
              </p>
              <p>
                <IoCall /> 09169842806, 09169842803
              </p>
              <p>niitabeokuta@gmail.com</p>
            </div>
            <div className={classes.socials}>
            <div className={classes.media}>
                <a href="https://www.facebook.com/share/1BECYvYqmo/">
                <img src={Facebook} alt="Facebook" />
                </a>
              </div>
              <div className={classes.media}>
                <a href="https://www.instagram.com/niit_agbara_center/profilecard/?igsh=b3EwbXB3b21xeHAx">
                <img src={Instagram} alt="Instagram" />
                </a>
              </div>
              <div className={classes.media}>
                <a href="https://x.com/niit_abeokuta?t=Bm-iln8Fyxznt2M3onrd4w&s=09">
                <img src={Twitter} alt="Twitter" />
                </a>
              </div>
              <div className={classes.media}>
                <img src={Linkedin} alt="Linkedin" />
              </div>
            </div>
          </div>
          <div className={classes.footRight}>
            <div className={classes.info}>
              <h5>Menu</h5>
              <NavLink
              to="/">
              <p>Home</p>
              </NavLink>
              <NavLink
              to="/aboutus">
              <p>About Us</p>
              </NavLink>
              <NavLink
              to="/contactus">
              <p>Contact Us</p>
              </NavLink>
              <NavLink
              to="/courses">
              <p>Courses</p>
              </NavLink>
              <NavLink
              to="/register">
              <p>Register</p>
              </NavLink>
            </div>

            <div className={classes.info}>
              <h5>Account</h5>
              <p>My Account</p>
              <p>Checkout</p>
              <p>My Cert</p>
              <p>My Catalog</p>
            </div>

            <div className={classes.info}>
              <h5>Stay Connected</h5>
              <p> <a href="https://www.facebook.com/share/1BECYvYqmo/">Facebook</a></p>
              <p><a href="https://www.instagram.com/niit_agbara_center/profilecard/?igsh=b3EwbXB3b21xeHAx">Instagram</a></p>
              <p> <a href="https://x.com/niit_abeokuta?t=Bm-iln8Fyxznt2M3onrd4w&s=09">Twitter</a></p>
              <p>Linkedin</p>
            </div>
          </div>
          <div className={classes.subscribe}>
            <h5>Stay Updated</h5>
            <form className={classes.Form}>
              <input type="email" name="email" placeholder="Enter Your Email" />
              <button type="submit">
                <PiPaperPlaneTiltFill />
              </button>
            </form>
          </div>
        </div>
        <div className={classes.copyright}>
          <hr />
          <p>Copyright © NIIT/ITCORE 2024. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
