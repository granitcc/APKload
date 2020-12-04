
import React from 'react'
import './footer.scss'
import {
    FooterContainer,
    FooterWrap,
    FooterLinkContainer,
    FooterLinkWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocailIconLink,
    FooterLinks,
    WebsiteRights,
    WebsiteRightsNumber
} from './FooterElements'
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaAndroid,
    FaPhone

} from 'react-icons/fa';
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                 <FooterLinkContainer>
                     <FooterLinkWrapper>
                         <FooterLinks>
<div className="allcon">
    <div className="alllcon">
    <div className="apklogo">
    <FaAndroid id="sizeFA"/>
    </div>
    <div className="apktext">
    Apk Load
    </div>
    </div>
    <div className="appktext">
    <h4>
Android Package is the package file format
used b the Android operating system ,and a 
number of other Android-based operating  
systems for distributin and instailion of
mobile apps, mobile games and middleware.</h4>
    </div>
    <div className="sociall"> <br/> <br/>
              <a href="/" id="a"><FaFacebook /></a>
              <a href="#" id="a"><FaTwitter/></a>
              <a href="/" id="a"><FaInstagram /></a>
              <a href="/" id="a"><FaYoutube /></a>
            </div>
    
</div>


                {/*}     <div className="left box left_box"><br/>
                     <h2> <FaAndroid id="sizeFA"/>Apk Load</h2><br/><div className="content">
            <p>
Android Package is the package file format<br/>
used b the Android operating system ,and a  <br/>
number of other Android-based operating  <br/>
systems for distributin and instailion of <br/>
mobile apps, mobile games and middleware.</p>
<div className="sociall"> <br/> <br/>
              <a href="/" id="a"><FaFacebook /></a>
              <a href="#" id="a"><FaTwitter/></a>
              <a href="/" id="a"><FaInstagram /></a>
              <a href="/" id="a"><FaYoutube /></a>
            </div>
</div>
    </div> */} </FooterLinks>

                         <FooterLinkItems>
                             <FooterLinkTitle> COMPANY    </FooterLinkTitle>
                                 <FooterLink to="about-us">About us </FooterLink>
                                 <br/>
                                 <FooterLink to="why-apkload">Why ApkLoad </FooterLink>
                                 <br/>
                                 <FooterLink to="careers">Careers </FooterLink>
                                 <br/>
                                 <FooterLink to="blog">Blog </FooterLink>
                                 <br/>
                                 <br/>
                                 <br/>
                                 <br/>
                                 <FooterLink to="legal-infromation">Legal Information </FooterLink>
                         </FooterLinkItems>

                         <FooterLinkItems>
                             <FooterLinkTitle> OUR PRODUCTS   </FooterLinkTitle>
                        
                                 <FooterLink to="apkload-apps">ApkLoad Apps </FooterLink>
                                 <br/>
                                 <FooterLink to="apkload-games">ApkLoad Games</FooterLink>
                                 <br/>
                                 <FooterLink to="appcoins-wallet">AppCoins Wallet</FooterLink>
                                 <br/>
                                 <FooterLink to="support">Support </FooterLink>
                                 <br/>
                                 <br/>
                                 <br/>
                                 <br/>
                                 <FooterLink to="cookie-policy">Cookie Policy </FooterLink>
                         </FooterLinkItems>

                         <FooterLinkItems>
                             <FooterLinkTitle> OUR SERVICE   </FooterLinkTitle>
                                 <FooterLink to="co-brand">Co Brand</FooterLink>
                                 <br/>
                                 <FooterLink to="developers">Developer </FooterLink>
                                 <br/>
                                 <FooterLink to="appcoins-protocol">AppCoins Protocol </FooterLink>
                                 <br/>
                                 <FooterLink> </FooterLink>
                                 <br/>
                                 <br/>
                                 <br/>
                                 <br/>
                                 <br/>
                                
                                 
                                 <FooterLink to="privacy-policy">Privacy Policy</FooterLink>
                         </FooterLinkItems>
                     </FooterLinkWrapper>
                 </FooterLinkContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            Apk Load
                        </SocialLogo>
    
                   
                  {/* <SocialIcons>
                       <SocailIconLink href="/" traget="_blank" aria-label="Facebook">
                           <FaFacebook />
                       </SocailIconLink>

                       <SocailIconLink href="/" traget="_blank" aria-label="Instagram">
                           <FaInstagram />
                       </SocailIconLink>

                       <SocailIconLink href="/" traget="_blank" aria-label="Youtube">
                           <FaYoutube />
                       </SocailIconLink>

                       <SocailIconLink href="/" traget="_blank" aria-label="Twitter">
                       <FaTwitter />
                       </SocailIconLink>

                  </SocialIcons> */}
                  

                    </SocialMediaWrap>
                    <hr  style={{
                   color: '#fff',
                   backgroundColor: '#fff',
                   height: 1.5,
                   borderColor : '#fff' }}/>
                    <br/><br/>
        <WebsiteRights>ApkLoad  {new Date().getFullYear()} ©  All rights reserved.</WebsiteRights>
        <WebsiteRightsNumber><FaPhone/> +383(0) 45 111-555</WebsiteRightsNumber>
                
                
    </SocialMedia>
          </FooterWrap>
</FooterContainer>
        
    )
}

export default Footer
