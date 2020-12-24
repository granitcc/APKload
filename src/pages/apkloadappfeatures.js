import React, { useState } from 'react'
import Sidebar from '../components/Sidebar' 
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import android from '../components/images/android.png'
import Apkinstall1crop from '../components/images/Apkinstall1crop.png'
import Apkinstall1 from '../components/images/Apkinstall1.png'
import Apkinstall2 from '../components/images/Apkinstall2.png'
import Apkinstall3 from '../components/images/Apkinstall3.png'
import g1 from '../components/images/g1.png'
import g2 from '../components/images/g2.png'
import g3 from '../components/images/g3.png'
import g4 from '../components/images/g4.png'
import side from '../components/images/side.png'
import side1 from '../components/images/side1.png'
import ezi from '../components/images/ezi.png'
import ezii from '../components/images/ezii.png'
import endd from '../components/images/endd.png'
import man1 from '../components/images/man1.png'
import man2 from '../components/images/man2.png'
import man3 from '../components/images/man3.png'



import './apkloadappfeatures.scss'
import { FaDivide } from 'react-icons/fa'




function ApkloadappfeaturesPage() {
     
    const [isOpen,setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    }
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} /> 
        <div className="apkloadapp">
            <div className="first">
              <div className="firstcontent">
                <img src={android} className="img" />
                <h3 className="pes">APKload App</h3>
                <p className="pezes">Faster,free and saving data!</p>
                <button className="btn">Download v3.17.14(14.4MB)</button>
                  <ul className="links">
                      <li>What's New?</li>
                      <li id="li">Version History</li>
                      <li>Variants</li>
                  </ul>
                  </div>
                  <div className="firsttwo">
                      <img src={Apkinstall2}  className="apkinstall2"/>
                      <img src={Apkinstall1} className="apkinstall1" />
                      <img src={Apkinstall3} className="apkinstall3" />
                  </div>
                  
            </div>
            <div className="second">
                <div className="secondfirst">
                <h2 className="hee">Apkload Features</h2>
                <p className="he"> With APKload, you can instantly download and update refion locked (not available in your contry),</p>
                <p className="he">pre-registred games and many other Apps on Android.</p>
            </div>
            
            <div className="secondicon">
               <div className="secondiconcontent">
                   <img src={g1} className="g1"/>
                   <h3 className="gg1">No region locking</h3>
         <p className="ggg1">Apkload offers a selection of the best Android
                       games and apps which you can not even find the in Playstore
                       search result.No region lock worries.Download and play now for free
                   </p>
               </div>

               <div className="secondiconcontent">
                   <img src={g2} className="g1"/>
                   <h3 className="gg1">Safe Downloading</h3>
                  <p className="ggg1">All Apps in the APKload are safe for your Android phone 
                       to download.They have to pass a signature verification check before
                       they are listed in APKload. 
                   </p>
               </div>

               <div className="secondiconcontent">
                   <img src={g3} className="g1"/>
                   <h3 className="gg1">Pause & Resume</h3>
              <p className="ggg1">You can easily pause and resume apk.download progress.You can
                       restart the download progress after pausing it.
                   </p>
               </div>
               <div className="secondiconcontent">
                   <img src={g4} className="g1"/>
                   <h3 className="gg1">Multi language </h3>
                     <p className="ggg1">
                       You can easily pause and resume apk.download progress.You can
                       restart the download progress after pausing it.
                   </p>
               </div>
            </div>

            
            </div>
            <div className="third">
                <div className="thirdcontent">
                    <img src={Apkinstall1crop} className="apkinstall1crop" />
                    <div className="rigt" >
                        <h3 className="eko">Best Games</h3>
                        <h3 className="redi">Recomandition every day</h3>
                        <p className="texttx">Get the best games with our editors and users
                      recomandations every day. You'll never miss any fresh out
                        and trending Android games.</p>
                        <button className="button">Download v3.17.14(14.4MB)</button>
                    </div>
                </div>
                
                 </div>
                   
                 <div className="fourth">
                <div className="thirdcontentt">
                    <div className="side">
                    <img src={side} className="side" />
                    <img src={side1} className="side1" />
                    </div>

                    <div className="rigti" >
                        <h3 className="redii">Join our Community</h3>
                        <p className="textttx">Share geeky,fun things in our community fun with hashtags,
                        stories and more new features in APKload App version 3.0.
                        Find Andorid geeks like you and connect with them.</p>
                        <button className="buttton">Download v3.17.14(14.4MB)</button>
                    </div>
                </div>
                
                 </div>

                 <div className="fifth">
                     <div className="fifthcontent">
                         <div className="fifthimg">
                         <img src={ezii} className="ez" />
                    <img src={ezi} className="ez1" />
                         </div>
                         <div className="goright" >
                        <h3 classname="ekoo" >One-clik Install Free</h3>
                        <h3 className="rei">APK of Games and Apps</h3>
                        <p className="textttx">Install any free Android game APK files with a single click.
                        We make them stay up to date all the time.As soon as APKload is installed,you have nothing to worry.</p>
                        <button className="button">Download v3.17.14(14.4MB)</button>
                    </div>
                     </div>
                 </div>
        
                 <div className="six">
                     <div className="sixcontent">
                         <div className="siximg">
                             <img src={endd}  className="endd"/>
                             </div>
                             <div className="sixtext">
                             <h3 classname="sixone" >Never Costs Too Much</h3>
                        <h3 classname="sixonee" >Battery Life</h3>
                        <p className="sixwto">Get the best games with our editors and users
                      recomandations every day. You'll never miss any fresh out
                        and trending Android games.</p>
                        <button className="button">Download v3.17.14(14.4MB)</button>
                             </div>
                     </div>
                 </div>
                 <div className="rewivs">
                     <div className="rewivs1">
                      <p className="graybold">Check out User Reviews </p> 
                      <span className="star">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14.168" height="12.854" viewBox="0 0 14.168 12.854">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M7.765.446,6.036,3.77,2.167,4.3A.793.793,0,0,0,1.7,5.675L4.5,8.26l-.662,3.652a.838.838,0,0,0,1.229.846l3.461-1.724,3.461,1.724a.839.839,0,0,0,1.229-.846L12.553,8.26l2.8-2.585A.793.793,0,0,0,14.883,4.3L11.014,3.77,9.285.446A.869.869,0,0,0,7.765.446Z" transform="translate(-1.441 0.001)" fill="#3cc77d"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="14.168" height="12.854" viewBox="0 0 14.168 12.854">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M7.765.446,6.036,3.77,2.167,4.3A.793.793,0,0,0,1.7,5.675L4.5,8.26l-.662,3.652a.838.838,0,0,0,1.229.846l3.461-1.724,3.461,1.724a.839.839,0,0,0,1.229-.846L12.553,8.26l2.8-2.585A.793.793,0,0,0,14.883,4.3L11.014,3.77,9.285.446A.869.869,0,0,0,7.765.446Z" transform="translate(-1.441 0.001)" fill="#3cc77d"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="14.168" height="12.854" viewBox="0 0 14.168 12.854">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M7.765.446,6.036,3.77,2.167,4.3A.793.793,0,0,0,1.7,5.675L4.5,8.26l-.662,3.652a.838.838,0,0,0,1.229.846l3.461-1.724,3.461,1.724a.839.839,0,0,0,1.229-.846L12.553,8.26l2.8-2.585A.793.793,0,0,0,14.883,4.3L11.014,3.77,9.285.446A.869.869,0,0,0,7.765.446Z" transform="translate(-1.441 0.001)" fill="#3cc77d"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="14.168" height="12.854" viewBox="0 0 14.168 12.854">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M7.765.446,6.036,3.77,2.167,4.3A.793.793,0,0,0,1.7,5.675L4.5,8.26l-.662,3.652a.838.838,0,0,0,1.229.846l3.461-1.724,3.461,1.724a.839.839,0,0,0,1.229-.846L12.553,8.26l2.8-2.585A.793.793,0,0,0,14.883,4.3L11.014,3.77,9.285.446A.869.869,0,0,0,7.765.446Z" transform="translate(-1.441 0.001)" fill="#3cc77d"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="14.168" height="12.854" viewBox="0 0 14.168 12.854">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M7.765.446,6.036,3.77,2.167,4.3A.793.793,0,0,0,1.7,5.675L4.5,8.26l-.662,3.652a.838.838,0,0,0,1.229.846l3.461-1.724,3.461,1.724a.839.839,0,0,0,1.229-.846L12.553,8.26l2.8-2.585A.793.793,0,0,0,14.883,4.3L11.014,3.77,9.285.446A.869.869,0,0,0,7.765.446Z" transform="translate(-1.441 0.001)" fill="#3cc77d"/>
</svg>
</span>
                     </div>


                     <div className="all-rewi"> <div className="rewivs2">
                     <div className="reww">
                            
<img src={man1} />
<span className="rewwtext">
    <p id="name">Josh Hamilton</p>
    <p id="date">29 Agust 2018</p>
</span></div>
<span className="star">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14.168" height="12.854" viewBox="0 0 14.168 12.854">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M7.765.446,6.036,3.77,2.167,4.3A.793.793,0,0,0,1.7,5.675L4.5,8.26l-.662,3.652a.838.838,0,0,0,1.229.846l3.461-1.724,3.461,1.724a.839.839,0,0,0,1.229-.846L12.553,8.26l2.8-2.585A.793.793,0,0,0,14.883,4.3L11.014,3.77,9.285.446A.869.869,0,0,0,7.765.446Z" transform="translate(-1.441 0.001)" fill="#3cc77d"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="14.168" height="12.854" viewBox="0 0 14.168 12.854">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M7.765.446,6.036,3.77,2.167,4.3A.793.793,0,0,0,1.7,5.675L4.5,8.26l-.662,3.652a.838.838,0,0,0,1.229.846l3.461-1.724,3.461,1.724a.839.839,0,0,0,1.229-.846L12.553,8.26l2.8-2.585A.793.793,0,0,0,14.883,4.3L11.014,3.77,9.285.446A.869.869,0,0,0,7.765.446Z" transform="translate(-1.441 0.001)" fill="#3cc77d"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="14.168" height="12.854" viewBox="0 0 14.168 12.854">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M7.765.446,6.036,3.77,2.167,4.3A.793.793,0,0,0,1.7,5.675L4.5,8.26l-.662,3.652a.838.838,0,0,0,1.229.846l3.461-1.724,3.461,1.724a.839.839,0,0,0,1.229-.846L12.553,8.26l2.8-2.585A.793.793,0,0,0,14.883,4.3L11.014,3.77,9.285.446A.869.869,0,0,0,7.765.446Z" transform="translate(-1.441 0.001)" fill="#3cc77d"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="14.168" height="12.854" viewBox="0 0 14.168 12.854">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M7.765.446,6.036,3.77,2.167,4.3A.793.793,0,0,0,1.7,5.675L4.5,8.26l-.662,3.652a.838.838,0,0,0,1.229.846l3.461-1.724,3.461,1.724a.839.839,0,0,0,1.229-.846L12.553,8.26l2.8-2.585A.793.793,0,0,0,14.883,4.3L11.014,3.77,9.285.446A.869.869,0,0,0,7.765.446Z" transform="translate(-1.441 0.001)" fill="#3cc77d"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="14.168" height="12.854" viewBox="0 0 14.168 12.854">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M7.765.446,6.036,3.77,2.167,4.3A.793.793,0,0,0,1.7,5.675L4.5,8.26l-.662,3.652a.838.838,0,0,0,1.229.846l3.461-1.724,3.461,1.724a.839.839,0,0,0,1.229-.846L12.553,8.26l2.8-2.585A.793.793,0,0,0,14.883,4.3L11.014,3.77,9.285.446A.869.869,0,0,0,7.765.446Z" transform="translate(-1.441 0.001)" fill="#3cc77d"/>
</svg>
</span>

                         </div>
<p id="there">There is something so great about this app because it has many updates and the games always
    do update on the latest version with the update button.
</p>
<span id="theeree">
<svg xmlns="http://www.w3.org/2000/svg" width="137.534" height="16.048" viewBox="0 0 137.534 16.048">
  <g id="Group_591" data-name="Group 591" transform="translate(-495.832 -3666.124)">
    <text id="_3" data-name="3" transform="translate(517.63 3678.124)" fill="#b2b2b2" font-size="11" font-family="OpenSans-Light, Open Sans" font-weight="300"><tspan x="0" y="0">3</tspan></text>
    <text id="_9" data-name="9" transform="translate(562.498 3678.124)" fill="#b2b2b2" font-size="11" font-family="OpenSans-Light, Open Sans" font-weight="300"><tspan x="0" y="0">9</tspan></text>
    <text id="Reply" transform="translate(608.365 3677.124)" fill="#b2b2b2" font-size="10" font-family="OpenSans-Light, Open Sans" font-weight="300"><tspan x="0" y="0">Reply</tspan></text>
    <path id="Icon_material-favorite" data-name="Icon material-favorite" d="M11.15,19.456,9.969,18.38C5.771,14.574,3,12.064,3,8.983A4.439,4.439,0,0,1,7.483,4.5,4.881,4.881,0,0,1,11.15,6.2a4.881,4.881,0,0,1,3.668-1.7A4.439,4.439,0,0,1,19.3,8.983c0,3.081-2.771,5.591-6.969,9.406Z" transform="translate(492.832 3662.312)" fill="#b2b2b2"/>
    <path id="Icon_ionic-ios-text" data-name="Icon ionic-ios-text" d="M11.7,4.5c-4.6,0-8.32,3.008-8.32,6.72,0,2.6,1.824,4.848,4.492,5.968a5.228,5.228,0,0,1-1.34,2.42.159.159,0,0,0,.144.252,6.436,6.436,0,0,0,2.04-.508,6.312,6.312,0,0,0,1.852-1.476,10.648,10.648,0,0,0,1.14.064c4.6,0,8.32-3.008,8.32-6.72S16.291,4.5,11.7,4.5Z" transform="translate(536.804 3662.312)" fill="#b2b2b2"/>
    <path id="Icon_material-reply" data-name="Icon material-reply" d="M11.668,11.6V7.5L4.5,14.668l7.168,7.168v-4.2c5.12,0,8.7,1.638,11.264,5.222C21.908,17.74,18.836,12.62,11.668,11.6Z" transform="translate(579.94 3659.312)" fill="#b2b2b2"/>
  </g>
</svg></span>

                         </div>
                        

                         <div className="all-rewii"> <div className="rewivs2">
                     <div className="reww">
                            
<img src={man2} />
<span className="rewwtext">
    <p id="theree"><span id="name">Mian Kamushi</span></p>
    <p id="theree"><span id="date">29 Agust 2018</span></p>
</span></div>
<span className="star">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14.168" height="12.854" viewBox="0 0 14.168 12.854">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M7.765.446,6.036,3.77,2.167,4.3A.793.793,0,0,0,1.7,5.675L4.5,8.26l-.662,3.652a.838.838,0,0,0,1.229.846l3.461-1.724,3.461,1.724a.839.839,0,0,0,1.229-.846L12.553,8.26l2.8-2.585A.793.793,0,0,0,14.883,4.3L11.014,3.77,9.285.446A.869.869,0,0,0,7.765.446Z" transform="translate(-1.441 0.001)" fill="#3cc77d"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="14.168" height="12.854" viewBox="0 0 14.168 12.854">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M7.765.446,6.036,3.77,2.167,4.3A.793.793,0,0,0,1.7,5.675L4.5,8.26l-.662,3.652a.838.838,0,0,0,1.229.846l3.461-1.724,3.461,1.724a.839.839,0,0,0,1.229-.846L12.553,8.26l2.8-2.585A.793.793,0,0,0,14.883,4.3L11.014,3.77,9.285.446A.869.869,0,0,0,7.765.446Z" transform="translate(-1.441 0.001)" fill="#3cc77d"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="14.168" height="12.854" viewBox="0 0 14.168 12.854">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M7.765.446,6.036,3.77,2.167,4.3A.793.793,0,0,0,1.7,5.675L4.5,8.26l-.662,3.652a.838.838,0,0,0,1.229.846l3.461-1.724,3.461,1.724a.839.839,0,0,0,1.229-.846L12.553,8.26l2.8-2.585A.793.793,0,0,0,14.883,4.3L11.014,3.77,9.285.446A.869.869,0,0,0,7.765.446Z" transform="translate(-1.441 0.001)" fill="#3cc77d"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="14.168" height="12.854" viewBox="0 0 14.168 12.854">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M7.765.446,6.036,3.77,2.167,4.3A.793.793,0,0,0,1.7,5.675L4.5,8.26l-.662,3.652a.838.838,0,0,0,1.229.846l3.461-1.724,3.461,1.724a.839.839,0,0,0,1.229-.846L12.553,8.26l2.8-2.585A.793.793,0,0,0,14.883,4.3L11.014,3.77,9.285.446A.869.869,0,0,0,7.765.446Z" transform="translate(-1.441 0.001)" fill="#3cc77d"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="14.168" height="12.854" viewBox="0 0 14.168 12.854">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M7.765.446,6.036,3.77,2.167,4.3A.793.793,0,0,0,1.7,5.675L4.5,8.26l-.662,3.652a.838.838,0,0,0,1.229.846l3.461-1.724,3.461,1.724a.839.839,0,0,0,1.229-.846L12.553,8.26l2.8-2.585A.793.793,0,0,0,14.883,4.3L11.014,3.77,9.285.446A.869.869,0,0,0,7.765.446Z" transform="translate(-1.441 0.001)" fill="#3cc77d"/>
</svg>
</span>

                         </div>
<p id="there">There is something so grat about this app because it has many updates and the games always
    do update on the latest version with the update button.
</p>
<span id="theeree">
<svg xmlns="http://www.w3.org/2000/svg" width="137.534" height="16.048" viewBox="0 0 137.534 16.048">
  <g id="Group_593" data-name="Group 593" transform="translate(-495.832 -3666.124)">
    <text id="_3" data-name="3" transform="translate(517.63 3678.124)" fill="#b2b2b2" font-size="11" font-family="OpenSans-Light, Open Sans" font-weight="300"><tspan x="0" y="0">3</tspan></text>
    <text id="_9" data-name="9" transform="translate(562.498 3678.124)" fill="#b2b2b2" font-size="11" font-family="OpenSans-Light, Open Sans" font-weight="300"><tspan x="0" y="0">9</tspan></text>
    <text id="Reply" transform="translate(608.365 3677.124)" fill="#b2b2b2" font-size="10" font-family="OpenSans-Light, Open Sans" font-weight="300"><tspan x="0" y="0">Reply</tspan></text>
    <path id="Icon_material-favorite" data-name="Icon material-favorite" d="M11.15,19.456,9.969,18.38C5.771,14.574,3,12.064,3,8.983A4.439,4.439,0,0,1,7.483,4.5,4.881,4.881,0,0,1,11.15,6.2a4.881,4.881,0,0,1,3.668-1.7A4.439,4.439,0,0,1,19.3,8.983c0,3.081-2.771,5.591-6.969,9.406Z" transform="translate(492.832 3662.312)" fill="#b2b2b2"/>
    <path id="Icon_ionic-ios-text" data-name="Icon ionic-ios-text" d="M11.7,4.5c-4.6,0-8.32,3.008-8.32,6.72,0,2.6,1.824,4.848,4.492,5.968a5.228,5.228,0,0,1-1.34,2.42.159.159,0,0,0,.144.252,6.436,6.436,0,0,0,2.04-.508,6.312,6.312,0,0,0,1.852-1.476,10.648,10.648,0,0,0,1.14.064c4.6,0,8.32-3.008,8.32-6.72S16.291,4.5,11.7,4.5Z" transform="translate(536.804 3662.312)" fill="#b2b2b2"/>
    <path id="Icon_material-reply" data-name="Icon material-reply" d="M11.668,11.6V7.5L4.5,14.668l7.168,7.168v-4.2c5.12,0,8.7,1.638,11.264,5.222C21.908,17.74,18.836,12.62,11.668,11.6Z" transform="translate(579.94 3659.312)" fill="#b2b2b2"/>
  </g>
</svg>
</span>

                         </div>

                         <div className="all-rewii"> <div className="rewivs2">
                     <div className="reww">
                            
<img src={man3} />
<span className="rewwtext">
    <p id="theree"><span id="name">Patu Babua</span></p>
    <p id="theree"><span id="date">29 Agust 2018</span></p>
</span></div>
<span className="star">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14.168" height="12.854" viewBox="0 0 14.168 12.854">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M7.765.446,6.036,3.77,2.167,4.3A.793.793,0,0,0,1.7,5.675L4.5,8.26l-.662,3.652a.838.838,0,0,0,1.229.846l3.461-1.724,3.461,1.724a.839.839,0,0,0,1.229-.846L12.553,8.26l2.8-2.585A.793.793,0,0,0,14.883,4.3L11.014,3.77,9.285.446A.869.869,0,0,0,7.765.446Z" transform="translate(-1.441 0.001)" fill="#3cc77d"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="14.168" height="12.854" viewBox="0 0 14.168 12.854">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M7.765.446,6.036,3.77,2.167,4.3A.793.793,0,0,0,1.7,5.675L4.5,8.26l-.662,3.652a.838.838,0,0,0,1.229.846l3.461-1.724,3.461,1.724a.839.839,0,0,0,1.229-.846L12.553,8.26l2.8-2.585A.793.793,0,0,0,14.883,4.3L11.014,3.77,9.285.446A.869.869,0,0,0,7.765.446Z" transform="translate(-1.441 0.001)" fill="#3cc77d"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="14.168" height="12.854" viewBox="0 0 14.168 12.854">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M7.765.446,6.036,3.77,2.167,4.3A.793.793,0,0,0,1.7,5.675L4.5,8.26l-.662,3.652a.838.838,0,0,0,1.229.846l3.461-1.724,3.461,1.724a.839.839,0,0,0,1.229-.846L12.553,8.26l2.8-2.585A.793.793,0,0,0,14.883,4.3L11.014,3.77,9.285.446A.869.869,0,0,0,7.765.446Z" transform="translate(-1.441 0.001)" fill="#3cc77d"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="14.168" height="12.854" viewBox="0 0 14.168 12.854">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M7.765.446,6.036,3.77,2.167,4.3A.793.793,0,0,0,1.7,5.675L4.5,8.26l-.662,3.652a.838.838,0,0,0,1.229.846l3.461-1.724,3.461,1.724a.839.839,0,0,0,1.229-.846L12.553,8.26l2.8-2.585A.793.793,0,0,0,14.883,4.3L11.014,3.77,9.285.446A.869.869,0,0,0,7.765.446Z" transform="translate(-1.441 0.001)" fill="#3cc77d"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="14.168" height="12.854" viewBox="0 0 14.168 12.854">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M7.765.446,6.036,3.77,2.167,4.3A.793.793,0,0,0,1.7,5.675L4.5,8.26l-.662,3.652a.838.838,0,0,0,1.229.846l3.461-1.724,3.461,1.724a.839.839,0,0,0,1.229-.846L12.553,8.26l2.8-2.585A.793.793,0,0,0,14.883,4.3L11.014,3.77,9.285.446A.869.869,0,0,0,7.765.446Z" transform="translate(-1.441 0.001)" fill="#909e96"/>
</svg>

</span>

                         </div>
<p id="there">There is something so grat about this app because it has many updates and the games always
    do update on the latest version with the update button.
</p>
<span id="theeree">
<svg xmlns="http://www.w3.org/2000/svg" width="137.534" height="16.048" viewBox="0 0 137.534 16.048">
  <g id="Group_593" data-name="Group 593" transform="translate(-495.832 -3666.124)">
    <text id="_3" data-name="3" transform="translate(517.63 3678.124)" fill="#b2b2b2" font-size="11" font-family="OpenSans-Light, Open Sans" font-weight="300"><tspan x="0" y="0">3</tspan></text>
    <text id="_9" data-name="9" transform="translate(562.498 3678.124)" fill="#b2b2b2" font-size="11" font-family="OpenSans-Light, Open Sans" font-weight="300"><tspan x="0" y="0">9</tspan></text>
    <text id="Reply" transform="translate(608.365 3677.124)" fill="#b2b2b2" font-size="10" font-family="OpenSans-Light, Open Sans" font-weight="300"><tspan x="0" y="0">Reply</tspan></text>
    <path id="Icon_material-favorite" data-name="Icon material-favorite" d="M11.15,19.456,9.969,18.38C5.771,14.574,3,12.064,3,8.983A4.439,4.439,0,0,1,7.483,4.5,4.881,4.881,0,0,1,11.15,6.2a4.881,4.881,0,0,1,3.668-1.7A4.439,4.439,0,0,1,19.3,8.983c0,3.081-2.771,5.591-6.969,9.406Z" transform="translate(492.832 3662.312)" fill="#b2b2b2"/>
    <path id="Icon_ionic-ios-text" data-name="Icon ionic-ios-text" d="M11.7,4.5c-4.6,0-8.32,3.008-8.32,6.72,0,2.6,1.824,4.848,4.492,5.968a5.228,5.228,0,0,1-1.34,2.42.159.159,0,0,0,.144.252,6.436,6.436,0,0,0,2.04-.508,6.312,6.312,0,0,0,1.852-1.476,10.648,10.648,0,0,0,1.14.064c4.6,0,8.32-3.008,8.32-6.72S16.291,4.5,11.7,4.5Z" transform="translate(536.804 3662.312)" fill="#b2b2b2"/>
    <path id="Icon_material-reply" data-name="Icon material-reply" d="M11.668,11.6V7.5L4.5,14.668l7.168,7.168v-4.2c5.12,0,8.7,1.638,11.264,5.222C21.908,17.74,18.836,12.62,11.668,11.6Z" transform="translate(579.94 3659.312)" fill="#b2b2b2"/>
  </g>
</svg>
</span>
<div class="endcomments">
<p id="space">@Patu Babua</p>
<p>That good to hear!We are glad that you are happy</p></div>
                         </div>

                        
                 </div>
        </div>


        <Footer />
        </>
    )
}

export default ApkloadappfeaturesPage
