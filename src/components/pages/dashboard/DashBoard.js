import React,{useEffect} from "react";
import classes from "./DashBoard.module.css";
import DashBoardNav from "./DashBoardNav";

import DashBoardCalendar from "./DashBoardCalendar";
import rocketicon from "../../../assets/logos/rocket.svg";
import interview from "../../../assets/logos/interview.svg";

import DashBoardPages from "./DashBoardPages";

import DashboardHeader from "./DashboardHeader";

import {useParams} from 'react-router-dom';
import axios from 'axios';
import { match } from "react-router-dom";
const DashBoard = () => {


{/*   
Auth Check  include this code in all pages that needs authentication check 
to access 
*/}
const userparams = "/"+ window.location.pathname + "/";

var a=-1,b=-1;
var c="";
console.log(userparams.length);
for(var i=userparams.length - 1 ; i>=0;i--){console.log(userparams[i]);

if(a!==-1 && userparams[i]==='/') break; 

if(a!==-1 && b===-1){
c+=userparams[i];
}
if(userparams[i]==='/') a=i;
}
console.log("c is ->" + c);

  const UserName = c.split("").reverse().join("");
  console.log(UserName);
useEffect( async ()=>{

  
  const token = localStorage.getItem(`User ${UserName}`);
  console.log("fetched from local->")
     console.log(token);
     
   await axios.get('http://localhost:5000/auth/TokenValidate', {headers:{"authorization" : `Bearer ${token}`  }}).then(Response=>{
          
        if(Response.data.resval !== "TokenVerified")
        { window.location.replace(`/auth/Login`);
          
         
        }
      console.log(Response.data); 
      
   }).catch(error=>{
      console.log(error);
   })
  },[]); 




  return (
    <div className={classes.dashboard}>
      <div className={classes["dashboard-container"]}>
        <DashBoardNav UserName={UserName}/>

        <div className={classes["dashboard-main"]}>
          <DashboardHeader UserName={UserName}/>
          <div className={classes["dashboard-main-container"]}>
            <div className={classes["main-left"]}>
              <DashBoardPages UserName={UserName}/>
            </div>
            <div className={classes["Res-dashboard"]}>
            <div className={classes["main-right"]}>
              <DashBoardCalendar UserName={UserName}
              />

              <div className={classes["dashboard-stats"]}>
                <div className={classes["dashboard-jobs"]}>
                  <div className={classes["dashboard-job-icon"]}>
                    <img src={rocketicon} alt="" />
                  </div>

                  <h2>300 vacancies</h2>
                </div>
                <div className={classes["dashboard-jobs-selections"]}>
                  <div className={classes["job-selection-icon"]}>
                    <img src={interview} alt="" />
                  </div>
                  <h2>150 Selected</h2>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
