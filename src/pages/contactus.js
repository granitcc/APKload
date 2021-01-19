import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./contactus.scss";
import empires from "../components/images/empires.jpg";
import { FaAndroid, FaStar } from "react-icons/fa";
import adnroidblue from "../components/images/adnroidblue.png";

function ContactusPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {" "}
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="maiiin">
        <div className="left">
          <form action="/" className="lleft">
            <p id="cs">Contact us</p>
            <div className="data1">
              <input
                class="d1"
                type="text"
                placeholder="Your Name"
                name="name"
              />
              <input
                class="d2"
                type="text"
                placeholder="Your Last Name"
                name="lastname"
              />
            </div>
            <div className="data2">
              <input
                class="d3"
                type="text"
                placeholder="Your email address"
                name="email"
              />
            </div>
            <div className="texxt">Reason for Contact</div>

            <div className="data3">
              <span className="dd">
                <input
                  name="Website feedback"
                  type="radio"
                  value="wf"
                  name="selection1"
                />{" "}
                <p id="ee">Website feedback</p>
              </span>
              <span className="dd">
                <input
                  name="DMCA takedown request"
                  type="radio"
                  value="dmca"
                  name="selection1"
                />
                <p id="ee"> DMCA takedown request</p>
              </span>
              <span className="dd">
                {" "}
                <input
                  name="Adverseting"
                  type="radio"
                  value="a"
                  name="selection1"
                />{" "}
                <p id="ee">Adverseting</p>
              </span>
              <span className="dd">
                {" "}
                <input
                  name="Other"
                  type="radio"
                  value="other"
                  name="selection1"
                />{" "}
                <p id="ee">Other</p>
              </span>
            </div>
            <div className="data4">
              <input
                class="d4"
                type="text"
                placeholder="Subject"
                name="Subject"
              />
              <input
                class="d5"
                type="text"
                placeholder="Type your message here..."
                name="messagebox"
              />
            </div>
            <button className="d6" value="submit">
              S U B M I T
            </button>
          </form>
        </div>

        <div className="heeadd">
          <div className="right">
            <div className="riigght">
              <div className="logoo">
                <img src={adnroidblue} />
              </div>
              <div className="logoright">
                <span className="onn">
                  APKload{" "}
                  <span id="err">
                    8.7 <FaStar />
                  </span>
                </span>
                <span id="onnn">Using Apkload App</span>
                <span id="onnnn">Faster,Free and saving data!</span>
              </div>
            </div>
            <button className="helloo">Download v3.17.14(14.4 MB)</button>
          </div>
          <div className="under">
            <div className="hheed">
              <span id="tte">
                Hot <i class="fas fa-angle-double-right" />
              </span>
            </div>
            <div className="carde">
              <div className="nummber">1</div>
              <div className="geg">
                {" "}
                <img className="imgg" src={empires} />{" "}
              </div>
              <div className="ttxx">
                <span id="tttx">
                  <p>Creative Destruction</p>
                </span>
                <span id="tttxxx">
                  <p>by NetEase Games </p>
                </span>
              </div>
            </div>
            <hr />
            <div className="carde">
              <div className="nummberr">2</div>
              <div className="geg">
                {" "}
                <img className="imgg" src={empires} />{" "}
              </div>
              <div className="ttxx">
                <span id="tttx">
                  <p>Creative Destruction</p>
                </span>
                <span id="tttxxx">
                  <p>by NetEase Games </p>
                </span>
              </div>
            </div>{" "}
            <hr />
            <div className="carde">
              <div className="nummberrr">3</div>
              <div className="geg">
                {" "}
                <img className="imgg" src={empires} />{" "}
              </div>
              <div className="ttxx">
                <span id="tttx">
                  <p>Creative Destruction</p>
                </span>
                <span id="tttxxx">
                  <p>by NetEase Games </p>
                </span>
              </div>
            </div>
            <hr />
            <div className="carde">
              <div className="nummberrrr">4</div>
              <div className="geg">
                {" "}
                <img className="imgg" src={empires} />{" "}
              </div>
              <div className="ttxx">
                <span id="tttx">
                  <p>Creative Destruction</p>
                </span>
                <span id="tttxxx">
                  <p>by NetEase Games </p>
                </span>
              </div>
            </div>
            <hr />
            <div className="carde">
              <div className="nummberrrr">5</div>
              <div className="geg">
                {" "}
                <img className="imgg" src={empires} />{" "}
              </div>
              <div className="ttxx">
                <span id="tttx">
                  <p>Creative Destruction</p>
                </span>
                <span id="tttxxx">
                  <p>by NetEase Games </p>
                </span>
              </div>
            </div>
            <hr />
            <div className="carde">
              <div className="nummberrrr">6</div>
              <div className="geg">
                {" "}
                <img className="imgg" src={empires} />{" "}
              </div>
              <div className="ttxx">
                <span id="tttx">
                  <p>Creative Destruction</p>
                </span>
                <span id="tttxxx">
                  <p>by NetEase Games </p>
                </span>
              </div>
            </div>
            <hr />
            <div className="carde">
              <div className="nummberrrr">7</div>
              <div className="geg">
                {" "}
                <img className="imgg" src={empires} />{" "}
              </div>
              <div className="ttxx">
                <span id="tttx">
                  <p>Creative Destruction</p>
                </span>
                <span id="tttxxx">
                  <p>by NetEase Games </p>
                </span>
              </div>
            </div>
            <hr />
            <div className="carde">
              <div className="nummberrrr">8</div>
              <div className="geg">
                {" "}
                <img className="imgg" src={empires} />{" "}
              </div>
              <div className="ttxx">
                <span id="tttx">
                  <p>Creative Destruction</p>
                </span>
                <span id="tttxxx">
                  <p>by NetEase Games </p>
                </span>
              </div>
            </div>
            <hr />
            <div className="carde">
              <div className="nummberrrr">9</div>
              <div className="geg">
                {" "}
                <img className="imgg" src={empires} />{" "}
              </div>
              <div className="ttxx">
                <span id="tttx">
                  <p>Creative Destruction</p>
                </span>
                <span id="tttxxx">
                  <p>by NetEase Games </p>
                </span>
              </div>
            </div>
            <hr />
            <div className="carde">
              <div className="nummberrrr">10</div>
              <div className="geg">
                {" "}
                <img className="imgg" src={empires} />{" "}
              </div>
              <div className="ttxx">
                <span id="tttx">
                  <p>Creative Destruction</p>
                </span>
                <span id="tttxxx">
                  <p>by NetEase Games </p>
                </span>
              </div>
            </div>
            <hr />
            <div className="eend">
              More <i class="fas fa-angle-double-right" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactusPage;
