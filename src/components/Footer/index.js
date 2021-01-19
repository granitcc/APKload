import React from "react";
import "./footer.scss";
import languages from "../../languages/languages";
import { useContext } from "react";
import { DataLocaleStorage } from "../../localestorage";
import { localecontext } from "../../context/localcontext";
import android from "../images/android.png";

import {
  FooterContainer,
  FooterWrap,
  FooterLinkContainer,
  FooterLinkWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocailIconLink,
  FooterLinks,
  WebsiteRights,
  WebsiteRightsNumber,
} from "./FooterElements";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaAndroid,
  FaPhone,
} from "react-icons/fa";
const Footer = () => {
  const { locale, setLocale } = useContext(localecontext);

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinks>
              <div className="allcon">
                <div className="alllcon">
                  <div className="apklogo">
                    <img src={android} width="50" />
                  </div>
                  <div className="apktext">Apk Load</div>
                </div>
                <div className="appktext">
                  <p className="tet">
                    Android Package is the package file format used b the
                    Android operating system ,and a number of other
                    Android-based operating systems for distributin and
                    instailion of mobile apps, mobile games and middleware.
                  </p>
                </div>
                <div className="sociall">
                  {" "}
                  <br /> <br />
                  <a href="/" id="a">
                    <FaFacebook />
                  </a>
                  <a href="#" id="a">
                    <FaTwitter />
                  </a>
                  <a href="/" id="a">
                    <FaInstagram />
                  </a>
                  <a href="/" id="a">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </FooterLinks>

            <FooterLinkItems>
              <FooterLinkTitle> COMPANY </FooterLinkTitle>
              <FooterLink to="/aboutus">About us </FooterLink>
              <br />
              <FooterLink to="why-apkload">Why ApkLoad </FooterLink>
              <br />
              <FooterLink to="careers">Careers </FooterLink>
              <br />
              <FooterLink to="/blog">Blog </FooterLink>
              <br />
              <br />
              <br />
              <br />
              <FooterLink to="legal-infromation">Legal Information </FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle> OUR PRODUCTS </FooterLinkTitle>

              <FooterLink to="/submitapk">ApkLoad Apps </FooterLink>
              <br />
              <FooterLink to="/install">ApkLoad Games</FooterLink>
              <br />
              <FooterLink to="/payment">AppCoins Wallet</FooterLink>
              <br />
              <FooterLink to="/apkloadappfeatures">
                APKload App Features{" "}
              </FooterLink>
              <br />
              <br />
              <br />
              <br />
              <FooterLink to="cookie-policy">Cookie Policy </FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle> OUR SERVICE </FooterLinkTitle>
              <FooterLink to="co-brand">Co Brand</FooterLink>
              <br />
              <FooterLink to="developers">Developer </FooterLink>
              <br />
              <FooterLink to="appcoins-protocol">AppCoins Protocol </FooterLink>
              <br />
              <FooterLink to="/contactus">Contact Us </FooterLink>
              <br />
              <FooterLink> </FooterLink>

              <br />
              <br />
              <br />

              <FooterLink to="privacy-policy">Privacy Policy</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Apk Load</SocialLogo>
          </SocialMediaWrap>
          <hr
            style={{
              color: "#fff",
              backgroundColor: "#fff",
              height: 1.5,
              borderColor: "#fff",
            }}
          />
          <br />
          <br />
          <WebsiteRights>
            ApkLoad {new Date().getFullYear()} © All rights reserved.
            <WebsiteRightsNumber>
              <FaPhone /> +383(0) 45 111-555
            </WebsiteRightsNumber>{" "}
          </WebsiteRights>
        </SocialMedia>
        <div className="select">
          <select
            value={locale}
            onChange={(event) => {
              setLocale(event.target.value);
              DataLocaleStorage.setLocale(event.target.value);
            }}
          >
            <option value={languages["en-us"].value}>
              {languages["en-us"].label}
            </option>
            <option value={languages["sq-al"].value}>
              {languages["sq-al"].label}
            </option>
          </select>
        </div>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
