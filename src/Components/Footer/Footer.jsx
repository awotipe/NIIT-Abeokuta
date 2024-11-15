import React from "react";
import classes from "./Footer.module.css";
import Logo from "../../Assests/NIIT Logo.png";
import Logo2 from "../../Assests/IT CORE LOGO.png";
import Facebook from "../../Assests/facebook.png";
import Instagram from "../../Assests/instagram.png";
import Twitter from "../../Assests/twitter.png";
import Youtube from "../../Assests/youtube.png";
import Linkedin from "../../Assests/linkedin.png";
import { Link } from "react-router-dom";
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
            <p>
              NIIT Office, Suite B107/108 MKO Abiola Way, Providence Event
              Center, by NNPC, Leme Abeokuta.Ogun state, Abeokuta, Nigeria
            </p>
            <p>
              <TiLocation /> Suite B107/108 MKO Abiola Way, Abeokuta, Nigeria
            </p>
            <p>
              <IoCall /> 08094355000, 08094355003
            </p>
            <p>niitabeokuta@gmail.com</p>
            <div className={classes.socials}>
              <div className={classes.media}>
                <img src={Facebook} alt="Facebook" />
              </div>
              <div className={classes.media}>
                <img src={Instagram} alt="Instagram" />
              </div>
              <div className={classes.media}>
                <img src={Twitter} alt="Twitter" />
              </div>
              <div classname={classes.media}>
                <img src={Youtube} alt="Youtube" />
              </div>
              <div className={classes.media}>
                <img src={Linkedin} alt="Linkedin" />
              </div>
            </div>
          </div>
          <div className={classes.footRight}>
            <div className={classes.info}>
              <h5>Menu</h5>
              <p>Home</p>
              <p>Courses</p>
              <p>Blog</p>
              <p>About Us</p>
              <p>Contact Us</p>
              <p>Terms & Policy</p>
            </div>

            <div className={classes.info}>
              <h5>Account</h5>
              <p>My Account</p>
              <p>Checkout</p>
              <p>My Cart</p>
              <p>My catalog</p>
            </div>

            <div className={classes.info}>
              <h5>Stay Connected</h5>
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Twitter</p>
              <p>Youtube</p>
              <p>Linkedin</p>
            </div>
          </div>
          <div className={classes.subscribe}>
            <h5>Stay Updated</h5>
            <form>
              <input type="email" name="email" placeholder="Enter Your Email" />
              <button type="submit">
                <PiPaperPlaneTiltFill />
              </button>
            </form>
          </div>
        </div>
        <div className={classes.copyright}>
          <hr />
          <p>Copyright © NIIT Abeokuta 2024. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
