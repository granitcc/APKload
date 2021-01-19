
import {React }from 'react'
import {FormattedMessage} from 'react-intl'
import {
   Nav,
   NavbarContainer,
   NavLogo,
   MobileIcon,
   NavMenu,
   NavItems,
   NavBtn,
   NavBtnLink,
   NavLinks,
NavItemss}
from './NavbarElments';

import {
    FaBars,
    FaAndroid
} from 'react-icons/fa';
import android from '../images/android.png'
import man11 from '../images/man11.png'
import './navBar.scss'

const Navbar = ({ toggle }) => {

    return (
        <>
<Nav>

            
    <NavbarContainer>
       
    {/* <div class="search-box">
   <input type="text" name="" class="search-txt" placeholder="Search..."/>
   <a class="search-btn">
    <i class="far fa-search"></i>
   </a>
  </div> */}
     
        <NavLogo to='/'>
       
            <img src={android} width="30" />
         Apk Load</NavLogo>
         <MobileIcon onClick={toggle}>
             <FaBars />
         </MobileIcon>
         <NavMenu>
             <NavItemss>
                 <div className="search">
                 <ul>
        <li>
            <p className="all-ll">All ▾</p>
            <ul class="dropdown">
           
            <ul className="games-left-list-apps">
               <p className="Style">Apps</p> 
              <li>
                <span className="g  cool-link">Art & Desgine</span>
              </li>
              <li>
                <span className="g  cool-link">Augmented Reality</span>
              </li>
              <li>
                <span className="g  cool-link">Auto & Vehicle</span>
              </li>
              <li>
                <span className="g  cool-link">Beauty</span>
              </li>
              <li>
                <span className="g  cool-link">Books</span>
              </li>
              <li>
                <span className="g  cool-link">Business</span>
              </li>
              <li>
                <span className="g  cool-link">Comics</span>
              </li>
              <li>
                <span className="g  cool-link">Communication</span>
              </li>
              <li>
                <span className="g  cool-link">Dating</span>
              </li>
              <li>
                <span className="g  cool-link">Daydream</span>
              </li>
              <li>
                <span className="g  cool-link">Education</span>
              </li>
              <li>
                <span className="g  cool-link">Entertainment</span>
              </li>
              <li>
                <span className="g  cool-link">Events</span>
              </li>
              <li>
                <span className="g  cool-link">Finance</span>
              </li>
              <li>
                <span className="g  cool-link">Food & Drink</span>
              </li>
              <li>
                <span className="g  cool-link">health & Fitness</span>
              </li>
              <li>
                <span className="g  cool-link">House & Home</span>
              </li>
              <li>
                <span className="g  cool-link">Libraries & Demo</span>
              </li>
              <li>
                <span className="g  cool-link">Lifestyle</span>
              </li>
              <li>
                <span className="g  cool-link">Maps & Navigation</span>
              </li>
              <li>
                <span className="g  cool-link">Medical</span>
              </li>
              <li>
                <span className="g  cool-link">Music & Audio</span>
              </li>
              <li>
                <span className="g  cool-link">New & magazines</span>
              </li>
              <li>
                <span className="g  cool-link">Parenting</span>
              </li>
              <li>
                <span className="g  cool-link">Personalizitaion</span>
              </li>
              <li>
                <span className="g  cool-link">Photography</span>
              </li>
            </ul>
           

            <ul className="games-left-list-games">
            <p className="Style">Games</p> 
              <li>
                <span className="g  cool-link">Art & Desgine</span>
              </li>
              <li>
                <span className="g  cool-link">Augmented Reality</span>
              </li>
              <li>
                <span className="g  cool-link">Auto & Vehicle</span>
              </li>
              <li>
                <span className="g  cool-link">Beauty</span>
              </li>
              <li>
                <span className="g  cool-link">Books</span>
              </li>
              <li>
                <span className="g  cool-link">Business</span>
              </li>
              <li>
                <span className="g  cool-link">Comics</span>
              </li>
              <li>
                <span className="g  cool-link">Communication</span>
              </li>
              <li>
                <span className="g  cool-link">Dating</span>
              </li>
              <li>
                <span className="g  cool-link">Daydream</span>
              </li>
              <li>
                <span className="g  cool-link">Education</span>
              </li>
              <li>
                <span className="g  cool-link">Entertainment</span>
              </li>
              <li>
                <span className="g  cool-link">Events</span>
              </li>
              <li>
                <span className="g  cool-link">Finance</span>
              </li>
              <li>
                <span className="g  cool-link">Food & Drink</span>
              </li>
              <li>
                <span className="g  cool-link">health & Fitness</span>
              </li>
              <li>
                <span className="g  cool-link">House & Home</span>
              </li>
              <li>
                <span className="g  cool-link">Libraries & Demo</span>
              </li>
              <li>
                <span className="g  cool-link">Lifestyle</span>
              </li>
              <li>
                <span className="g  cool-link">Maps & Navigation</span>
              </li>
              <li>
                <span className="g  cool-link">Medical</span>
              </li>
              <li>
                <span className="g  cool-link">Music & Audio</span>
              </li>
              <li>
                <span className="g  cool-link">New & magazines</span>
              </li>
              <li>
                <span className="g  cool-link">Parenting</span>
              </li>
              <li>
                <span className="g  cool-link">Personalizitaion</span>
              </li>
              <li>
                <span className="g  cool-link">Photography</span>
              </li>
            </ul>
   
            </ul>
        </li>
    </ul>
                 <input type="text" name="" className="sear" placeholder="Search..."/>
                    <button className="helli">
                    <i class="far fa-search"></i>
                    </button>
                 </div>
             </NavItemss>
    <NavItems><NavLinks to='/games'> <i class="fas fa-gamepad"> </i><FormattedMessage id="NavBar.Menu.games"/>    </NavLinks></NavItems>
             <NavItems><NavLinks to='/app'><i class="fas fa-th"> </i><FormattedMessage id="NavBar.Menu.apps"/>    </NavLinks></NavItems>
             <NavItems><NavLinks to='/apkloadappfeatures'><i class="fas fa-bars"> </i><FormattedMessage id="NavBar.Menu.topic"/>   </NavLinks></NavItems>
             <NavItems><NavLinks to='/install'><i class="fas fa-cube"> </i><FormattedMessage id="NavBar.Menu.products"/>  </NavLinks></NavItems>
            {/*  <NavItems><NavLinks to='signup'>SIGN UP </NavLinks></NavItems> */}
            </NavMenu> 
         <NavBtn>

        
              
 <NavBtnLink to="/signin"><img src={man11} /> </NavBtnLink>
         </NavBtn>  
         
    </NavbarContainer>
</Nav>

        </>
    );
}

export default Navbar
