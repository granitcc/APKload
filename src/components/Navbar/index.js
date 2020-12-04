
import {React }from 'react'
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

const Navbar = ({ toggle }) => {

    return (
        <>
<Nav>

            
    <NavbarContainer>
        <NavLogo to='/'><FaAndroid /> Apk Load</NavLogo>
         <MobileIcon onClick={toggle}>
             <FaBars />
         </MobileIcon>
         <NavMenu>
             <NavItems><NavLinks to='games'> <i class="fas fa-gamepad"> </i>GAMES    </NavLinks></NavItems>
             <NavItems><NavLinks to='apps'><i class="fas fa-th"> </i> APPS </NavLinks></NavItems>
             <NavItems><NavLinks to='topic'><i class="fas fa-bars"> </i> TOPIC</NavLinks></NavItems>
             <NavItems><NavLinks to='products'><i class="fas fa-cube"> </i>PRODUCTS</NavLinks></NavItems>
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
