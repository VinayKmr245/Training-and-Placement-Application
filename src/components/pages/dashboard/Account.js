import React, { useEffect, useState } from "react";
import classes from "./Account.module.css";
import userImg from "../../../assets/images/user/cheerful-curly-business-girl-wearing-glasses.jpg";
import axios from "axios";

// eslint-disable-next-line

const Account = () => {
  const [userData, setUserData] = useState([]);

  return (
    <div className={classes.account}>
      <div className={classes["account-container"]}>
        <div className={classes["account-header"]}>
          <div className={classes["user-img"]}>
            <img src={userImg} alt="userimg" />
          </div>
          <div className={classes["user-credentials"]}>
            <div className={classes["user-id"]}>
              <h1>19H51A05XX</h1>
            </div>
            <div className={classes["user-name"]}>
              <h1>Alexa Reddy</h1>
            </div>
          </div>
        </div>
        <div className={classes["account-details"]}>
          <div className={classes["user-email"]}>
            {" "}
            <p>Alexa_19H51A05XX@cmrcet.ac.in</p>
          </div>
          <div className={classes["user-study"]}>
            <div className={classes["user-year"]}>
              <h2>CSE</h2>
            </div>
            <div className={classes["user-stream"]}>
              <h2>Computer Science</h2>
            </div>
          </div>
        </div>
        {/* <div className={classes["account-adverstisement"]}>
          <div className={classes["adv-heading"]}>
            <h1>For CMR exclusive interview experience</h1>
          </div>
          <div className={classes["adv-link"]}>
            <a href="www.google.com"> Take me there</a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Account;
