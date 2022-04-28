import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/pages/home/Header";
import Landing from "./components/pages/home/Landing";

import Signup from "./components/pages/auth/Signup";
import Login from "./components/pages/auth/Login";
import DashBoard from "./components/pages/dashboard/DashBoard";

import { Switch, Route } from "react-router-dom";
import Footer from "./components/pages/home/Footer";
import Highlights from "./components/pages/home/Highlights";
import UserLogin from "./components/pages/Auth/Login2";
import UserSignUp from "./components/pages/Auth/SIgnUp2";    
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }
  const { width } = useWindowDimensions();

  return (
    <div>
      <div className="App">
        <Switch>
          <Route path="/signup">
            <Header />
            <Signup />
          </Route>

          <Route path="/login">
            <Header />
            <Login />
          </Route>

          <Route path="/dashboard">
            <DashBoard />
          </Route>

          <Route path="/auth/Login">
            <UserLogin />
          </Route>
          <Route path="/auth/SignUp">
            <UserSignUp />
          </Route>







          <Route path="/">
            <Header />
            <Landing />

            <Highlights />
            {width < 460 ? <Footer /> : ""}
          </Route>








          <Route path="/signup/:UserName">
            <Header />
            <Signup />
          </Route>

          <Route path="/login/:UserName">
            <Header />
            <Login />
          </Route>

          <Route path="/dashboard/:UserName">
            <DashBoard />
          </Route>

          <Route path="/auth/Login/:UserName">
            <UserLogin />
          </Route>
          <Route path="/auth/SignUp/:UserName">
            <UserSignUp />
          </Route>

          <Route path="/:UserName">
            <Header />
            <Landing />

            <Highlights />
            {width < 460 ? <Footer /> : ""}
          </Route>







        </Switch>
      </div>
      {width < 460 ? "" : <Footer />}
    </div>
  );
}
