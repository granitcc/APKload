import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaAndroid } from "react-icons/fa";
import android from "../components/images/android.png";
import roboone from "../components/images/roboone.jpg";
import robotwo from "../components/images/robotwo.jpg";
import mapp from "../components/images/mapp.png";

// import "./aboutus.scss";

function AboutusPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {" "}
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="about-us">
        <div className="first">
          {/* <FaAndroid id="logo"/> */}
          <img src={android} />
          <p id="s">The Game changing alternative Android App Store</p>
          <p id="ss">
            With over 300 milion users worldwide, over 7 bilion downloads and 1
            millions apps, Aptoide gives a ne meaning to the way we discover and
            install apps.
          </p>
          <p id="ss">
            {" "}
            With unrestricted content and the opporunity to create and share
            your own store,Aptiode is revoltunionizing app distrubuttion and
            dicovery.
          </p>
          <button className="button"> Download v3.17.14 (14.4 MB)</button>
        </div>
        <div className="second">
          <div className="data1">
            <p id="uss">About us</p>
            <p>
              Apkload is the game-changing Android App Store.With over 300
              million users,7 Billion downloads and 1 million apps,Apkload
              provides an alternative way to dicover apps and games, with no
              geo-restrictions and one of the best malware detection systems in
              the market. Apkload not only focuses on end-users but also offers
              the opportunity to have theri own app store based on Api or
              co-brand solutions. Our goal? Taking app discovery to next level.
            </p>
          </div>
          <div className="data2">
            <img className="img" src={roboone} />
          </div>
        </div>
        <div className="third">
          <div className="data2">
            <img className="immg" src={robotwo} />
          </div>
          <div className="data11">
            <p id="uss">Our Story</p>
            <p>
              Apkload was founded in 2020 in The City (Country) as the open
              source solution for an already monoplized market : app
              distribution.Our goal is to create a friendly ecosystem for both
              end-users on which all parts have a relevant role.As a user
              genrated content platform,in Apkload everyone can have theri own
              app store while app developers can find an alternative distrubtion
              chanel for ther creations.
            </p>
          </div>
        </div>
        <div className="end">
          <img className="image" src={mapp} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutusPage;
