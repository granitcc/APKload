import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';

export const SidebarContainer = styled.aside`
    position:fixed;
    z-index:999;
    width:100%;
    height:100%;
    background:#0a1450;
    display:grid;
    align-items:center;
    top:0;
    left:0;
    transition:0.45s ease-in-out;
    opacity:${({isOpen}) =>(isOpen ? '99%' : '0')};
    top:${({isOpen}) => (isOpen ? '0' :'-100%')};


`;
export const CloseIcon = styled(FaTimes)`
    color:#fff;
`
export const Icon =styled.div`
    position:absolute;

    top:1.2rem;
    right:1.5rem;
    background:transparent;
    font-size:2rem;
    cursor:pointer;
    outline:none;
`
export const SidebarWrapper =styled.div`
    color:#fff;
`;

export const SidebarMenu = styled.div`
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:repeat(6,110px);
    text-align:center;

@media screen and (max-width:480px){
    grid-template-rows:repeat(6,90px);
}
@media screen and (max-width:360px){
    grid-template-rows:repeat(6,70px);
}

`;

export const SidebarLink =styled(LinkR)`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:2.0rem;
    margin-top:3rem;
    text-decoration:none;
    list-style:none;
    text-decoration:none;
    padding-top:1rem;
    color:#fff;
    cursor:pointer;
    animation: 1.2s ease-in 1s 1 reverse both running slidein;
    @keyframes slidein {
  from { transform: scaleX(1); }
  to   { transform: scaleX(0); }
}
    @media screen and (max-width:360px){
    grid-template-rows:repeat(6,70px);
    font-size:1.3rem;

}


`

export const SideBtnWrap = styled.div`
    display:flex;
    justify-content:center;
    

  
    

`
export const SidebarRoute =styled(LinkR)`
    border-radius:50px;
    white-space:nowrap;
    padding:16px 64px;
    background:#fff;
    font-size:16px;
    outline:none;
    border-top:2px solid white;
    border-bottom:2px solid white;
    background: rgb(46, 240, 46);
    align-items:center;
    font-size:1.2rem;
    font-weight:bold;
    margin-bottom:1rem;
    cursor:pointer;
    transition:all 0.3s ease-in-out; 
    text-decoration:none;
    

&:hover {
    transition:all 0.2s ease-in-out;
    background:#fff;
    color:#010606;
}

`
