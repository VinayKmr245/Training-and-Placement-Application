import React, { useState, useRef } from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  const [data, setData] = useState([]);
  const inputE1 = useRef(null);

  const getStudentQuery = () => {
    const studentQuery = inputE1.current.value;
    data.push(studentQuery);
    setData(data);
  };

  return (
    <div className={classes.footer}>
      <div className={classes["footer-container"]}>
        <div className={classes["footer-address"]}>
          <div className={classes["address-header"]}>
            <h3 className={classes["clg-name"]}>
              CMR College Of Engineering <br/>and Technology
            </h3>
            <p className={classes["clg-address"]}>Medchal Rd, Kandlakoya</p>
            <p className={classes["clg-pin"]}> Telangana 501401</p>
          </div>
          <div className={classes["clg-social"]}></div>
        </div>

        <div className={classes["footer-admin"]}>
          <h3 className={classes["admin-name"]}>Prof Raja Kishore</h3>
          <p className={classes["admin-designation"]}>Training Officer</p>
          <p className={classes["admin-mail"]}>cmrcetplacements@cmrcet.org</p>
        </div>
        <div className={classes["footer-feedback"]}>
          <div className={classes["feedback-request"]}>
            <h3>Need Suggestions From us ... </h3>

            <p>Let us know about it</p>
          </div>

          <div className={classes["feedback-input"]}>
            <input
              ref={inputE1}
              type="text"
              placeholder="Enter your query..."
            />
            <div className={classes["feedback-send"]}>
              <a onClick={getStudentQuery} style={{ cursor: "pointer" }}>
                Send
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
