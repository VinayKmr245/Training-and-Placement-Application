import React from "react";
import classes from "./Landing.module.css";
import college from "../../../assets/images/6defa3f0-55ba-4361-b892-cef8273dffcb.jpg";
import greenCurve from "../../../assets/logos/green-curve.svg";
import imgResume from "../../../assets/logos/resume.svg";
import imgId from "../../../assets/logos/id.svg";
import redChat from "../../../assets/logos/red-chat.svg";
import yellowChat from "../../../assets/logos/yellow-chat.svg";
import { Link } from "react-router-dom";

// company images

import amazon from "../../../assets/logos/Amazon_(company)-Logo.wine.svg";
import accenture from "../../../assets/logos/Accenture-logo.png";
//import mentorGraphics from "../../../assets/logos/mentorGraphics.png";
import wipro from "../../../assets/logos/wipro.png";
import capgemini from "../../../assets/logos/capgemini.png";

const Landing = () => {
  return (
    <div className={classes.landing}>
      <div className={classes["landing-container"]}>
        <img src={greenCurve} alt="" className={classes["img-green-curve"]} />
        <div className={classes["landing-left"]}>
          <div className={classes["landing-heading"]}>
            <h3>Get Placed</h3>
            <h1>In</h1>
            <h1>Good Company</h1>
          </div>
          <div className={classes["landing-desc"]}>
            <p>
              Our collage will train students to get job in good companies
              <br /> Companies looking to hire highly skilled students
            </p>
          </div>
          <div className={classes["landing-links"]}>
            <Link to="/signup">
              <button className={classes["link-btn"]}>Get started Now</button>
            </Link>{" "}
          </div>
        </div>
        <div className={classes["landing-right"]}>
          <div className={classes["icons-wrap"]}>
            {/* <img src={imgResume} alt="" className={classes["img-Resume"]} /> */}
            <img src={imgId} alt="" className={classes["img-Id"]} />
            <img src={redChat} alt="" className={classes["img-RedChat"]} />
            <img
              src={yellowChat}
              alt=""
              className={classes["img-YellowChat"]}
            />

            <div className={classes["img-wrap"]}>
              <img src={college} alt="" className={classes.imgCollege}></img>
            </div>
          </div>

          <div className={classes["landing-right-footer-mobile"]}>
            <h3> CMRCET Placement Cell initiataive ❤ </h3>
          </div>
        </div>
      </div>

      <div className={classes["landing-placements"]}>
        <h1>Our students succesfully placed at</h1>

        <div className={classes["company-icon"]}>
          <div className={classes["icon-wrap"]}>
            {" "}
            <img src={amazon} alt="" />
          </div>
          <div className={classes["icon-wrap"]}>
            {" "}
            <img src={accenture} alt="" />
          </div>
          <div className={classes["icon-wrap"]}>
            {" "}
          {/*  <img src={mentorGraphics} alt="" />  */}
          </div>
          <div className={classes["icon-wrap"]}>
            {" "}
            <img src={wipro} alt="" />
          </div>
          <div className={classes["icon-wrap"]}>
            {" "}
            <img src={capgemini} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
