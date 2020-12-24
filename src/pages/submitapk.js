import React, { useState } from 'react'
import Sidebar from '../components/Sidebar' 
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import android from '../components/images/android.png'
import fileupload from '../components/images/fileupload.jpg'

import './submitapk.scss'

function SubmitapkPage() {




    const [isOpen,setIsOpen] = useState(false);
  
    const toggle = () =>{
        setIsOpen(!isOpen);
    }
    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
         <Navbar toggle={toggle} />  
       
       <div className="submit-apk">
      <div className="left">
        <img className="image" src={android}/>
        
        <p className="head">Submit an APK</p>

        <p id="p">  Every apk file is manaually reviews by the APKoad
        team before being posted to the site.Your name may be shown pupblicaly.
         </p>
         <p id="pp"> After you've signed for a APKload account, you can upload apps to APKloadusing your Developer Console.
        update and distribute app to all APKload user.
         </p>
      </div>
   

      <div className="right">
        <div className="containere con">
          <form >
            <div className="data1">
            <img src={fileupload} className="haj"/>
            <p id="color">UPLOAD YOUR APPLICATION</p>
            </div>
            <div className="data2">
            <div className="elementt">
                       <label for="package" className="enem">Package Name</label>
                       <div class="input-container">
                       <i class="far fa-th icon"></i><input class="input-field ip " type="text" placeholder="Enter Package Name" name="pcgname"/>
  </div></div>
            </div>
            <div className="passwords">
                             
                             <div className="pwd1">
                             
                             <label for="pwd">Password</label>
                             <div class="input-container">
                             <i class="fas fa-lock-alt icon"></i>                
<input  class="input-field ip"  type="password" placeholder="Enter Password" name="pwd" />
                             </div></div>
                             <div className="pwd2">
                             <label for="confirm">Confirm Password</label>
                             <div class="input-container">
                             <i class="fas fa-lock-alt icon"></i>
<input class="input-field ip"  type="password" placeholder="Confirm Password" name="confirm"  />

                             </div></div> </div>
                             <div className="elementt">
                       <label for="email" className="enem">Email address</label>
                       <div class="input-container">
<i class="fas fa-envelope icon"></i>    <input class="input-field ip " type="text" placeholder="Email" name="usrnm"/>
  </div></div>
  <div className="btt"><button className="bt" value="submit"><span id="tt">S U B M I T</span><span id="ttt">P A C K A G E</span></button></div>
<span id="txt">Only support APK file no largen than 2000MB</span>
          </form>
        </div>
      </div>


       </div>




         <Footer />
        </>
    )
}

export default SubmitapkPage
