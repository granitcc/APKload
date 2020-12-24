import React, { useState } from 'react'
import Sidebar from '../components/Sidebar' 
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './install.scss'
import android from '../components/images/android.png'
import install1 from '../components/images/install1.jpg'
import install2 from '../components/images/install2.jpg'
import install3 from '../components/images/install3.jpg'
import install4 from '../components/images/install4.jpg'
import install5 from '../components/images/install5.jpg'
import install6 from '../components/images/install6.jpg'
import {FormattedMessage} from 'react-intl'


function InstallPage() {
    const [isOpen,setIsOpen] = useState(false);

const toggle = () =>{
    setIsOpen(!isOpen);
}
    return (
        <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
         <Navbar toggle={toggle} />  
         
           <div className="install">
               <div className="first">
           <img src={android} className="android"/>
           <p className="txt">APK Load install</p>
           <p className="txxt"><FormattedMessage id="Install.first.paragraph"/> </p>
            <p className="txxt">With this APK installion tool you can easily install Apk games and apps from PC to Android phone ore tablet</p>
            <p className="txxt">it takes jus one clock.It's tha simple</p>  
          <a href="/apkloadinstall">  <p className="hi">How to install?</p></a>
            <div className="downloads">
                <button className="windows">
             DOWNLOAD NOW 1.4 FOR WINDOWS
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
  <path id="Icon_simple-windows" data-name="Icon simple-windows" d="M0,5.174,14.625,3.15V17.326H0m16.424-14.4L36,0V17.1H16.424M0,18.9H14.625V33.076L0,31.049M16.424,18.9H36V36L16.65,33.3" fill="#fdfdfd"/>
</svg>

                </button>
                <button className="Android">
DOWNLOAD NOW FOR ANDROID
<svg xmlns="http://www.w3.org/2000/svg" width="31.25" height="34.095" viewBox="0 0 31.25 34.095">
  <g id="Icon_ionic-logo-android" data-name="Icon ionic-logo-android" transform="translate(-5.625 -4.497)">
    <g id="Group_576" data-name="Group 576" transform="translate(5.625 14.444)">
      <path id="Path_377" data-name="Path 377" d="M10.125,20.283v7.955a1.154,1.154,0,0,0,1.012,1.243h2.539V34.1a2.131,2.131,0,0,0,4.261,0V29.48h4.35V34.1a2.121,2.121,0,0,0,.781,1.651,1.983,1.983,0,0,0,1.305.479h.044A2.126,2.126,0,0,0,26.549,34.1V29.48H29a1.144,1.144,0,0,0,1.012-1.234V13.5H10.125Z" transform="translate(-4.443 -12.08)" fill="#fff"/>
      <path id="Path_378" data-name="Path 378" d="M29.131,12.375A2.126,2.126,0,0,0,27,14.506v8.523a2.131,2.131,0,1,0,4.261,0V14.506A2.126,2.126,0,0,0,29.131,12.375Z" transform="translate(-0.011 -12.375)" fill="#fff"/>
      <path id="Path_379" data-name="Path 379" d="M7.756,12.375a2.126,2.126,0,0,0-2.131,2.131v8.523a2.131,2.131,0,1,0,4.261,0V14.506A2.126,2.126,0,0,0,7.756,12.375Z" transform="translate(-5.625 -12.375)" fill="#fff"/>
    </g>
    <path id="Path_380" data-name="Path 380" d="M24.969,6.729l1.642-1.944c.036-.044-.018-.142-.115-.222s-.213-.089-.24-.036l-1.7,2.024a12.06,12.06,0,0,0-4.492-.781,12.163,12.163,0,0,0-4.51.755L13.863,4.536c-.036-.044-.142-.036-.24.036s-.151.16-.115.222l1.625,1.918c-4.279,1.855-4.918,6.41-5.007,7.741H29.976C29.9,13.112,29.266,8.62,24.969,6.729ZM15.7,11.15A1.181,1.181,0,1,1,16.9,9.97,1.2,1.2,0,0,1,15.7,11.15Zm8.736,0a1.181,1.181,0,1,1,1.2-1.181A1.2,1.2,0,0,1,24.436,11.15Z" transform="translate(1.182 0)" fill="#fff"/>
  </g>
</svg>
                </button>
            </div>
               </div>
           
                       <div className="parent">

                         <div className="parentone">
                          <div className="one">
                             <img src={install1} className="imgg" /> 
                             <div className="pi">One click install apk package and OBB asset files to Android.</div>
                          </div>
                          <div className="two">
                          <img src={install2} className="imgg" /> 
                          <div className="pi">Support all Android brand cellphone apk instailling.</div>

                          </div>
                         </div>
                         <div className="parenttwo">
                             <div className="one">
                             <img src={install3} className="imgg" /> 
                             <div className="pi">APK installer works perfectly with Windows 8.1,Windows 8,Windows 7,Windows XP.</div>
                             </div>
                             <div className="two">
                             <img src={install4} className="imgg" /> 
                             <div className="pi">Android 2.3 and above support, the Andorid 5.1.1 Lollipop has been already tested</div>

                             </div>

                         </div>
                         <div className="parentthree">
                             <div className="one">
                             <img src={install5} className="imgg" /> 
                             <div className="pi">Istall better apps on Android devices.</div>

                             </div>
                             <div className="two">
                             <img src={install6} className="imgg" /> 
                             <div className="pi">100% APKload verifed safe.</div>

                             </div>

                         </div>

                       </div>

               
               <h2 id="h2">Frequently asked questions</h2>
               <div className="questions">
                   <div className="firstquest">
                       <h2>Why APK Load install?</h2>
                   </div>
                   <div className="firstanswer">
                       <p>APK Load is a downloadable APK,XAPK file installing application,that you can install on your Windows PC</p>
                       <p>We are working to support more Amazon Kindle and Blackberry 10 devices.</p>
                   </div>
                   <div className="firstquest">
                       <h2>What is XAPK file?</h2>
                   </div>
                   <div className="firstanswer">
                       <p>XAPK is a brand new file format standaard for Android APK file.Contains all APK package and obb cache asset file to keep</p>
                       <p>Android games or apps working. It always end in ".xapk". <a href="/">Learn More</a></p>
                   </div>
                   <div className="firstquest">
                       <h2>How to fix device connencted problem?</h2>
                   </div>
                   <div className="firstanswer">
                       <p>If the Android device can't be connencted, please follow the steps below to resolve the issues.</p>
                       <p>Unplug your phone from computer, change another USB cable or USB port,redownload USB Driver and enable</p>
                       <p>USB Debugging on the device</p>
                   </div>
                   <div className="firstquest">
                       <h2>How does Pure APK install work?</h2>
                   </div>
                   <div className="firstanswer">
                       <p>APK install just andweed everything you want to know about apk installion.Download and Install the softwawre,</p>
                       <p>drag abd drop Android.apk select button to countinue.Done!</p>
                   </div>
                   <div className="firstquest">
                       <h2>Where to download.apk or .xapk file?</h2>
                   </div>
                   <div className="firstanswer">
                       <p>APKLoad.com is the right place to download the latest Android apps and games APK and XAPK, icluding favorites like</p>
                        <p>Minecraft -Pocket Edition, Facebook,Edition,BBM and Clash of Clans.</p> 
                   </div>
                   <div className="firstquest">
                       <h2>How Can I report a bug</h2>
                   </div>
                   <div className="firstanswer">
                       <p>Please submit bugs to us by clocking on the "Submit Feedback" button on the top-right of the Pure APK install windwos.</p>
                   </div>
               </div></div>
           
      

          <Footer />
        </>
    )
}

export default InstallPage
