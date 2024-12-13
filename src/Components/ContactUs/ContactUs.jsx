import React,  {useRef, useState} from 'react';
import classes from "./ContactUs.module.css";
import emailjs from "@emailjs/browser";
import Facebook from "../../Assests/facebook.png";
import Instagram from "../../Assests/instagram.png";
import Twitter from "../../Assests/twitter.png";
// import Youtube from "../../Assests/youtube.png";
import Linkedin from "../../Assests/linkedin.png";
// import { Link } from "react-router-dom";
import { TiLocation } from "react-icons/ti";
import { IoCall } from "react-icons/io5";

const Result = () => {
  return <p>Your message has been sent successfully.</p>;
};

const ContactUs = () => {
  const [result, showResult] = useState(false, true);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pim38pr",
        "template_ycz6w8l",
        form.current,
        "1qip7RQy5uzwiSAWd"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(
            "Your message has been sent successfully."
          );
        },
        (error) => {
          console.log(error.text);
          console.log("Message not sent");
        }
      );

    form.current.reset();
    showResult(true);
  };
  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <div className={classes.container}>
    <div className={classes.hero}>
     <h3>CONTACT US</h3>
    </div>
    <div className={classes.innerContainer}>
    <div className={classes.contactSide}>
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
    <form ref={form} onSubmit={sendEmail} className={classes.register}>
       <h3>Get In Touch With Us</h3>
       <p>We would love to hear from you</p>
       <label for="full_Name" >Full Name</label><br/>
       <input type="name" id="full_Name" name="full_Name" placeholder='Please enter your full name' required/><br/>

       <label for="Email" >Email</label><br/>
       <input type="email" id="email" name="email" placeholder='Please enter your email address' required/><br/>

       <label for="phone_Number" >Phone Number</label><br/>
       <input type="phone" id="phone" name="phone"  placeholder='+234 80 xxx xxx xx' required/><br/>

       <label for="address" >Address</label><br/>
       <input type="address" id="address" name="address" placeholder='Please enter your house address' required/><br />
       
       <div className={classes.submit}>
           <button>SUBMIT</button>
       </div>
       <div className={classes.myRow}>{result ? <Result /> : null} </div>
    </form>
    </div>
 </div>
  )
}

export default ContactUs
