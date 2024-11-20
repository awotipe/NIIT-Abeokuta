import React,  {useRef, useState} from 'react';
import classes from "./Application.module.css";
import emailjs from "@emailjs/browser";

const Result = () => {
  return <p>Your application has been submitted successfully.</p>;
};

const Application = () => {
  const [result, showResult] = useState(false, true);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5s4trng",
        "template_92n55td",
        form.current,
        "1woq1KBTuIFDNqDRe"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(
            "Your application has been submitted successfully."
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
     <h3>COURSE REGISTRATION</h3>
    </div>
    <form ref={form} onSubmit={sendEmail} className={classes.register}>
       <h3>Welcome to NIIT ABEOKUTA</h3>
       <p>Please fill the form below appropriately.</p>
       <label for="full_Name" >Full Name</label><br/>
       <input type="name" id="full_Name" name="full_Name" placeholder='Please enter your full name' required/><br/>

       <label for="Email" >Email</label><br/>
       <input type="email" id="email" name="email" placeholder='Please enter your email address' required/><br/>

       <label for="phone_Number" >Phone Number</label><br/>
       <input type="phone" id="phone" name="phone"  placeholder='+234 80 xxx xxx xx' required/><br/>

       <label for="address" >Location</label><br/>
       <input type="address" id="address" name="address" placeholder='Please enter your house address' required/><br/>

       <label for="gender" >Gender</label><br/>
       <input type="text" id="gender" name="gender" placeholder='Please select your Gender' required/><br/>

       <label for="course" >Course to Study</label><br/>
       <input type="text" id="course" name="course" placeholder='Please select your Course to Study' required/><br/>

       <label for="attendance" >Mode of Attendance</label><br/>
       <input type="text" id="attendance" name="attendance" placeholder='Please select your prefered Mode' required/><br/>
       
       <div className={classes.submit}>
           <button>SUBMIT</button>
       </div>
       <div className={classes.myRow}>{result ? <Result /> : null} </div>
    </form>
 </div>
  )
}

export default Application
