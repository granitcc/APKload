import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import android from "../components/images/android.png";
import { NavLink, Switch, Route, Link } from "react-router-dom";
// import "./singup.scss";
// import "./signin.scss";

function SingupPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div>
        <div className="alll">
          <div className="leeftt">
            <div className="logo">
              <img src={android} />
            </div>
            <div className="texkt">
              <p className="text"> APK Load</p>
              <p className="texxt">It takes on click It's that simple.</p>
            </div>
            <button className="bttn">Download v4.17.14(14.4mb)</button>
            <div className="iconss">
              <div className="one">
                <i class="fas fa-search size"></i>
                <p id="ppp">
                  Discover top apps and games and get recommentations you will
                  love.
                </p>
              </div>
              <div className="two">
                <i class="fas fa-database size"></i>
                <p id="p">Save on apps , games and in-app items.</p>
              </div>
              <div className="three">
                <i class="fas fa-cloud-download-alt size"></i>
                <p id="pp">
                  Access all of your apps,get app updates in one place
                </p>
              </div>
            </div>
          </div>

          <div className="riigght">
            <form className="red">
              <div className="container">
                <div className="txt">
                  <p id="login">SIGN UP</p>
                  <p id="wb">Enter your detail below and join us.</p>
                </div>
                <div className="passwords">
                  <div className="pwd1">
                    <label for="name">First Name</label>
                    <div class="input-container">
                      <i class="fas fa-user icon"></i>
                      <input
                        class="input-field ip"
                        type="name"
                        placeholder="Enter your first name"
                        name="name"
                      />
                    </div>
                  </div>
                  <div className="pwd2">
                    <label for="confirmname">Last Name</label>
                    <div class="input-container">
                      <i class="fas fa-user icon"></i>
                      <input
                        class="input-field ip"
                        type="name"
                        placeholder="Enter tour last name"
                        name="confirm"
                      />
                    </div>
                  </div>
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
                    <span id="rm">
                      {" "}
                      Agree with our <span id="blue">
                        Privacy policy
                      </span> and <span id="blue">Terms</span>
                    </span>{" "}
                  </span>
                </div>

                <button className="button">
                  <span id="tt">S I G N</span>
                  <span id="ttt">U P</span>
                </button>
                <div className="bootom">
                  <p id="singupp">Already have an account?</p>
                  <p id="singup">
                    <NavLink activeClassName="active" to="/signin">
                      <span id="ll">LOG IN</span>
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
    </>
  );
}

export default SingupPage;
