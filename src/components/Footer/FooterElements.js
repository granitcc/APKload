import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer =styled.footer`
//background: linear-gradient(90deg, rgba(0,212,255,1) 1%, rgba(19,146,217,1) 24%, rgba(9,9,121,1) 58%, rgba(9,9,121,1) 90%);
        // background-color:rgb(31, 27, 27);
background:#211e1e;
        font-family:helvetica;
        padding-top:3rem;
        justify-content:center;
   
@media screen and (max-width: 1032px){
    transistion:0.3s all ease;
    background:#0a2454;
}
@media screen and (max-width: 800px){
    display:flex;
    justify-content:center;
    align-items:center;
}


`;

export const FooterWrap = styled.div`
    padding:8px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    margin:0 auto;
    @media screen and (max-width: 800px){
    padding-right:1rem;
    padding-left:1rem;
    margin:0px;
    font-family:helvetica;


}

`
export const FooterLinkContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    font-family:helvetica;

@media screen and (max-width:1033) {
    
    padding-top:22px;
}

`
export const FooterLinkWrapper =styled.div`
    display:flex;
@media screen and (max-width:1033px) {
        display: flex;
        flex-wrap: wrap;
        align-items:center;
        justify-content:center;
    
    
}


`

export const FooterLinkItems = styled.div`

display:flex;
flex-direction:column;
align-items:flex-start;
margin:26px;
align-items:center;
width:200px;
box-sizing:border-box;
font-family:helvetica;
color:#fff;
@media screen and (max-width:420px) {
    display: flex;
    flex-wrap: wrap;

}

`
export const FooterLinkTitle =styled.h1`
    font-size:19px;
    margin-bottom:16px;
`
export const FooterLink =styled(Link)`
    color:#fff;
    text-decoration:none;
    font-size:15px;
    display:flex;
    

&:hover {
    color:white;
    font-weight:bold;
    transition:0.1s ease-out;
    font-size:15.5px;
    -webkit-transform: translate( 0px, -2px);
    
}
`
export const FooterLinks =styled(Link)`
    color:#fff;
    text-decoration:none;
    font-size:15px;
    display:flex;
`
export const SocialMedia =styled.section `
    max-width:1000px;
    width:100%;
`
export const SocialMediaWrap = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    max-width:1100px;
    margin:40px auto 0 auto;

@media screen and (max-width:520px)
{
    flex-direction:column;

}

`
export const SocialLogo =styled(Link)`
    color:#fff;
    justify-self:start;
    cursor:pointer; 
    text-decoration:none;
    font-size:1.5rem;
    display:flex;
    align-items:center;
    margin-bottom:16px;
    font-weight:bold;
`

export const WebsiteRights = styled.small`
    color:#fff;
    margin-bottom:16px;
    position:center;
    align-items:center;
    
@media screen and (max-width:400px)
{
    display:flex;
    gap:10px;
    flex-direction:column;
}
@media screen and (max-width:350px)
{
}
    
`
export const WebsiteRightsNumber = styled.small`
    color:#fff;
    margin-bottom:16px;
    position:right;
    float:right;
    align-items:right;
    @media screen and (max-width:400px)
{
   margin-right:1rem;

}
@media screen and (max-width:400px)
{
    
   margin-right:1rem;

}
@media screen and (max-width:350px)
{
    margin-top:0.3rem;
   margin-right:2rem;

}


`

export const SocialIcons =styled.div`
    display:flex; 
    justify-content:space-between;
    align-items:center;
    width:240px;
`
export const SocailIconLink = styled.a`
color:#fff;
font-size:24px;
`
