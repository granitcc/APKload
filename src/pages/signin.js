import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "./signin.scss";
import { NavLink, Switch, Route, Link } from "react-router-dom";
import android from "../components/images/android.png";

const SigninPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />

      <div className="alll">
        <div className="leeftt">
          <div className="logo">
            <img src={android} />
          </div>
          <div className="text">
            <div className="pe"> New to APK Load?</div>
          </div>
          <div className="buttondownload">
            <button className="btn">Download v4.17.14(14.4mb)</button>{" "}
          </div>
          <div className="link">
            <a href="/apkloadinstall">How to install?</a>
          </div>
        </div>

        <div className="riigght">
          <form className="red">
            <div className="container">
              <div className="txt">
                <p id="login">LOGIN IN</p>
                <p id="wb">Welcome Back</p>
              </div>
              <div className="elementt">
                <label for="email" className="enem">
                  Email address
                </label>
                <div class="input-container">
                  <i class="fas fa-envelope icon"></i>{" "}
                  <input
                    class="input-field ip "
                    type="text"
                    placeholder="Email"
                    name="usrnm"
                  />
                </div>
              </div>
              <div className="passwords">
                <div className="pwd1">
                  <label for="pwd">Password</label>
                  <div class="input-container">
                    <i class="fas fa-lock-alt icon"></i>
                    <input
                      class="input-field ip"
                      type="password"
                      placeholder="Enter Password"
                      name="pwd"
                    />
                  </div>
                </div>
                <div className="pwd2">
                  <label for="confirm">Confirm Password</label>
                  <div class="input-container">
                    <i class="fas fa-lock-alt icon"></i>
                    <input
                      class="input-field ip"
                      type="password"
                      placeholder="Confirm Password"
                      name="confirm"
                    />
                  </div>
                </div>
              </div>
              <div className="bottom">
                <span>
                  <input type="checkbox" name="check" value="checked" />
                  <span id="rm"> Remeber Me</span>{" "}
                </span>
                <p href="/" id="botttom">
                  Forgot password?
                </p>
              </div>
              <button className="button">
                <span id="tt">L O G </span>
                <span id="ttt">I N</span>
              </button>
              <div className="bootom">
                <p id="singupp">Don't have an account?</p>
                <p id="singup">
                  <NavLink activeClassName="active" to="/singup">
                    <span id="ll">SING UP</span>
                  </NavLink>
                  <Switch>
                    <Route path="/singup" />
                  </Switch>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SigninPage;
