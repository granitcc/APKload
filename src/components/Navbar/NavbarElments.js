import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'



//margin-top:-80px;
export const Nav = styled.nav`
   padding-left:1%;
    position:fixed;
    width:100%;
    overflow:none;
    background: linear-gradient(90deg, rgba(0,212,255,1) 1%, rgba(19,146,217,1) 24%, rgba(9,9,121,1) 58%, rgba(9,9,121,1) 90%);
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:1rem;
    position:0;
    top:0;
    z-index:10;
    box-shadow: 0 11px 10px -15px rgba(38, 179, 215, 100); 

@media screen and (max-width: 1034px) {
    transistion:0.3s all ease;
    background:#0a2454;
}
`;
export const NavbarContainer = styled.div`
   display:flex;
   justify-content:center;
   height:80px;
   z-index:2;
   width:100%;
   padding:0px;
  /* max-width:1100px;  */
   @media screen and (max-width: 1034px) {
    justify-content:space-between;

}


`;
export const NavLogo = styled(LinkR)`
   color:#fff;
   justify-self:flex-start;
   cursor:pointer;
   font-size:1.5rem;
   display:flex;
   align-items:center;
   font-weight:Bold;
   text-decoration:none;

   text-transform: uppercase;
  font-weight: 600;
  overflow: hidden;

  &:hover {
    color:rgb(4, 255, 58);
  }
  &::after {
    content: '';
    position: absolute;
    height: 16px;
    width: 100%;
    top: 50%;
    margin-top: -8px;
    right: 0;
    background: #f9f9f9;
    transform: translate3d(-100%,0,0);
    transition: transform 0.4s;
    transition-timing-function: cubic-bezier(0.7,0,0.3,1);
  }
  &:hover::after {
    transform: translate3d(100%,0,0);
  }
  &::before{
    content: attr(data-letters);
    position: absolute;
    z-index: 2;
    overflow: hidden;
    color: #424242;
    white-space: nowrap;
    width: 0%;
    transition: width 0.4s 0.3s;
  }
  &:hover::before {
    width: 100%;
  }

&:hover {
    -webkit-transform: translate( 0px, -4px);
    font-size:1.3rem;
}
@media screen and (max-width: 600px) {
   font-size:1.5rem;
   padding-left:0;
   margin-left:0;
   justify-content:left;
}

` ;
export const MobileIcon =styled.div`
    display:none;

@media screen and (max-width :1034px) {
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-100%,60%);
    font-size:1.8rem;
    cursor:pointer;
    color: #fff;
}
`;

export const NavMenu = styled.ul `
   display:flex;
   align-items:center;
   list-style:none;
   text-align:center;

@media screen and (max-width:1034px) {
    display:none;
}

`;


export const NavItems = styled.li `
   height:0px;
   padding:2rem;
&:hover {
    border-bottom:5px solid rgb(4, 255, 58);
    
  transition: width .3s;
}
`;
export const NavItemss = styled.li `

  

`;
//NavScroll

export const NavLinks = styled(LinkR)`
   color:#fff;
   display:flex;
   align-items:center;
   text-decoration:none;
   padding:0.1rem;
   height:100%;
   cursor:pointer;

&:hover{
    color:rgb(4, 255, 58);}


`;
export const NavBtn = styled.nav `
   align-items:center;
   display:flex;
   
    background: none;
    color: #1d1d1d;
    cursor: pointer;
    font-size: 1em;
    padding-left: 5.5rem;
    border: 0;
    transition: all 0.5s;
    border-radius: 10px;
    width: auto;
    position: relative;
    min-width: 150px;

    &::after {
        content: "\f2f6 Login";
       
        font-family: "Font Awesome 5 Pro";
        font-weight: 500;
        position: absolute;
        left: 60%;
        top: 54%;
        right: 0;
        font-size:20px;
        bottom: 0;
        opacity: 0;
        transform: translate(-50%, -50%);

    }

    &:hover {
        background: rgb(46, 240, 46);
        transition: all 0.5s;
        border-radius: 26px;
        box-shadow: 2px 6px 15px #0000ff61;
        padding: 1.5rem 3rem 1.5rem 1.5rem;
        color: #ffffff;
        font-size:1em;

        &::after {

            opacity: 1;
            transition: all 0.5s;
            color: #ffffff;

        }
    }

@media screen and (max-width: 1034px) {
    display:none;
}
`;
export const NavBtnLink = styled(LinkR)`
   
    text-decoration:none;
    color:white;
    



`
