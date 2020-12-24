import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './flexbox.scss';
import empires from "../images/empires.jpg"
import empires1 from "../images/empires1.jpg"
import pubg from "../images/pubg.jpg"
import cats from "../images/cats.jpg"
import Dragon from "../images/Dragon.jpg"
import facebook from "../images/facebook.png"
import twwiter from "../images/twwiter.png"
import iinn from "../images/iinn.jpg"
import pinterest from "../images/pinterest.png"
import reddit from "../images/reddit.jpg"
import youtube from "../images/youtube.jpg"
import instagram from "../images/instagram.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FaAndroid  } from 'react-icons/fa';
import { FaStar  } from 'react-icons/fa';
import android from '../images/android.png'
import adnroidblue from '../images/adnroidblue.png'


function Flexbox () {

return (<>
 <div className="allinone">
             <div className="slideri">
                <Carousel  autoPlay reapet="4000" showThumbs={false} transitionTime="5000"> 
                   
                    <div>
                        <img src={Dragon} id="imgsrcdragon"/>
                        <p className="legend">Sword Master Story</p>
                    </div>
                    <div>
                        <img src={Dragon} id="imgsrcdragon" />
                        <p className="legend">Sword Master Story</p>
                    </div>
                    <div>
                        <img src={Dragon} id="imgsrcdragon" />
                        <p className="legend">Sword Master Story</p>
                    </div>
                </Carousel> </div>   
                <div className="twoinone">
       
            <div className="download">
              
           
              <div className="texte">
              <span className="and">
              <img src={adnroidblue} width="100px" id="immgmg" /></span>
                <span className="roid">
                APKLoad
                <span id="star"><FaStar/></span><span id="rr">8.7</span><br/>
                <span className="roidd">
                Using APKload App<br/>
                Faster,free and saving data!
              </span></span>
            
                </div>
                <button className="buuton">
                  Download v3.17.14(14.4MB)
                </button>  
              
             
              
                </div>

                <div className="icon_wrapper">
        <div className="icon"> <svg><rect rx="50" ry="50" ></rect></svg> <img src={facebook} alt="" className="icc"/></div>
        <div className="icon"> <svg><rect rx="50" ry="50" ></rect></svg><img src={twwiter} alt="" className="icc"/></div>
        <div className="icon"> <svg><rect rx="50" ry="50" ></rect></svg> <img src={pinterest} alt="" className="icc"/></div>
        <div className="icon"> <svg><rect rx="50" ry="50" ></rect></svg> <img src={reddit} alt="" className="icc"/></div>
        <div className="icon"> <svg><rect rx="50" ry="50" ></rect></svg><img src={iinn} alt="" className="icc"/></div>
        <div className="icon"> <svg><rect rx="50" ry="50" ></rect></svg><img src={youtube} alt="" className="icc"/></div>
        <div className="icon" id="heki"> <svg><rect rx="50" ry="50" ></rect></svg><img src={instagram} alt="" className="icc" id="heki"/></div>
    </div>
 </div>
            


           </div>
          
           
        <div className="contentt">
        <div className="main">
            <div className="main lefty">
                <div className="item1">
                
                         <span className="Headerr"> <span id="Htittle"><a href="/" className="aes">Discover</a> <span id="Sign"> 
                         <i class="fas fa-angle-double-right" />
                           </span></span> 
                           <span id="More">More<span id="more"><i class="fas fa-angle-double-right"></i></span></span></span> 
                      
                        <Link to='/gamesdetail' className="card card--wide">
                         
                         <div className="card__media">
                           <img src={empires} alt="Card image" />
                         </div>
                       <div className="card__content">
                        <header className="card__header">
                          <h2 className="card__title">Empires & Puzzels: Epic Matchs</h2>
                            <div className="card__subtitle">By Dashlane <br/>
                              <span id="card__meta">30.30.2020</span>
                           </div>
                        </header>
                        </div>
                        </Link>    
                        
                        <Link to='/gamesdetail'  className="card card--wide">
                         <div className="card__media">
                           <img src={empires} alt="Card image" />
                         </div>
                       <div className="card__content">
                        <header className="card__header">
                          <h2 className="card__title">Empires & Puzzels: Epic Matchs</h2>
                            <div className="card__subtitle">By Dashlane <br/>
                              <span id="card__meta">30.30.2020</span>
                           </div>
                        </header>
                        </div>
                        </Link>

                        <Link to='/gamesdetail'  className="card card--wide">
                         <div className="card__media">
                           <img src={empires} alt="Card image" />
                         </div>
                       <div className="card__content">
                        <header className="card__header">
                          <h2 className="card__title">Empires & Puzzels: Epic Matchs</h2>
                            <div className="card__subtitle">By Dashlane <br/>
                              <span id="card__meta">30.30.2020</span>
                           </div>
                        </header>
                        </div>
                        </Link>

                        <Link to='/gamesdetail'  className="card card--wide">
                         <div className="card__media">
                           <img src={empires} alt="Card image" />
                         </div>
                       <div className="card__content">
                        <header className="card__header">
                          <h2 className="card__title">Empires & Puzzels: Epic Matchs</h2>
                            <div className="card__subtitle">By Dashlane <br/>
                              <span id="card__meta">30.30.2020</span>
                           </div>
                        </header>
                        </div>
                        </Link>

                        <Link to='/gamesdetail'  className="card card--wide">
                         <div className="card__media">
                           <img src={empires} alt="Card image" />
                         </div>
                       <div className="card__content">
                        <header className="card__header">
                          <h2 className="card__title">Empires & Puzzels: Epic Matchs</h2>
                            <div className="card__subtitle">By Dashlane <br/>
                              <span id="card__meta">30.30.2020</span>
                           </div>
                        </header>
                        </div>
                        </Link>

                        <Link to='/gamesdetail' className="card card--wide">
                         <div className="card__media">
                           <img src={empires} alt="Card image" />
                         </div>
                       <div className="card__content">
                        <header className="card__header">
                          <h2 className="card__title">Empires & Puzzels: Epic Matchs</h2>
                            <div className="card__subtitle">By Dashlane <br/>
                              <span id="card__meta">30.30.2020</span>
                           </div>
                        </header>
                        </div>
                        </Link>

                        <Link to='/gamesdetail' className="card card--wide">
                         <div className="card__media">
                           <img src={empires} alt="Card image" />
                         </div>
                       <div className="card__content">
                        <header className="card__header">
                          <h2 className="card__title">Empires & Puzzels: Epic Matchs</h2>
                            <div className="card__subtitle">By Dashlane <br/>
                              <span id="card__meta">30.30.2020</span>
                           </div>
                        </header>
                        </div>
                        </Link>

                        <Link to='/gamesdetail'  className="card card--wide">
                         <div className="card__media">
                           <img src={empires} alt="Card image" />
                         </div>
                       <div className="card__content">
                        <header className="card__header">
                          <h2 className="card__title">Empires & Puzzels: Epic Matchs</h2>
                            <div className="card__subtitle">By Dashlane <br/>
                              <span id="card__meta">30.30.2020</span>
                           </div>
                        </header>
                        </div>
                        </Link>

                        <Link to='/gamesdetail' className="card card--wide">
                         <div className="card__media">
                           <img src={empires} alt="Card image" />
                         </div>
                       <div className="card__content" >
                        <header className="card__header">
                          <h2 className="card__title">Empires & Puzzels: Epic Matchs</h2>
                            <div className="card__subtitle">By Dashlane <br/>
                              <span id="card__meta">30.30.2020</span>
                           </div>
                        </header>
                        </div>
                        </Link>

                        <article className="card card--wide">
                         <div className="card__media">
                           <img src={empires} alt="Card image" />
                         </div>
                       <div className="card__content">
                        <header className="card__header">
                          <h2 className="card__title">Empires & Puzzels: Epic Matchs</h2>
                            <div className="card__subtitle">By Dashlane <br/>
                              <span id="card__meta">30.30.2020</span>
                           </div>
                        </header>
                        </div>
                        </article>

                        <article className="card card--wide">
                         <div className="card__media">
                           <img src={empires} alt="Card image" />
                         </div>
                       <div className="card__content">
                        <header className="card__header">
                          <h2 className="card__title">Empires & Puzzels: Epic Matchs</h2>
                            <div className="card__subtitle">By Dashlane <br/>
                              <span id="card__meta">30.30.2020</span>
                           </div>
                        </header>
                        </div>
                        </article>

                        <article className="card card--wide">
                         <div className="card__media">
                           <img src={empires} alt="Card image" />
                         </div>
                       <div className="card__content">
                        <header className="card__header">
                          <h2 className="card__title">Empires & Puzzels: Epic Matchs</h2>
                            <div className="card__subtitle">By Dashlane <br/>
                              <span id="card__meta">30.30.2020</span>
                           </div>
                        </header>
                        </div>
                        </article>

                        <article className="card card--wide">
                         <div className="card__media">
                           <img src={empires} alt="Card image" />
                         </div>
                       <div className="card__content">
                        <header className="card__header">
                          <h2 className="card__title">Empires & Puzzels: Epic Matchs</h2>
                            <div className="card__subtitle">By Dashlane <br/>
                              <span id="card__meta">30.30.2020</span>
                           </div>
                        </header>
                        </div>
                        </article>

                        <article className="card card--wide">
                         <div className="card__media">
                           <img src={empires} alt="Card image" />
                         </div>
                       <div className="card__content">
                        <header className="card__header">
                          <h2 className="card__title">Empires & Puzzels: Epic Matchs</h2>
                            <div className="card__subtitle">By Dashlane <br/>
                              <span id="card__meta">30.30.2020</span>
                           </div>
                        </header>
                        </div>
                        </article>

                        <article className="card card--wide">
                         <div className="card__media">
                           <img src={empires} alt="Card image" />
                         </div>
                       <div className="card__content">
                        <header className="card__header">
                          <h2 className="card__title">Empires & Puzzels: Epic Matchs</h2>
                            <div className="card__subtitle">By Dashlane <br/>
                              <span id="card__meta">30.30.2020</span>
                           </div>
                        </header>
                        </div>
                        </article>

                        


               

                </div>
                <div className="item2">
                <span className="Headerr"> <span id="Htittle"><a href="/" className="aes">Popular Games in 24 Hour</a><span id="Sign"> 
                         <i class="fas fa-angle-double-right" />
                           </span></span> 
                           <span id="More">More<span id="more"><i class="fas fa-angle-double-right"></i></span></span></span> 
                       
                        <article className="card card--wide">
                          <div className="card__media">
                            <img src={empires1} alt="Card image" />
                          </div>
                        <div className="card__content">
                         <header className="card__header">
                           <h2 className="card__title">Empires & Puzzels: Epic Matchs</h2>
                             <div className="card__subtitle">
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star-half"></i>
                               <i class="fa fa-star-half"></i>
                               8.7
                                <br/>
                               <span id="card__meta">Adventure</span>
                            </div>
                         </header>
                         </div>
                         </article>
                        
                         <article className="card card--wide">
                          <div className="card__media">
                            <img src={empires1} alt="Card image" />
                          </div>
                        <div className="card__content">
                         <header className="card__header">
                           <h2 className="card__title">Empires & Puzzels: Epic Matchs</h2>
                             <div className="card__subtitle">
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star-half"></i>
                               <i class="fa fa-star-half"></i>
                               8.7
                                <br/>
                               <span id="card__meta">Action</span>
                            </div>
                         </header>
                         </div>
                         </article>
                         <article className="card card--wide">
                          <div className="card__media">
                            <img src={empires1} alt="Card image" />
                          </div>
                        <div className="card__content">
                         <header className="card__header">
                           <h2 className="card__title">Empires & Puzzels: Epic Matchs</h2>
                             <div className="card__subtitle">
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star-half"></i>
                               <i class="fa fa-star-half"></i>
                               8.7
                                <br/>
                               <span id="card__meta">Strategy</span>
                            </div>
                         </header>
                         </div>
                         </article>
                         <article className="card card--wide">
                          <div className="card__media">
                            <img src={empires1} alt="Card image" />
                          </div>
                        <div className="card__content">
                         <header className="card__header">
                           <h2 className="card__title">Empires & Puzzels: Epic Matchs</h2>
                             <div className="card__subtitle">
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star-half"></i>
                               <i class="fa fa-star-half"></i>
                               8.7
                                <br/>
                               <span id="card__meta">Role Playing</span>
                            </div>
                         </header>
                         </div>
                         </article>
                         <article className="card card--wide">
                          <div className="card__media">
                            <img src={empires1} alt="Card image" />
                          </div>
                        <div className="card__content">
                         <header className="card__header">
                           <h2 className="card__title">Empires & Puzzels: Epic Matchs</h2>
                             <div className="card__subtitle">
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star-half"></i>
                               <i class="fa fa-star-half"></i>
                               8.7
                                <br/>
                               <span id="card__meta">Acrade</span>
                            </div>
                         </header>
                         </div>
                         </article>
                         <article className="card card--wide">
                          <div className="card__media">
                            <img src={empires1} alt="Card image" />
                          </div>
                        <div className="card__content">
                         <header className="card__header">
                           <h2 className="card__title">Empires & Puzzels: Epic Matchs</h2>
                             <div className="card__subtitle">
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star-half"></i>
                               <i class="fa fa-star-half"></i>
                               8.7
                                <br/>
                               <span id="card__meta">Acrade</span>
                            </div>
                         </header>
                         </div>
                         </article>
                         <article className="card card--wide">
                          <div className="card__media">
                            <img src={empires1} alt="Card image" />
                          </div>
                        <div className="card__content">
                         <header className="card__header">
                           <h2 className="card__title">Empires & Puzzels: Epic Matchs</h2>
                             <div className="card__subtitle">
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star-half"></i>
                               <i class="fa fa-star-half"></i>
                               8.7
                                <br/>
                               <span id="card__meta">Acrade</span>
                            </div>
                         </header>
                         </div>
                         </article>
                         <article className="card card--wide">
                          <div className="card__media">
                            <img src={empires1} alt="Card image" />
                          </div>
                        <div className="card__content">
                         <header className="card__header">
                           <h2 className="card__title">Empires & Puzzels: Epic Matchs</h2>
                             <div className="card__subtitle">
                               <i class="fa fa-star" ></i>
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star-half"></i>
                               <i class="fa fa-star-half"></i>
                               8.7
                                <br/>
                               <span id="card__meta">Acrade</span>
                            </div>
                         </header>
                         </div>
                         </article>
                         <article className="card card--wide">
                          <div className="card__media">
                            <img src={empires1} alt="Card image" />
                          </div>
                        <div className="card__content">
                         <header className="card__header">
                           <h2 className="card__title">Empires & Puzzels: Epic Matchs</h2>
                             <div className="card__subtitle">
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star-half"></i>
                               <i class="fa fa-star-half"></i>
                               8.7
                                <br/>
                               <span id="card__meta">Adventure</span>
                            </div>
                         </header>
                         </div>
                         </article>
                         <article className="card card--wide">
                          <div className="card__media">
                            <img src={empires1} alt="Card image" />
                          </div>
                        <div className="card__content">
                         <header className="card__header">
                           <h2 className="card__title">Empires & Puzzels: Epic Matchs</h2>
                             <div className="card__subtitle">
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star-half"></i>
                               <i class="fa fa-star-half"></i>
                               8.7
                                <br/>
                               <span id="card__meta">Adventure</span>
                            </div>
                         </header>
                         </div>
                         </article>
                         <article className="card card--wide">
                          <div className="card__media">
                            <img src={empires1} alt="Card image" />
                          </div>
                        <div className="card__content">
                         <header className="card__header">
                           <h2 className="card__title">Empires & Puzzels: Epic Matchs</h2>
                             <div className="card__subtitle">
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star-half"></i>
                               <i class="fa fa-star-half"></i>
                               8.7
                                <br/>
                               <span id="card__meta">Adventure</span>
                            </div>
                         </header>
                         </div>
                         </article>
                         <article className="card card--wide">
                          <div className="card__media">
                            <img src={empires1} alt="Card image" />
                          </div>
                        <div className="card__content">
                         <header className="card__header">
                           <h2 className="card__title">Empires & Puzzels: Epic Matchs</h2>
                             <div className="card__subtitle">
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star-half"></i>
                               <i class="fa fa-star-half"></i>
                               8.7
                                <br/>
                               <span id="card__meta">Adventure</span>
                            </div>
                         </header>
                         </div>
                         </article>



                </div>
                <div className="item3">

                  
                <span className="Headerr"> <span id="Htittle"><a href="/" className="aes">Pre Register</a><span id="Sign"> 
                         <i class="fas fa-angle-double-right" />
                           </span></span> 
                           <span id="More">More<span id="more"><i class="fas fa-angle-double-right"></i></span></span></span>                         
                       
                        <article className="card card--wide">
                          
                          <div className="card__media">
                            <img src={empires} alt="Card image" />
                          </div>
                        <div className="card__content">
                         <header className="card__header">
                           <h2 className="card__title">Empires & Puzzels: Epic Matchs</h2>
                             <div className="card__subtitle">By Dashlane <br/>
                               <span id="card__meta">30.30.2020</span>
                            </div>
                         </header>
                         </div>
                         </article>
                         
                        <article className="card card--wide">
                          
                          <div className="card__media">
                            <img src={empires} alt="Card image" />
                          </div>
                        <div className="card__content">
                         <header className="card__header">
                           <h2 className="card__title">Empires & Puzzels: Epic Matchs</h2>
                             <div className="card__subtitle">By Dashlane <br/>
                               <span id="card__meta">30.30.2020</span>
                            </div>
                         </header>
                         </div>
                         </article>
                         
                        <article className="card card--wide">
                          
                          <div className="card__media">
                            <img src={empires} alt="Card image" />
                          </div>
                        <div className="card__content">
                         <header className="card__header">
                           <h2 className="card__title">Empires & Puzzels: Epic Matchs</h2>
                             <div className="card__subtitle">By Dashlane <br/>
                               <span id="card__meta">30.30.2020</span>
                            </div>
                         </header>
                         </div>
                         </article>
                         
                        <article className="card card--wide">
                          
                          <div className="card__media">
                            <img src={empires} alt="Card image" />
                          </div>
                        <div className="card__content">
                         <header className="card__header">
                           <h2 className="card__title">Empires & Puzzels: Epic Matchs</h2>
                             <div className="card__subtitle">By Dashlane <br/>
                               <span id="card__meta">30.30.2020</span>
                            </div>
                         </header>
                         </div>
                         </article>
                         
                        <article className="card card--wide">
                          
                          <div className="card__media">
                            <img src={empires} alt="Card image" />
                          </div>
                        <div className="card__content">
                         <header className="card__header">
                           <h2 className="card__title">Empires & Puzzels: Epic Matchs</h2>
                             <div className="card__subtitle">By Dashlane <br/>
                               <span id="card__meta">30.30.2020</span>
                            </div>
                         </header>
                         </div>
                         </article>
                         
                        <article className="card card--wide">
                          
                          <div className="card__media">
                            <img src={empires} alt="Card image" />
                          </div>
                        <div className="card__content">
                         <header className="card__header">
                           <h2 className="card__title">Empires & Puzzels: Epic Matchs</h2>
                             <div className="card__subtitle">By Dashlane <br/>
                               <span id="card__meta">30.30.2020</span>
                            </div>
                         </header>
                         </div>
                         </article>
                         
                        <article className="card card--wide">
                          
                          <div className="card__media">
                            <img src={empires} alt="Card image" />
                          </div>
                        <div className="card__content">
                         <header className="card__header">
                           <h2 className="card__title">Empires & Puzzels: Epic Matchs</h2>
                             <div className="card__subtitle">By Dashlane <br/>
                               <span id="card__meta">30.30.2020</span>
                            </div>
                         </header>
                         </div>
                         </article>
                         
                        <article className="card card--wide">
                          
                          <div className="card__media">
                            <img src={empires} alt="Card image" />
                          </div>
                        <div className="card__content">
                         <header className="card__header">
                           <h2 className="card__title">Empires & Puzzels: Epic Matchs</h2>
                             <div className="card__subtitle">By Dashlane <br/>
                               <span id="card__meta">30.30.2020</span>
                            </div>
                         </header>
                         </div>
                         </article>
                         
                        <article className="card card--wide">
                          
                          <div className="card__media">
                            <img src={empires} alt="Card image" />
                          </div>
                        <div className="card__content">
                         <header className="card__header">
                           <h2 className="card__title">Empires & Puzzels: Epic Matchs</h2>
                             <div className="card__subtitle">By Dashlane <br/>
                               <span id="card__meta">30.30.2020</span>
                            </div>
                         </header>
                         </div>
                         </article>
                </div>
                <div className="item4">

               
                <span className="Headerr"> <span id="Htittle"><a href="/" className="aes">Discover</a><span id="Sign"> 
                         <i class="fas fa-angle-double-right" />
                           </span></span> 
                           <span id="More">More<span id="more"><i class="fas fa-angle-double-right"></i></span></span></span> 
                        
                            
                        <article className="card--widee">
                          <div className="card__media ">
                            <img src={empires} alt="Card image" id="img" />
                          </div>
                        <div className="card__content">
                          <header className="card__header">
                           <h2 className="card__titlee">Empires & Puzzels: Epic Matchs </h2>  
                             <div className="card__subtitlee">By Dashlane  <br/>
                             <span id="card__metaa">30.30.2020</span>   
                            </div>
                            </header>
                            <div className="card__price">
                            <span id="halfprice">$2.99</span>
                            <span id="price">$4.99</span>
                            <span id="low">-50%</span>
                              </div>
                             </div>
                             </article>
                                 
                        <article className="card--widee">
                          <div className="card__media">
                            <img src={empires} alt="Card image" />
                          </div>
                        <div className="card__content">
                          <header className="card__header">
                           <h2 className="card__titlee">Empires & Puzzels: Epic Matchs </h2>  
                             <div className="card__subtitlee">By Dashlane  <br/>
                             <span id="card__metaa">30.30.2020</span>   
                            </div>
                            </header>
                            <div className="card__price">
                            <span id="halfprice">$2.99</span>
                            <span id="price">$4.99</span>
                            <span id="low">-50%</span>
                              </div>
                             </div>
                             </article>     
                             <article className="card--widee">
                          <div className="card__media">
                            <img src={empires} alt="Card image" />
                          </div>
                        <div className="card__content">
                          <header className="card__header">
                           <h2 className="card__titlee">Empires & Puzzels: Epic Matchs </h2>  
                             <div className="card__subtitlee">By Dashlane  <br/>
                             <span id="card__metaa">30.30.2020</span>   
                            </div>
                            </header>
                            <div className="card__price">
                            <span id="halfprice">$2.99</span>
                            <span id="price">$4.99</span>
                            <span id="low">-50%</span>
                              </div>
                             </div>
                             </article>   
                             <article className="card--widee">
                          <div className="card__media">
                            <img src={empires} alt="Card image" />
                          </div>
                        <div className="card__content">
                          <header className="card__header">
                           <h2 className="card__titlee">Empires & Puzzels: Epic Matchs </h2>  
                             <div className="card__subtitlee">By Dashlane  <br/>
                             <span id="card__metaa">30.30.2020</span>   
                            </div>
                            </header>
                            <div className="card__price">
                            <span id="halfprice">$2.99</span>
                            <span id="price">$4.99</span>
                            <span id="low">-50%</span>
                              </div>
                             </div>
                             </article>   
                             <article className="card--widee">
                          <div className="card__media">
                            <img src={empires} alt="Card image" />
                          </div>
                        <div className="card__content">
                          <header className="card__header">
                           <h2 className="card__titlee">Empires & Puzzels: Epic Matchs </h2>  
                             <div className="card__subtitlee">By Dashlane  <br/>
                             <span id="card__metaa">30.30.2020</span>   
                            </div>
                            </header>
                            <div className="card__price">
                            <span id="halfprice">$2.99</span>
                            <span id="price">$4.99</span>
                            <span id="low">-50%</span>
                              </div>
                             </div>
                             </article>   
                             <article className="card--widee">
                          <div className="card__media">
                            <img src={empires} alt="Card image" />
                          </div>
                        <div className="card__content">
                          <header className="card__header">
                           <h2 className="card__titlee">Empires & Puzzels: Epic Matchs </h2>  
                             <div className="card__subtitlee">By Dashlane  <br/>
                             <span id="card__metaa">30.30.2020</span>   
                            </div>
                            </header>
                            <div className="card__price">
                            <span id="halfprice">$2.99</span>
                            <span id="price">$4.99</span>
                            <span id="low">-50%</span>
                              </div>
                             </div>
                             </article>   
                             <article className="card--widee">
                          <div className="card__media">
                            <img src={empires} alt="Card image" />
                          </div>
                        <div className="card__content">
                          <header className="card__header">
                           <h2 className="card__titlee">Empires & Puzzels: Epic Matchs </h2>  
                             <div className="card__subtitlee">By Dashlane  <br/>
                             <span id="card__metaa">30.30.2020</span>   
                            </div>
                            </header>
                            <div className="card__price">
                            <span id="halfprice">$2.99</span>
                            <span id="price">$4.99</span>
                            <span id="low">-50%</span>
                              </div>
                             </div>
                             </article>   
                             <article className="card--widee">
                          <div className="card__media">
                            <img src={empires} alt="Card image" />
                          </div>
                        <div className="card__content">
                          <header className="card__header">
                           <h2 className="card__titlee">Empires & Puzzels: Epic Matchs </h2>  
                             <div className="card__subtitlee">By Dashlane  <br/>
                             <span id="card__metaa">30.30.2020</span>   
                            </div>
                            </header>
                            <div className="card__price">
                            <span id="halfprice">$2.99</span>
                            <span id="price">$4.99</span>
                            <span id="low">-50%</span>
                              </div>
                             </div>
                             </article>                           
                           
                             </div>
                <div className="item5">  
                <span className="Headerr"> <span id="Htittle"><a href="/" className="aes">Topics</a><span id="Sign"> 
                         <i class="fas fa-angle-double-right" />
                           </span></span> 
                           <span id="More">More<span id="more"><i class="fas fa-angle-double-right"></i></span></span></span> 
                       <div className="con">
                       
                         <div className="containerr">
                         <img src={cats} id="immages" />
                         <div className="containerr text-block">
                         
                         Top Free Games For Andorid

                         </div></div>
                          <div className="containerr">
                         <img src={empires} id="immages" />
                         <div className="containerr text-block">
                         
                         Top New Relases For Android
                         </div></div>
                         <div className="containerr">
                         <img src={cats} id="immages" />
                         <div className="containerr text-block">
                         
                         Top 10 Games For Android

                         </div></div>
                         </div>
                
                </div>      
                              
            </div>
            <div className="main rightt">
                <div className="item11">
                <span className="Headerr"> <span id="Htittle"><a href="/" className="aes" >Editors Choice</a><span id="Sign"> 
                         <i class="fas fa-angle-double-right" />
                           </span></span> 
                           <span id="More">More<span id="more"><i class="fas fa-angle-double-right"></i></span></span></span> 
                <img src={pubg} id="immagess" />
                <div className="articcle">
               <div className="padding">
                <div className="padding card__media ">
                            <img src={empires}  alt="Card image"  
                            
                            
                            />
                            
                          </div></div>
              
                  <div className="conni">
                    <span className="txtone">Creative Destruction<span id="large"><FaStar />8.7</span></span>  <br/>
                    <span className="txttwo">by NetEase Games</span> 
                  
                  </div> 
                </div>
                <hr/>

                <div className="articcle">
               <div className="padding">
                <div className="padding card__media">
                            <img src={empires} alt="Card image" />
                          </div></div>
              
                  <div className="conni">
                  <span className="txtone">Creative Destruction<span id="large"><FaStar />8.7</span></span>  <br/>
                    <span className="txttwo">by NetEase Games</span> 
                  </div> 
                </div>
                <hr/>

                <div className="articcle">
               <div className="padding">
                <div className="padding card__media">
                            <img src={empires} alt="Card image" />
                          </div></div>
              
                  <div className="conni">
                  <span className="txtone">Creative Destruction<span id="large"><FaStar />8.7</span></span>  <br/>
                    <span className="txttwo">by NetEase Games</span> 
                  </div> 
                </div>
                <hr/>

                <div className="articcle">
               <div className="padding">
                <div className="padding card__media">
                            <img src={empires} alt="Card image" />
                          </div></div>
              
                  <div className="conni">
                  <span className="txtone">Creative Destruction<span id="large"><FaStar />8.7</span></span>  <br/>
                    <span className="txttwo">by NetEase Games</span> 
                  </div> 
                </div>
                <hr/>

                <div className="articcle">
               <div className="padding">
                <div className="padding card__media">
                            <img src={empires} alt="Card image" />
                          </div></div>
              
                  <div className="conni">
                  <span className="txtone">Creative Destruction<span id="large"><FaStar />8.7</span></span>  <br/>
                    <span className="txttwo">by NetEase Games</span> 
                  </div> 
                </div>
                <hr/>

                <div className="articcle">
               <div className="padding">
                <div className="padding card__media">
                            <img src={empires} alt="Card image" />
                          </div></div>
              
                  <div className="conni">
                  <span className="txtone">Creative Destruction<span id="large"><FaStar />8.7</span></span>  <br/>
                    <span className="txttwo">by NetEase Games</span> 
                  </div> 
                </div>
                <hr/>

                <div className="articcle">
               <div className="padding">
                <div className="padding card__media">
                            <img src={empires} alt="Card image" />
                          </div></div>
              
                  <div className="conni">
                  <span className="txtone">Creative Destruction<span id="large"><FaStar />8.7</span></span>  <br/>
                    <span className="txttwo">by NetEase Games</span> 
                  </div> 
                </div>
                <hr/>


               
                </div>
                <div className="item22">

                <span className="Headerr">
                   <span id="Htittle">
                   <a href="/" className="aes" >Hot</a>
                   <span id="Sign"> 
                    <i class="fas fa-angle-double-right"></i>
                     </span></span> 
                     
                       </span>


                       <div className="articcle">
                       <span id="numberred">1</span>
               <div className="padding">
                <div className="padding card__media">
                  
                            <img src={empires} alt="Card image"/>
                            
                          </div></div>
              
                  <div className="conni">
                    <span className="txtone">Creative Destruction</span> <br/>
                    <span className="txttwo">by NetEase Games</span> 
                  
                  </div> 
                </div>
                <hr/>
                <div className="articcle">
                       <span id="numberorange">2</span>
               <div className="padding">
                <div className="padding card__media">
                  
                            <img src={empires} alt="Card image"/>
                            
                          </div></div>
              
                  <div className="conni">
                    <span className="txtone">Creative Destruction</span> <br/>
                    <span className="txttwo">by NetEase Games</span> 
                  
                  </div> 
                </div>
                <hr/>
                <div className="articcle">
                       <span id="numberyellow">3</span>
               <div className="padding">
                <div className="padding card__media">
                  
                            <img src={empires} alt="Card image"/>
                            
                          </div></div>
              
                  <div className="conni">
                    <span className="txtone">Creative Destruction</span> <br/>
                    <span className="txttwo">by NetEase Games</span> 
                  
                  </div> 
                </div>
                <hr/>
                <div className="articcle">
                       <span id="numbergray">4</span>
               <div className="padding">
                <div className="padding card__media">
                  
                            <img src={empires} alt="Card image"/>
                            
                          </div></div>
              
                  <div className="conni">
                    <span className="txtone">Creative Destruction</span> <br/>
                    <span className="txttwo">by NetEase Games</span> 
                  
                  </div> 
                </div>
                <hr/>
                <div className="articcle">
                       <span id="numbergray">5</span>
               <div className="padding">
                <div className="padding card__media">
                  
                            <img src={empires} alt="Card image"/>
                            
                          </div></div>
              
                  <div className="conni">
                    <span className="txtone">Creative Destruction</span> <br/>
                    <span className="txttwo">by NetEase Games</span> 
                  
                  </div> 
                </div>
                <hr/>
                <div className="articcle">
                       <span id="numbergray">6</span>
               <div className="padding">
                <div className="padding card__media">
                  
                            <img src={empires} alt="Card image"/>
                            
                          </div></div>
              
                  <div className="conni">
                    <span className="txtone">Creative Destruction</span> <br/>
                    <span className="txttwo">by NetEase Games</span> 
                  
                  </div> 
                </div>
                <hr/>
                <div className="articcle">
                       <span id="numbergray">7</span>
               <div className="padding">
                <div className="padding card__media">
                  
                            <img src={empires} alt="Card image"/>
                            
                          </div></div>
              
                  <div className="conni">
                    <span className="txtone">Creative Destruction</span> <br/>
                    <span className="txttwo">by NetEase Games</span> 
                  
                  </div> 
                </div>
                <hr/>
                <div className="articcle">
                       <span id="numbergray">8</span>
               <div className="padding">
                <div className="padding card__media">
                  
                            <img src={empires} alt="Card image"/>
                            
                          </div></div>
              
                  <div className="conni">
                    <span className="txtone">Creative Destruction</span> <br/>
                    <span className="txttwo">by NetEase Games</span> 
                  
                  </div> 
                </div>
                <hr/>
                <div className="articcle">
                       <span id="numbergray">9</span>
               <div className="padding">
                <div className="padding card__media">
                  
                            <img src={empires} alt="Card image"/>
                            
                          </div></div>
              
                  <div className="conni">
                    <span className="txtone">Creative Destruction</span> <br/>
                    <span className="txttwo">by NetEase Games</span> 
                  
                  </div> 
                </div>
                <hr/>
                <div className="articcle">
                       <span id="numbergray">10</span>
               <div className="padding">
                <div className="padding card__media">
                  
                            <img src={empires} alt="Card image"/>
                            
                          </div></div>
              
                  <div className="conni">
                    <span className="txtone">Creative Destruction</span> <br/>
                    <span className="txttwo">by NetEase Games</span> 
                  
                  </div> 
                </div>
                <hr/>
                <span className="Headerre">
                   <span id="Htittle">More
                   <span id="Sign"> 
                    <i class="fas fa-angle-double-right"></i>
                     </span></span> 
                     
                       </span>


                </div>
                <div className="item33">
                <span className="Headerr">
                   <span id="Htittle"><a href="/" className="aes" >Popular Categories</a>
                   <span id="Sign"> 
                    <i class="fas fa-angle-double-right"></i>
                     </span></span></span>
                    <div class="flex">
                    <ul className="padd">
  <li  >  <img src={empires} className="h"/>
<span className="g cool-link"> Adventure</span></li><br/>
<li>  <img src={empires} className="h"/>
<span className="g  cool-link"> Music & Audio</span></li><br/>
<li>  <img src={empires} className="h"/>
<span className="g  cool-link"> Game</span></li><br/>
<li>  <img src={empires} className="h"/>
<span className="g  cool-link"> Travel</span></li><br/>
<li>  <img src={empires} className="h"/>
<span className="g  cool-link"> Personalizition</span></li><br/>
<li>  <img src={empires} className="h"/>
<span className="g  cool-link"> Productivity</span></li><br/>
<li>  <img src={empires} className="h"/>
<span className="g  cool-link"> Video</span></li><br/>
<li>  <img src={empires} className="h"/>
<span className="g  cool-link"> Simulation</span></li><br/>
<li>  <img src={empires} className="h"/>
<span className="g  cool-link"> Music</span></li><br/>
<li>  <img src={empires} className="h"/>
<span className="g  cool-link"> Card</span></li><br/>

 
</ul>
<ul className="padd">
<li>  <img src={empires} className="h"/>
<span className="g  cool-link"> Entairment</span></li><br/>
<li>  <img src={empires} className="h"/>
<span className="g  cool-link"> Action</span></li><br/>
<li>  <img src={empires} className="h"/>
<span className="g  cool-link"> Acrade</span></li><br/>
<li>  <img src={empires} className="h"/>
<span className="g  cool-link"> Education</span></li><br/>
<li>  <img src={empires} className="h"/>
<span className="g  cool-link"> Busnis</span></li><br/>
<li>  <img src={empires} className="h"/>
<span className="g  cool-link"> Sports</span></li><br/>
<li>  <img src={empires} className="h"/>
<span className="g  cool-link"> Chat</span></li><br/>
<li>  <img src={empires} className="h"/>
<span className="g"> Netflix</span></li><br/>
<li>  <img src={empires} className="h"/>
<span className="g  cool-link"> Racing</span></li><br/>
<li>  <img src={empires} className="h"/>
<span className="g  cool-link"> Puzzel</span></li><br/>

</ul>


</div>
                </div>
              
            </div>
        </div>

          
        </div>
        
        </>
    )
}

export default Flexbox
