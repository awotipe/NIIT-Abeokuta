import React from 'react'
import classes from ".//TestProps.module.css"
import { Link } from "react-router-dom";

const TestProps = (props) => {
  return (
    <div className={classes.container}>
    <div className={classes.aboutBack}>
        <img src={props.background} alt="background"/>
    </div>
<div className={classes.innerContainer}>
  <div className={classes.aboutText}>
    <div className={classes.logo}>
      <img src={props.logo} alt="Logo" />
    </div>
    <h5>{props.about}</h5>
    <p>
      {props.text1}
    </p>
    <p>
      {props.text2}
    </p>
    <Link to="/aboutus">
    <button>{props.more}</button>
    </Link>
  </div>
  <div className={classes.aboutImage}>
    <img src={props.student} alt="Student"/>
  </div>
</div>
</div>
  )
}

export default TestProps
