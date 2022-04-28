import React from "react";
import classes from "./Companies.module.css";
import filter from "../../../assets/logos/filter_list_black_24dp.svg";
import CompanyPost from "./CompanyPost";
import company_dummy_data from "./company-dummy-data";
const Companies = () => {
  return (
    <div className={classes.companies}>
      <div className={classes["companies-container"]}>
        <div className={classes["companies-header"]}>
          <h3>Companies Visited in placement drive</h3>
          <div className={classes["dashboard-posts-filter"]}>
            <img src={filter} alt="" />
          </div>
        </div>
        <div className={classes["companies-categories"]}>
          <div className={classes["company-name"]}>
            <h4>Name</h4>
          </div>
          <div className={classes["company-type"]}>
            <h4>Role</h4>
          </div>

          <div className={classes["company-vacancy"]}>
            <h4>Selected</h4>
          </div>
        </div>
        <div className={classes["companies-list"]}>
          {company_dummy_data.map((company) => (
            <CompanyPost
              id={company.id}
              name={company.name}
              logo={company.logo}
              job_profile={company.job_profile}
              selected={company.selected}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
