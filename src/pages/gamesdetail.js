import React, { useState } from 'react'
import Sidebar from '../components/Sidebar' 
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './gamesdetail.scss'
import gamedetail1 from '../components/images/gamedetail1.png'
import gamedetail2 from '../components/images/gamedetail2.png'
import gamedetail3 from '../components/images/gamedetail3.png'
import gamedetail4 from '../components/images/gamedetail4.png'
import gamedetail5 from '../components/images/gamedetail5.png'
import review1 from '../components/images/review1.png'
import review2 from '../components/images/review2.png'
import review3 from '../components/images/review3.png'
import review4 from '../components/images/review4.png'
import empires from "../components/images/empires.jpg"
import { FaAndroid ,FaStar  } from 'react-icons/fa';
import adnroidblue from '../components/images/adnroidblue.png'


function GamesDetailPage() {
    const [isOpen,setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    }
    const [readMore,setReadMore]=useState(false);
  const extraContent=<div>
      <p className="extra-content">
      <div className="review-1">
                            <img src={review4}  width="60px" height="60px"/>
                            <span className="review-name">
                                <p>Renee Hinson</p>
                                <div className="review-star">
                           <span className="stari">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#707070"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#707070"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#707070"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#707070"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#707070"/>
</svg>
<p id="date-rew">Agust 24,2020</p>
</span>   
                                   
                                
                                <div className="rew-social">
                               <span className="rew-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="43" viewBox="0 0 24 43">
  <g id="Group_817" data-name="Group 817" transform="translate(-812 -2731)">
    <text id="_15" data-name="15" transform="translate(816 2770)" fill="#707070" font-size="12" font-family="OpenSans-Light, Open Sans" letter-spacing="0.02em" font-weight="300"><tspan x="0" y="0">15</tspan></text>
    <g id="baseline-thumb_up-24px" transform="translate(812 2731)">
      <path id="Path_522" data-name="Path 522" d="M0,0H24V24H0Z" fill="none"/>
      <path id="Path_523" data-name="Path 523" d="M1,21H5V9H1ZM23,10a2.006,2.006,0,0,0-2-2H14.69l.95-4.57.03-.32a1.505,1.505,0,0,0-.44-1.06L14.17,1,7.59,7.59A1.955,1.955,0,0,0,7,9V19a2.006,2.006,0,0,0,2,2h9a1.987,1.987,0,0,0,1.84-1.22l3.02-7.05A1.976,1.976,0,0,0,23,12Z" fill="#707070"/>
    </g>
  </g>
</svg></span>

<span className="rew-2">
<svg xmlns="http://www.w3.org/2000/svg" width="2.301" height="15.75" viewBox="0 0 2.301 15.75">
  <g id="Icon_ionic-ios-menu" data-name="Icon ionic-ios-menu" transform="translate(-4.5 -10.125)">
    <path id="Path_646" data-name="Path 646" d="M6.7,12.375H4.6a3.4,3.4,0,0,1-.1-1.125h0a3.4,3.4,0,0,1,.1-1.125H6.7a3.4,3.4,0,0,1,.1,1.125h0A3.4,3.4,0,0,1,6.7,12.375Z" fill="#707070"/>
    <path id="Path_647" data-name="Path 647" d="M6.7,19.125H4.6A3.4,3.4,0,0,1,4.5,18h0a3.4,3.4,0,0,1,.1-1.125H6.7A3.4,3.4,0,0,1,6.8,18h0A3.4,3.4,0,0,1,6.7,19.125Z" fill="#707070"/>
    <path id="Path_648" data-name="Path 648" d="M6.7,25.875H4.6a3.4,3.4,0,0,1-.1-1.125h0a3.4,3.4,0,0,1,.1-1.125H6.7a3.4,3.4,0,0,1,.1,1.125h0A3.4,3.4,0,0,1,6.7,25.875Z" fill="#707070"/>
  </g>
</svg>

</span> </div>


                                </div>
                                <span className="review-content">
                                    <p id="content-rew">Wonderful Game!The jewels are very nicely desgined, and shaped in a very desirable way
                                        so tha it can be played easily.Please develop more games like this one.
                                    </p>
                                </span>
                            </span>
                        </div>
      </p>
  </div>
   const extraContentt=<div>
   <p className="extra-content">
   -Explore thre Season of content
              Set yourself for an epic adventure through different worlds!
   </p>
</div>
  const linkName=readMore?'Read Less << ':'Read More... '
  const linkkName=readMore?'Read Less << ':'Read More... '
 
    return (
        <>
         
    <Sidebar isOpen={isOpen} toggle={toggle}/>
         <Navbar toggle={toggle} />  
         
<div className="gamesdetail">
    <div className="gamesdetail-left">
        <div className="gamesdetail-left-first">
            <div className="gamesdetail-left-first-image">
            <img src={gamedetail1} width="300px" id="gamedetail1"/>
            </div>
            <div className="gamesdetail-left-first-content">
            <p id="h3-color">Empires & Puzzel:Epic Match 3</p>
        <div className="rate-star">
            <span className="star">
            <svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>

            </span>
            <span className="views">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path id="Icon_material-person" data-name="Icon material-person" d="M14,14a4,4,0,1,0-4-4A4,4,0,0,0,14,14Zm0,2c-2.67,0-8,1.34-8,4v2H22V20C22,17.34,16.67,16,14,16Z" transform="translate(-6 -6)" fill="#189ecc"/>
</svg>

            7,210 total   
            </span>
        </div>
    <p className="update">
      Version: <span className="updatecolor"> 22/01/2020</span>
    </p>
    <p className="update">
    Version:  <span className="updatecolor">32.1.0 </span><span className="grayupdate">  for Android</span>
    </p>
    
    <p className="update">
        Category: <span className="updatecolor">Puzzle,Game,Action,Adventure</span>
    </p>
    
    <p className="update">
        Studio :<span className="updatecolor">Small Giant Games</span>
    </p>
    <p className="update" >
        Size:
        <span  className="grayupdate"> 
        100MB </span>
    </p>
    <p className="update">
        Installs:
        <span  className="grayupdate">
        5000+</span>
    </p>
    <div className="main-first-right-end">
    
<span className="ccolor"><svg xmlns="http://www.w3.org/2000/svg" width="22.28" height="35.97" viewBox="0 0 22.28 35.97">
  <path id="Icon_metro-bookmark" data-name="Icon metro-bookmark" d="M8.355,1.928V32.777l9.64-9.64,9.64,9.64V1.928Z" transform="translate(-6.855 -0.428)" fill="none" stroke="#1bb0dc" stroke-width="3"/>
</svg> Add to wisht list</span>
<button className="wishlist-button">
    DOWNLOAD
</button> </div>

            </div>
            
        </div>
        <div className="gamedetails-picture-shown">
      <img src={gamedetail2}  width="230px"/>
      <img src={gamedetail3}   width="230px" />
      <img src={gamedetail4}   width="230px"/>
      <img src={gamedetail5}  width="230px" />


      </div>
      <div className="gamesdetail-left-description">
              <h5> The Description of Empires & Puzzels:Epic Matches 3 </h5>
        
    <div className="gamesdetail-left-description-readmoreless">
    <p>
              Empires & Puzzles is a completely new take on match-3-puzzel games, combinig RPG elements,
                 raids and building a migtycastel -topped wiith epic PCP duels.Start your fantasy adventure today!
                 <br/>
                 -Slove Match 3 Puzzles <br/>
                 Send your army to the victory by matching colorful shields and creating epic combos! <br/><br/>

              </p>
              {readMore && extraContentt}
      <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkkName}</h2></a>
      
    </div>
             <hr className="hr"/>    
             <div className="games-detail-update">
                 <h5>Empires & Puzzles Epic Match 3 32.1.0 Update</h5>
                 <p className="first-date">
                  <p>2020-10-15</p>   
                   <p> Defend your empire with new and excitin features!</p> 
                 </p>
                 <p className="second-text">
                     -Ninja Tower Event is approchaing -prepare to climb to the top!<br/>
                     -Updated Return to Morlovia Even is here -preapre for new challenges in late octomber!<br/>
                     -Various bug fixes and smaller improvements
                 </p>
             </div>
             <hr className="hr"/>  
             <div className="games-detail-additional-information">
                 <ul>
                   <span className="color">Category</span>  
                     <li id="bluecolor">Free Ouzzle Game</li>
                     <li>Avaible on:</li>
                     <li>Google Play</li>
                 </ul>

                 <ul>
                 <span className="color">  Latest Version: </span>
                     <li>32.1.0</li>
                     <li>Requirements:</li>
                     <li>Android 4.4+</li>
                 </ul>

                 <ul>
                 <span className="color"> Publish Date:</span>   
                     <li>2020-10-15</li>
                     <li>Report:</li>
                     <li id="bluecolor">Flag as inappropriate</li>
                 </ul>

                 <ul>
                 <span className="color">Upload by:</span>
                     <li>Kadir Kilic</li>
                  
                 </ul>
             </div>  </div>
                <div className="previous-version">
                    <div className="box">
                        <div className="box1-2">
                        <span className="box-1">
                            <p className="V3">V32.1.0</p>
                        </span>
                        <span className="box-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="74" height="17" viewBox="0 0 74 17">
  <g id="Group_359" data-name="Group 359" transform="translate(0.335)">
    <path id="Union_1" data-name="Union 1" d="M14,0l5,5.5L14,11Zm0,11H0L4.373,5.5,0,0H14V11Z" transform="translate(-0.335 3)" fill="#2e9cf2"/>
    <text id="_2variants" data-name="2variants" transform="translate(23.665 13)" fill="#707070" font-size="12" font-family="OpenSans-Light, Open Sans" font-weight="300"><tspan x="0" y="0">2variants</tspan></text>
  </g>
</svg>
</span></div>
 <span className="box-apk">
<p className="APK1">APK</p>
<p className="APK2">APK</p>
 </span>
 <div className="box-info">
 <p>Empires & Puzzles:Epic March 3</p>
 <p className="box-info-date">
     2020-09-23
 </p>
 </div>
 <div className="box-end">
     <p>100.3MB</p> <button className="btnsvg"> 
     <svg xmlns="http://www.w3.org/2000/svg" width="22.875" height="22.875" viewBox="0 0 22.875 22.875">
  <path id="Icon_awesome-arrow-alt-circle-down" data-name="Icon awesome-arrow-alt-circle-down" d="M23.437,12A11.437,11.437,0,1,1,12,.563,11.436,11.436,0,0,1,23.437,12ZM9.971,6.65V12H6.7a.554.554,0,0,0-.392.945l5.3,5.271s.563.217.779,0l5.3-5.271A.553.553,0,0,0,17.294,12H14.029V6.65a.555.555,0,0,0-.553-.553H10.524A.555.555,0,0,0,9.971,6.65Z" transform="translate(-0.563 -0.563)" fill="#2e9cf2"/>
</svg></button>

 </div>
                    </div>
                

                    <div className="box">
                        <div className="box1-2">
                        <span className="box-1">
                            <p className="V3">V32.1.0</p>
                        </span>
                        <span className="box-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="74" height="17" viewBox="0 0 74 17">
  <g id="Group_359" data-name="Group 359" transform="translate(0.335)">
    <path id="Union_1" data-name="Union 1" d="M14,0l5,5.5L14,11Zm0,11H0L4.373,5.5,0,0H14V11Z" transform="translate(-0.335 3)" fill="#2e9cf2"/>
    <text id="_2variants" data-name="2variants" transform="translate(23.665 13)" fill="#707070" font-size="12" font-family="OpenSans-Light, Open Sans" font-weight="300"><tspan x="0" y="0">2variants</tspan></text>
  </g>
</svg>
</span></div>
 <span className="box-apk">
<p className="APK1">APK</p>
<p className="APK2">APK</p>
 </span>
 <div className="box-info">
 <p>Empires & Puzzles:Epic March 3</p>
 <p className="box-info-date">
     2020-09-23
 </p>
 </div>
 <div className="box-end">
     <p>100.3MB</p> <button className="btnsvg"> 
     <svg xmlns="http://www.w3.org/2000/svg" width="22.875" height="22.875" viewBox="0 0 22.875 22.875">
  <path id="Icon_awesome-arrow-alt-circle-down" data-name="Icon awesome-arrow-alt-circle-down" d="M23.437,12A11.437,11.437,0,1,1,12,.563,11.436,11.436,0,0,1,23.437,12ZM9.971,6.65V12H6.7a.554.554,0,0,0-.392.945l5.3,5.271s.563.217.779,0l5.3-5.271A.553.553,0,0,0,17.294,12H14.029V6.65a.555.555,0,0,0-.553-.553H10.524A.555.555,0,0,0,9.971,6.65Z" transform="translate(-0.563 -0.563)" fill="#2e9cf2"/>
</svg></button>

 </div>
                    </div> <div className="box">
                        <div className="box1-2">
                        <span className="box-1">
                            <p className="V3">V32.1.0</p>
                        </span>
                        <span className="box-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="74" height="17" viewBox="0 0 74 17">
  <g id="Group_359" data-name="Group 359" transform="translate(0.335)">
    <path id="Union_1" data-name="Union 1" d="M14,0l5,5.5L14,11Zm0,11H0L4.373,5.5,0,0H14V11Z" transform="translate(-0.335 3)" fill="#2e9cf2"/>
    <text id="_2variants" data-name="2variants" transform="translate(23.665 13)" fill="#707070" font-size="12" font-family="OpenSans-Light, Open Sans" font-weight="300"><tspan x="0" y="0">2variants</tspan></text>
  </g>
</svg>
</span></div>
 <span className="box-apk">
<p className="APK1">APK</p>
<p className="APK2">APK</p>
 </span>
 <div className="box-info">
 <p>Empires & Puzzles:Epic March 3</p>
 <p className="box-info-date">
     2020-09-23
 </p>
 </div>
 <div className="box-end">
     <p>100.3MB</p> <button className="btnsvg"> 
     <svg xmlns="http://www.w3.org/2000/svg" width="22.875" height="22.875" viewBox="0 0 22.875 22.875">
  <path id="Icon_awesome-arrow-alt-circle-down" data-name="Icon awesome-arrow-alt-circle-down" d="M23.437,12A11.437,11.437,0,1,1,12,.563,11.436,11.436,0,0,1,23.437,12ZM9.971,6.65V12H6.7a.554.554,0,0,0-.392.945l5.3,5.271s.563.217.779,0l5.3-5.271A.553.553,0,0,0,17.294,12H14.029V6.65a.555.555,0,0,0-.553-.553H10.524A.555.555,0,0,0,9.971,6.65Z" transform="translate(-0.563 -0.563)" fill="#2e9cf2"/>
</svg></button>

 </div>
                    </div> <div className="box">
                        <div className="box1-2">
                        <span className="box-1">
                            <p className="V3">V32.1.0</p>
                        </span>
                        <span className="box-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="74" height="17" viewBox="0 0 74 17">
  <g id="Group_359" data-name="Group 359" transform="translate(0.335)">
    <path id="Union_1" data-name="Union 1" d="M14,0l5,5.5L14,11Zm0,11H0L4.373,5.5,0,0H14V11Z" transform="translate(-0.335 3)" fill="#2e9cf2"/>
    <text id="_2variants" data-name="2variants" transform="translate(23.665 13)" fill="#707070" font-size="12" font-family="OpenSans-Light, Open Sans" font-weight="300"><tspan x="0" y="0">2variants</tspan></text>
  </g>
</svg>
</span></div>
 <span className="box-apk">
<p className="APK1">APK</p>
<p className="APK2">APK</p>
 </span>
 <div className="box-info">
 <p>Empires & Puzzles:Epic March 3</p>
 <p className="box-info-date">
     2020-09-23
 </p>
 </div>
 <div className="box-end">
     <p>100.3MB</p> <button className="btnsvg"> 
     <svg xmlns="http://www.w3.org/2000/svg" width="22.875" height="22.875" viewBox="0 0 22.875 22.875">
  <path id="Icon_awesome-arrow-alt-circle-down" data-name="Icon awesome-arrow-alt-circle-down" d="M23.437,12A11.437,11.437,0,1,1,12,.563,11.436,11.436,0,0,1,23.437,12ZM9.971,6.65V12H6.7a.554.554,0,0,0-.392.945l5.3,5.271s.563.217.779,0l5.3-5.271A.553.553,0,0,0,17.294,12H14.029V6.65a.555.555,0,0,0-.553-.553H10.524A.555.555,0,0,0,9.971,6.65Z" transform="translate(-0.563 -0.563)" fill="#2e9cf2"/>
</svg></button>

 </div>
                    </div> <div className="box">
                        <div className="box1-2">
                        <span className="box-1">
                            <p className="V3">V32.1.0</p>
                        </span>
                        <span className="box-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="74" height="17" viewBox="0 0 74 17">
  <g id="Group_359" data-name="Group 359" transform="translate(0.335)">
    <path id="Union_1" data-name="Union 1" d="M14,0l5,5.5L14,11Zm0,11H0L4.373,5.5,0,0H14V11Z" transform="translate(-0.335 3)" fill="#2e9cf2"/>
    <text id="_2variants" data-name="2variants" transform="translate(23.665 13)" fill="#707070" font-size="12" font-family="OpenSans-Light, Open Sans" font-weight="300"><tspan x="0" y="0">2variants</tspan></text>
  </g>
</svg>
</span></div>
 <span className="box-apk">
<p className="APK1">APK</p>
<p className="APK2">APK</p>
 </span>
 <div className="box-info">
 <p>Empires & Puzzles:Epic March 3</p>
 <p className="box-info-date">
     2020-09-23
 </p>
 </div>
 <div className="box-end">
     <p>100.3MB</p> <button className="btnsvg"> 
     <svg xmlns="http://www.w3.org/2000/svg" width="22.875" height="22.875" viewBox="0 0 22.875 22.875">
  <path id="Icon_awesome-arrow-alt-circle-down" data-name="Icon awesome-arrow-alt-circle-down" d="M23.437,12A11.437,11.437,0,1,1,12,.563,11.436,11.436,0,0,1,23.437,12ZM9.971,6.65V12H6.7a.554.554,0,0,0-.392.945l5.3,5.271s.563.217.779,0l5.3-5.271A.553.553,0,0,0,17.294,12H14.029V6.65a.555.555,0,0,0-.553-.553H10.524A.555.555,0,0,0,9.971,6.65Z" transform="translate(-0.563 -0.563)" fill="#2e9cf2"/>
</svg></button>

 </div>
                    </div> <div className="box">
                        <div className="box1-2">
                        <span className="box-1">
                            <p className="V3">V32.1.0</p>
                        </span>
                        <span className="box-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="74" height="17" viewBox="0 0 74 17">
  <g id="Group_359" data-name="Group 359" transform="translate(0.335)">
    <path id="Union_1" data-name="Union 1" d="M14,0l5,5.5L14,11Zm0,11H0L4.373,5.5,0,0H14V11Z" transform="translate(-0.335 3)" fill="#2e9cf2"/>
    <text id="_2variants" data-name="2variants" transform="translate(23.665 13)" fill="#707070" font-size="12" font-family="OpenSans-Light, Open Sans" font-weight="300"><tspan x="0" y="0">2variants</tspan></text>
  </g>
</svg>
</span></div>
 <span className="box-apk">
<p className="APK1">APK</p>
<p className="APK2">APK</p>
 </span>
 <div className="box-info">
 <p>Empires & Puzzles:Epic March 3</p>
 <p className="box-info-date">
     2020-09-23
 </p>
 </div>
 <div className="box-end">
     <p>100.3MB</p> <button className="btnsvg"> 
     <svg xmlns="http://www.w3.org/2000/svg" width="22.875" height="22.875" viewBox="0 0 22.875 22.875">
  <path id="Icon_awesome-arrow-alt-circle-down" data-name="Icon awesome-arrow-alt-circle-down" d="M23.437,12A11.437,11.437,0,1,1,12,.563,11.436,11.436,0,0,1,23.437,12ZM9.971,6.65V12H6.7a.554.554,0,0,0-.392.945l5.3,5.271s.563.217.779,0l5.3-5.271A.553.553,0,0,0,17.294,12H14.029V6.65a.555.555,0,0,0-.553-.553H10.524A.555.555,0,0,0,9.971,6.65Z" transform="translate(-0.563 -0.563)" fill="#2e9cf2"/>
</svg></button>

 </div>
                    </div>
                

      </div>
        
        
          <div className="game-details-reviews">
              <h3>REVIEWS</h3>
              <div className="reviews-rate">
                  <div className="all-reviews-first">
                  <p className="number-review">4.5</p>
                  <span className="star-review">
                      
                  <svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#707070"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#707070"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#707070"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#707070"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#afafaf"/>
</svg>


                  </span>
                <span className="view-review">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
  <path id="Icon_material-person" data-name="Icon material-person" d="M15,15a4.5,4.5,0,1,0-4.5-4.5A4.5,4.5,0,0,0,15,15Zm0,2.25c-3,0-9,1.507-9,4.5V24H24V21.75C24,18.757,18,17.25,15,17.25Z" transform="translate(-6 -6)" fill="#707070"/>
</svg>
<p className="num">
    7,210 total
</p>

                    </span>  </div>
                    <div className="game-detail-reviews-end">
                        <div className="review-1">
                            <img src={review1}  width="60px" height="60px"/>
                            <span className="review-name">
                                <p>Renee Hinson</p>
                                <div className="review-star">
                           <span className="stari">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#707070"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#707070"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#707070"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#707070"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#707070"/>
</svg>
<p id="date-rew">Agust 24,2020</p>
</span>   
                                   
                                
                                <div className="rew-social">
                               <span className="rew-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="43" viewBox="0 0 24 43">
  <g id="Group_817" data-name="Group 817" transform="translate(-812 -2731)">
    <text id="_15" data-name="15" transform="translate(816 2770)" fill="#707070" font-size="12" font-family="OpenSans-Light, Open Sans" letter-spacing="0.02em" font-weight="300"><tspan x="0" y="0">15</tspan></text>
    <g id="baseline-thumb_up-24px" transform="translate(812 2731)">
      <path id="Path_522" data-name="Path 522" d="M0,0H24V24H0Z" fill="none"/>
      <path id="Path_523" data-name="Path 523" d="M1,21H5V9H1ZM23,10a2.006,2.006,0,0,0-2-2H14.69l.95-4.57.03-.32a1.505,1.505,0,0,0-.44-1.06L14.17,1,7.59,7.59A1.955,1.955,0,0,0,7,9V19a2.006,2.006,0,0,0,2,2h9a1.987,1.987,0,0,0,1.84-1.22l3.02-7.05A1.976,1.976,0,0,0,23,12Z" fill="#707070"/>
    </g>
  </g>
</svg></span>

<span className="rew-2">
<svg xmlns="http://www.w3.org/2000/svg" width="2.301" height="15.75" viewBox="0 0 2.301 15.75">
  <g id="Icon_ionic-ios-menu" data-name="Icon ionic-ios-menu" transform="translate(-4.5 -10.125)">
    <path id="Path_646" data-name="Path 646" d="M6.7,12.375H4.6a3.4,3.4,0,0,1-.1-1.125h0a3.4,3.4,0,0,1,.1-1.125H6.7a3.4,3.4,0,0,1,.1,1.125h0A3.4,3.4,0,0,1,6.7,12.375Z" fill="#707070"/>
    <path id="Path_647" data-name="Path 647" d="M6.7,19.125H4.6A3.4,3.4,0,0,1,4.5,18h0a3.4,3.4,0,0,1,.1-1.125H6.7A3.4,3.4,0,0,1,6.8,18h0A3.4,3.4,0,0,1,6.7,19.125Z" fill="#707070"/>
    <path id="Path_648" data-name="Path 648" d="M6.7,25.875H4.6a3.4,3.4,0,0,1-.1-1.125h0a3.4,3.4,0,0,1,.1-1.125H6.7a3.4,3.4,0,0,1,.1,1.125h0A3.4,3.4,0,0,1,6.7,25.875Z" fill="#707070"/>
  </g>
</svg>

</span> </div>


                                </div>
                                <span className="review-content">
                                    <p id="content-rew">Wonderful Game!The jewels are very nicely desgined, and shaped in a very desirable way
                                        so tha it can be played easily.Please develop more games like this one.
                                    </p>
                                </span>
                            </span>
                        </div>

                        <div className="review-1">
                            <img src={review2}  width="60px" height="60px"/>
                            <span className="review-name">
                                <p>Renee Hinson</p>
                                <div className="review-star">
                           <span className="stari">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#707070"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#707070"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#707070"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#707070"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#707070"/>
</svg>
<p id="date-rew">Agust 24,2020</p>
</span>   
                                   
                                
                                <div className="rew-social">
                               <span className="rew-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="43" viewBox="0 0 24 43">
  <g id="Group_817" data-name="Group 817" transform="translate(-812 -2731)">
    <text id="_15" data-name="15" transform="translate(816 2770)" fill="#707070" font-size="12" font-family="OpenSans-Light, Open Sans" letter-spacing="0.02em" font-weight="300"><tspan x="0" y="0">15</tspan></text>
    <g id="baseline-thumb_up-24px" transform="translate(812 2731)">
      <path id="Path_522" data-name="Path 522" d="M0,0H24V24H0Z" fill="none"/>
      <path id="Path_523" data-name="Path 523" d="M1,21H5V9H1ZM23,10a2.006,2.006,0,0,0-2-2H14.69l.95-4.57.03-.32a1.505,1.505,0,0,0-.44-1.06L14.17,1,7.59,7.59A1.955,1.955,0,0,0,7,9V19a2.006,2.006,0,0,0,2,2h9a1.987,1.987,0,0,0,1.84-1.22l3.02-7.05A1.976,1.976,0,0,0,23,12Z" fill="#707070"/>
    </g>
  </g>
</svg></span>

<span className="rew-2">
<svg xmlns="http://www.w3.org/2000/svg" width="2.301" height="15.75" viewBox="0 0 2.301 15.75">
  <g id="Icon_ionic-ios-menu" data-name="Icon ionic-ios-menu" transform="translate(-4.5 -10.125)">
    <path id="Path_646" data-name="Path 646" d="M6.7,12.375H4.6a3.4,3.4,0,0,1-.1-1.125h0a3.4,3.4,0,0,1,.1-1.125H6.7a3.4,3.4,0,0,1,.1,1.125h0A3.4,3.4,0,0,1,6.7,12.375Z" fill="#707070"/>
    <path id="Path_647" data-name="Path 647" d="M6.7,19.125H4.6A3.4,3.4,0,0,1,4.5,18h0a3.4,3.4,0,0,1,.1-1.125H6.7A3.4,3.4,0,0,1,6.8,18h0A3.4,3.4,0,0,1,6.7,19.125Z" fill="#707070"/>
    <path id="Path_648" data-name="Path 648" d="M6.7,25.875H4.6a3.4,3.4,0,0,1-.1-1.125h0a3.4,3.4,0,0,1,.1-1.125H6.7a3.4,3.4,0,0,1,.1,1.125h0A3.4,3.4,0,0,1,6.7,25.875Z" fill="#707070"/>
  </g>
</svg>

</span> </div>


                                </div>
                                <span className="review-content">
                                    <p id="content-rew">Wonderful Game!The jewels are very nicely desgined, and shaped in a very desirable way
                                        so tha it can be played easily.Please develop more games like this one.
                                    </p>
                                </span>
                            </span>
                        </div>
                        </div>   
                        <div className="review-1">
                            <img src={review3}  width="60px" height="60px"/>
                            <span className="review-name">
                                <p>Renee Hinson</p>
                                <div className="review-star">
                           <span className="stari">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#707070"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#707070"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#707070"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#707070"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#707070"/>
</svg>
<p id="date-rew">Agust 24,2020</p>
</span>   
                                   
                                
                                <div className="rew-social">
                               <span className="rew-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="43" viewBox="0 0 24 43">
  <g id="Group_817" data-name="Group 817" transform="translate(-812 -2731)">
    <text id="_15" data-name="15" transform="translate(816 2770)" fill="#707070" font-size="12" font-family="OpenSans-Light, Open Sans" letter-spacing="0.02em" font-weight="300"><tspan x="0" y="0">15</tspan></text>
    <g id="baseline-thumb_up-24px" transform="translate(812 2731)">
      <path id="Path_522" data-name="Path 522" d="M0,0H24V24H0Z" fill="none"/>
      <path id="Path_523" data-name="Path 523" d="M1,21H5V9H1ZM23,10a2.006,2.006,0,0,0-2-2H14.69l.95-4.57.03-.32a1.505,1.505,0,0,0-.44-1.06L14.17,1,7.59,7.59A1.955,1.955,0,0,0,7,9V19a2.006,2.006,0,0,0,2,2h9a1.987,1.987,0,0,0,1.84-1.22l3.02-7.05A1.976,1.976,0,0,0,23,12Z" fill="#707070"/>
    </g>
  </g>
</svg></span>

<span className="rew-2">
<svg xmlns="http://www.w3.org/2000/svg" width="2.301" height="15.75" viewBox="0 0 2.301 15.75">
  <g id="Icon_ionic-ios-menu" data-name="Icon ionic-ios-menu" transform="translate(-4.5 -10.125)">
    <path id="Path_646" data-name="Path 646" d="M6.7,12.375H4.6a3.4,3.4,0,0,1-.1-1.125h0a3.4,3.4,0,0,1,.1-1.125H6.7a3.4,3.4,0,0,1,.1,1.125h0A3.4,3.4,0,0,1,6.7,12.375Z" fill="#707070"/>
    <path id="Path_647" data-name="Path 647" d="M6.7,19.125H4.6A3.4,3.4,0,0,1,4.5,18h0a3.4,3.4,0,0,1,.1-1.125H6.7A3.4,3.4,0,0,1,6.8,18h0A3.4,3.4,0,0,1,6.7,19.125Z" fill="#707070"/>
    <path id="Path_648" data-name="Path 648" d="M6.7,25.875H4.6a3.4,3.4,0,0,1-.1-1.125h0a3.4,3.4,0,0,1,.1-1.125H6.7a3.4,3.4,0,0,1,.1,1.125h0A3.4,3.4,0,0,1,6.7,25.875Z" fill="#707070"/>
  </g>
</svg>

</span> </div>


                                </div>
                                <span className="review-content">
                                    <p id="content-rew">Wonderful Game!The jewels are very nicely desgined, and shaped in a very desirable way
                                        so tha it can be played easily.Please develop more games like this one.
                                    </p>
                                </span>
                            </span>
                        </div>
                        
                        {readMore && extraContent}
      <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
              </div>  </div>
        

    </div>  
    <div className="gamesdetail-right">
       <div className="gamesdetail-download">
        <div className="gamesdetail-download-flex-row">
         <img src={adnroidblue} />
         <div className="download-elements">
           <span className="download-name">APKload <p id="orange"> <FaStar/> 8.7 </p></span>
           <span className="download-nameless">Using APKload App</span>
           <span className="download-nameless">Faster, free and saving data!</span>

         </div></div> 
         <button className="download-button">Download c3.17.14(14.4MB)</button>
         
       </div>
       <div className="under ">
                     <div className="hheed">
                         <span id="tte">Hot <i class="fas fa-angle-double-right" /></span>
                     </div>
                     <div className="carde">
                         <div className="nummber">
                           1
                         </div>
                  <div className="geg"> <img className="imgg" src={empires} /> </div>
                  <div className="ttxx"> 
                  <span id="tttx">
                   <p>Creative Destruction</p>
                  </span>
                  <span id="tttxxx">
                    <p>by NetEase Games </p>
                  </span>
                  </div>

                   </div>
                   
                   <div className="carde">
                         <div className="nummberr">
                           2
                         </div>
                  <div className="geg"> <img className="imgg" src={empires} /> </div>
                  <div className="ttxx"> 
                  <span id="tttx">
                   <p>Creative Destruction</p>
                  </span>
                  <span id="tttxxx">
                    <p>by NetEase Games </p>
                  </span>
                  </div>

                   </div> <hr/>
                   <div className="carde">
                         <div className="nummberrr">
                           3
                         </div>
                  <div className="geg"> <img className="imgg" src={empires} /> </div>
                  <div className="ttxx"> 
                  <span id="tttx">
                   <p>Creative Destruction</p>
                  </span>
                  <span id="tttxxx">
                    <p>by NetEase Games </p>
                  </span>
                  </div>

                   </div><hr/>
                   <div className="carde">
                         <div className="nummberrrr">
                          4
                         </div>
                  <div className="geg"> <img className="imgg" src={empires} /> </div>
                  <div className="ttxx"> 
                  <span id="tttx">
                   <p>Creative Destruction</p>
                  </span>
                  <span id="tttxxx">
                    <p>by NetEase Games </p>
                  </span>
                  </div>

                   </div><hr/>
                   <div className="carde">
                         <div className="nummberrrr">
                          5
                         </div>
                  <div className="geg"> <img className="imgg" src={empires} /> </div>
                  <div className="ttxx"> 
                  <span id="tttx">
                   <p>Creative Destruction</p>
                  </span>
                  <span id="tttxxx">
                    <p>by NetEase Games </p>
                  </span>
                  </div>

                   </div><hr/>
                   <div className="carde">
                         <div className="nummberrrr">
                           6
                         </div>
                  <div className="geg"> <img className="imgg" src={empires} /> </div>
                  <div className="ttxx"> 
                  <span id="tttx">
                   <p>Creative Destruction</p>
                  </span>
                  <span id="tttxxx">
                    <p>by NetEase Games </p>
                  </span>
                  </div>

                   </div><hr/>
                   <div className="carde">
                         <div className="nummberrrr">
                           7
                         </div>
                  <div className="geg"> <img className="imgg" src={empires} /> </div>
                  <div className="ttxx"> 
                  <span id="tttx">
                   <p>Creative Destruction</p>
                  </span>
                  <span id="tttxxx">
                    <p>by NetEase Games </p>
                  </span>
                  </div>

                   </div><hr/>
                   <div className="carde">
                         <div className="nummberrrr">
                        8
                         </div>
                  <div className="geg"> <img className="imgg" src={empires} /> </div>
                  <div className="ttxx"> 
                  <span id="tttx">
                   <p>Creative Destruction</p>
                  </span>
                  <span id="tttxxx">
                    <p>by NetEase Games </p>
                  </span>
                  </div>

                   </div><hr/>
                   <div className="carde">
                         <div className="nummberrrr">
                           9
                         </div>
                  <div className="geg"> <img className="imgg" src={empires} /> </div>
                  <div className="ttxx"> 
                  <span id="tttx">
                   <p>Creative Destruction</p>
                  </span>
                  <span id="tttxxx">
                    <p>by NetEase Games </p>
                  </span>
                  </div>

                   </div><hr/>
                   <div className="carde">
                         <div className="nummberrrr">
                           10
                         </div>
                  <div className="geg"> <img className="imgg" src={empires} /> </div>
                  <div className="ttxx"> 
                  <span id="tttx">
                   <p>Creative Destruction</p>
                  </span>
                  <span id="tttxxx">
                    <p>by NetEase Games </p>
                  </span>
                  </div>

                   </div><hr/>
                   <div className="eend">
                    More <i class="fas fa-angle-double-right" />
                  </div>
                   </div>
                   
                   <hr/>
    </div>
</div>



        
        <Footer />
        </>
    )
}

export default GamesDetailPage
