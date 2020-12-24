
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
   NavLinks}
from './NavbarElments';

import {
    FaBars,
    FaAndroid
} from 'react-icons/fa';
import android from '../images/android.png'
import './navBar.scss'

const Navbar = ({ toggle }) => {

    return (
        <>
<Nav>

            
    <NavbarContainer>
       
    <div class="search-box">
   <input type="text" name="" class="search-txt" placeholder="Search..."/>
   <a class="search-btn">
    <i class="far fa-search"></i>
   </a>
  </div>

        <NavLogo to='/'><img src={android} width="50" />
         Apk Load</NavLogo>
         <MobileIcon onClick={toggle}>
             <FaBars />
         </MobileIcon>
         <NavMenu>
    <NavItems><NavLinks to='/games'> <i class="fas fa-gamepad"> </i><FormattedMessage id="NavBar.Menu.games"/>    </NavLinks></NavItems>
             <NavItems><NavLinks to='/app'><i class="fas fa-th"> </i> APPS </NavLinks></NavItems>
             <NavItems><NavLinks to='/apkloadappfeatures'><i class="fas fa-bars"> </i> TOPIC</NavLinks></NavItems>
             <NavItems><NavLinks to='/install'><i class="fas fa-cube"> </i>PRODUCTS</NavLinks></NavItems>
            {/*  <NavItems><NavLinks to='signup'>SIGN UP </NavLinks></NavItems> */}
            </NavMenu> 
         <NavBtn>

        
              
 <NavBtnLink to="/signin">Login</NavBtnLink>
         </NavBtn>  
         
    </NavbarContainer>
</Nav>

        </>
    );
}

export default Navbar
