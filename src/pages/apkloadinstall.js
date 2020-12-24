import React, { useState } from 'react'
import Sidebar from '../components/Sidebar' 
import Navbar from '../components/Navbar'
import './apkloadinstall.scss'
import android from '../components/images/android.png'


function ApkloadinstallPage() {
    const [isOpen,setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    }
    return (

        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} /> 
        <div className="apkloadinstall">
      <div className="first" >
          <img src={android} className="android" />
          <p className="firsttext">APK Load</p>
          <p className="secondtext" >It takes just one click. It's that simple</p>

      </div>
      <div className="second">
          <div className="second1">
          <svg xmlns="http://www.w3.org/2000/svg" width="36.036" height="36.036" viewBox="0 0 36.036 36.036">
  <g id="Icon_feather-search" data-name="Icon feather-search" transform="translate(-2 -2)">
    <path id="Path_662" data-name="Path 662" d="M31.5,18A13.5,13.5,0,1,1,18,4.5,13.5,13.5,0,0,1,31.5,18Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/>
    <path id="Path_663" data-name="Path 663" d="M31.5,31.5l-6.525-6.525" transform="translate(3 3)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/>
  </g>
</svg>

<p className="pp">Discover top apps and games get recomandations you will love</p>
          </div>
          <div className="second1">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
  <path id="Icon_awesome-coins" data-name="Icon awesome-coins" d="M0,28.5v3C0,33.982,6.047,36,13.5,36S27,33.982,27,31.5v-3c-2.9,2.046-8.212,3-13.5,3S2.9,30.544,0,28.5ZM22.5,9C29.953,9,36,6.982,36,4.5S29.953,0,22.5,0,9,2.018,9,4.5,15.047,9,22.5,9ZM0,21.122V24.75c0,2.482,6.047,4.5,13.5,4.5S27,27.232,27,24.75V21.122c-2.9,2.391-8.22,3.628-13.5,3.628S2.9,23.513,0,21.122Zm29.25.773C33.279,21.115,36,19.666,36,18V15a17.267,17.267,0,0,1-6.75,2.426ZM13.5,11.25C6.047,11.25,0,13.767,0,16.875S6.047,22.5,13.5,22.5,27,19.983,27,16.875,20.953,11.25,13.5,11.25Zm15.42,3.959c4.219-.759,7.08-2.25,7.08-3.959v-3c-2.5,1.765-6.785,2.714-11.3,2.939A7.874,7.874,0,0,1,28.92,15.209Z" fill="#fff"/>
</svg>
<p className="pp">Save on apps,games and in-app items.</p>

          </div>
          <div className="second1">
          <svg xmlns="http://www.w3.org/2000/svg" width="36.429" height="25.5" viewBox="0 0 36.429 25.5">
  <path id="Icon_awesome-cloud-download-alt" data-name="Icon awesome-cloud-download-alt" d="M30.6,13.327a5.471,5.471,0,0,0-5.1-7.434,5.436,5.436,0,0,0-3.034.922,9.108,9.108,0,0,0-17,4.542c0,.154.006.307.011.461A8.2,8.2,0,0,0,8.2,27.75H29.143A7.285,7.285,0,0,0,30.6,13.327Zm-7.565,5.049-6,6a.914.914,0,0,1-1.286,0l-6-6a.91.91,0,0,1,.643-1.554h3.723V10.446a.913.913,0,0,1,.911-.911h2.732a.913.913,0,0,1,.911.911v6.375h3.723S23.61,17.8,23.035,18.375Z" transform="translate(0 -2.25)" fill="#fff"/>
</svg>

<p className="pp">Access all of your apps,get app updates in one place</p>
          </div>
          
      </div>
      <div className="third">
          <div className="qrtext">
        <div className="qrcode">
        <svg id="Group_833" data-name="Group 833" xmlns="http://www.w3.org/2000/svg" width="124" height="124.14" viewBox="0 0 154 154.14">
  <g id="Group_832" data-name="Group 832">
    <path id="Path_649" data-name="Path 649" d="M48.125,0H0V48.125H48.125ZM38.5,38.5H9.625V9.625H38.5Z"/>
    <rect id="Rectangle_3330" data-name="Rectangle 3330" width="10" height="10" transform="translate(19 19.14)"/>
    <path id="Path_650" data-name="Path 650" d="M352,0V48.125h48.125V0Zm38.5,38.5H361.625V9.625H390.5Z" transform="translate(-246.125)"/>
    <rect id="Rectangle_3331" data-name="Rectangle 3331" width="10" height="10" transform="translate(125 19.14)"/>
    <path id="Path_651" data-name="Path 651" d="M0,400.125H48.125V352H0Zm9.625-38.5H38.5V390.5H9.625Z" transform="translate(0 -246.125)"/>
    <rect id="Rectangle_3332" data-name="Rectangle 3332" width="10" height="10" transform="translate(19 125.14)"/>
    <rect id="Rectangle_3333" data-name="Rectangle 3333" width="19" height="10" transform="translate(77 0.14)"/>
    <path id="Path_652" data-name="Path 652" d="M211.25,60.875h9.625V51.25H230.5V41.625H201.625V32H192V51.25h19.25Z" transform="translate(-134.25 -22.375)"/>
    <rect id="Rectangle_3334" data-name="Rectangle 3334" width="9" height="9" transform="translate(58 39.14)"/>
    <path id="Path_653" data-name="Path 653" d="M230.5,160h-9.625v9.625H192v9.625h38.5Z" transform="translate(-134.25 -111.875)"/>
    <path id="Path_654" data-name="Path 654" d="M9.625,220.875H19.25V211.25H9.625V192H0v38.5H9.625Z" transform="translate(0 -134.25)"/>
    <rect id="Rectangle_3335" data-name="Rectangle 3335" width="10" height="9" transform="translate(19 58.14)"/>
    <path id="Path_655" data-name="Path 655" d="M124.875,230.5h19.25v-9.625H134.5V211.25H115.25V192h-9.625v19.25H96V230.5h9.625v-9.625h19.25Z" transform="translate(-67.125 -134.25)"/>
    <rect id="Rectangle_3336" data-name="Rectangle 3336" width="9" height="19" transform="translate(87 77.14)"/>
    <path id="Path_656" data-name="Path 656" d="M220.875,352H192v9.625h19.25V390.5H192v9.625h28.875V390.5h19.25v-9.625h-19.25Z" transform="translate(-134.25 -246.125)"/>
    <rect id="Rectangle_3337" data-name="Rectangle 3337" width="9" height="10" transform="translate(58 125.14)"/>
    <rect id="Rectangle_3338" data-name="Rectangle 3338" width="10" height="19" transform="translate(96 106.14)"/>
    <path id="Path_657" data-name="Path 657" d="M412.875,416H384v28.875h9.625v-19.25h19.25Z" transform="translate(-268.5 -290.875)"/>
    <rect id="Rectangle_3339" data-name="Rectangle 3339" width="19" height="10" transform="translate(135 144.14)"/>
    <rect id="Rectangle_3340" data-name="Rectangle 3340" width="10" height="10" transform="translate(144 106.14)"/>
    <path id="Path_658" data-name="Path 658" d="M361.625,316.875h9.625V288H352v9.625h9.625Z" transform="translate(-246.125 -201.375)"/>
    <path id="Path_659" data-name="Path 659" d="M380.875,201.625H371.25V192h-9.625v9.625H352v9.625h38.5v-9.625h9.625V192h-19.25Z" transform="translate(-246.125 -134.25)"/>
    <rect id="Rectangle_3341" data-name="Rectangle 3341" width="19" height="9" transform="translate(135 87.14)"/>
  </g>
</svg>

        </div>
        <div className="text">
            Scan the QR code and install this app directly in your device

        </div> </div>
        <div className="mid">
        <svg xmlns="http://www.w3.org/2000/svg" width="1" height="26" viewBox="0 0 1 26">
  <line id="Line_52" data-name="Line 52" y2="26" transform="translate(0.5)" fill="none" stroke="#707070" stroke-width="1"/>
</svg>
<p className="ps">
    or
</p>
<svg xmlns="http://www.w3.org/2000/svg" width="1" height="26" viewBox="0 0 1 26">
  <line id="Line_52" data-name="Line 52" y2="26" transform="translate(0.5)" fill="none" stroke="#707070" stroke-width="1"/>
</svg>

        </div>
    <p className="hej">Download the APK to your computer</p>
    <button className="button">Download v3.17.14(14.4MB)</button>
      </div>
         
        </div>
        
        </>
    )
}

export default ApkloadinstallPage
