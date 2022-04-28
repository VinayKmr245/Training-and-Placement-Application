import React from "react";
import classes from "./CompanyPost.module.css";
const CompanyPost = (props) => {
  return (
    <div className={classes.companypost}>
      <div className={classes["company-post-container"]}>
        <div className={classes["company-post-header"]}>
          <div className={classes["company-logo"]}>
            <img src={props.logo} alt="company logo" />
          </div>
          <div className={classes["company-name"]}>
            <h3>{props.name}</h3>
          </div>
        </div>

        {/* <div className={classes["company-category"]}>Software</div> */}
        <div className={classes["company-job-profile"]}>
          {props.job_profile}
        </div>
        <div className={classes["company-job-vacancy"]}>{props.selected}</div>
      </div>
    </div>
  );
};

export default CompanyPost;
