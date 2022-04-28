import React, { useState } from "react";
import classes from "./Signup.module.css";

import useInput from "../../../hooks/use-input";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Signup = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasEror: nameInputHasEror,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    // isValid: enteredEmailIsValid,
    hasEror: emailInputHasEror,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    // reset: resetEmailInput,
  } = useInput((value) => value.trim().includes("@"));

  const {
    value: enteredId,
    // isValid: enteredIdIsValid,
    hasEror: idInputHasEror,
    valueChangeHandler: idChangeHandler,
    inputBlurHandler: idBlurHandler,
    // reset: resetIdInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredlastName,
    // isValid: enteredNameIsValid,
    // hasEror: nameInputHasEror,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler, // eslint-disable-next-line
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredYear,
    // isValid: enteredYearIsValid,
    // hasEror: YearInputHasEror,
    valueChangeHandler: yearChangeHandler,
    inputBlurHandler: yearBlurHandler, // eslint-disable-next-line
    reset: resetYearInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredbranch, // eslint-disable-next-line
    isValid: enteredBranchIsValid, // eslint-disable-next-line
    hasEror: branchInputHasEror, // eslint-disable-next-line
    valueChangeHandler: branchChangeHandler,
    inputBlurHandler: branchBlurHandler, // eslint-disable-next-line
    reset: resetbranchInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPassword, // eslint-disable-next-line
    isValid: enteredPasswordIsValid, // eslint-disable-next-line
    hasEror: passwordInputHasEror,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler, // eslint-disable-next-line
    reset: resetPasswordInput,
  } = useInput((value) => value.trim() !== "");
  let formIsValid = false;

  if (enteredNameIsValid) {
    // eslint-disable-next-line
    formIsValid = true;
  }
  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!nameInputHasEror) {
      return;
    }
    console.log("form submitted");

    resetNameInput();
  };
  //post request axios

  const baseURL = "http://localhost:3001/signup";
  // eslint-disable-next-line
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function updatePost() {
    axios
      .post(`${baseURL}`, {
        username: `${enteredName}`,
        lastname: `${enteredlastName}`,
        firstname: `${enteredName}`,
        password: `${enteredPassword}`,
        year: `${enteredYear}`,
        branch: `${enteredbranch}`,
        email: `${enteredEmail}`,
        registration: `${enteredId}`,
      })
      .then((response) => {
        console.log(response);
        setPost(response.data);
      });
  }

  return (
    <div className={classes.signUp}>
      <div className={classes["signup-form"]}>
        <form action="/nemetrix" onSubmit={formSubmissionHandler}>
          <div className={classes["form-div"]}>
            <h1 className={classes["form-heading"]}>
              Sign <span>up</span>{" "}
            </h1>
            <div className={classes["form-input"]}>
              <div className={classes["input-name"]}>
                <input
                  type="text"
                  placeholder="first name"
                  onChange={nameChangeHandler}
                  value={enteredName}
                  className={
                    classes[`${nameInputHasEror ? "input-invalid" : ""}`]
                  }
                  onBlur={nameBlurHandler}
                />
                <input
                  type="text"
                  placeholder="last name"
                  onChange={lastNameChangeHandler}
                  value={enteredlastName}
                  onBlur={lastNameBlurHandler}
                />
              </div>
              {nameInputHasEror && (
                <p className={classes["eror-text"]}>Name must not be empty</p>
              )}
              <div className={classes["input-cedentials"]}>
                <input
                  type="email"
                  placeholder="CMR email"
                  onChange={emailChangeHandler}
                  value={enteredEmail}
                  className={
                    classes[`${emailInputHasEror ? "input-invalid" : ""}`]
                  }
                  onBlur={emailBlurHandler}
                />

                <input
                  type="text"
                  placeholder="Roll Number"
                  onChange={idChangeHandler}
                  value={enteredId}
                  className={
                    classes[`${idInputHasEror ? "input-invalid" : ""}`]
                  }
                  onBlur={idBlurHandler}
                />
              </div>
              {emailInputHasEror && (
                <p className={classes["eror-text"]}>email must include @</p>
              )}
              {idInputHasEror && (
                <p className={classes["eror-text"]}>id must not be empty</p>
              )}

              <div className={classes["input-study"]}>
                <label htmlFor="">
                  <span>Year</span>
                  <select
                    name="year"
                    id="year-select"
                    onChange={yearChangeHandler}
                    value={enteredYear}
                    onBlur={yearBlurHandler}
                  >
                    <option value="">Select</option>
                    <option value="btech1">B. Tech 1st Year</option>
                    <option value="btech2">B. Tech 2nd Year</option>
                    <option value="btech3">B. Tech 3rd Year</option>
                    <option value="btech4">B. Tech 4th Year</option>
                    <option value="mtech1">M. Tech 1st Year</option>
                    <option value="mtech2">M. Tech 2nd Year</option>
                    <option value="mba1">MBA 1st Year</option>
                    <option value="mba2">MBA 2nd Year</option>
                  </select>
                </label>

                <label htmlFor="">
                  <span>Branch</span>

                  <select
                    name="branch"
                    id="branch-select"
                    onChange={branchChangeHandler}
                    value={enteredbranch}
                    onBlur={branchBlurHandler}
                  >
                    <option value="">Select</option>
                    <option value="cse">CSE</option>
                    <option value="cse-ai">CSE - AI & ML</option>
                    <option value="cse-cs">CSE - CS</option>
                    <option value="cse-ds">CSE - DS</option>
                    <option value="ai-ml">AI & ML</option>
                    <option value="ai-ds">AI & DS</option>
                    <option value="it">IT</option>
                    <option value="ece">ECE</option>
                    <option value="eee">EEE</option>
                    <option value="mech">MECH</option>
                    <option value="civil">CE</option>
                    <option value="mba">MBA</option>
                  </select>
                </label>
              </div>
              <div className={classes["input-password"]}>
                <input
                  type="password"
                  placeholder="set password"
                  onChange={passwordChangeHandler}
                  value={enteredPassword}
                  onBlur={passwordBlurHandler}
                />
                <input type="password" placeholder="confirm password" />
              </div>
              <Link to="/login">
                <div className={classes["form-submit"]}>
                  <button onClick={updatePost}>Sign-up</button>
                </div>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
