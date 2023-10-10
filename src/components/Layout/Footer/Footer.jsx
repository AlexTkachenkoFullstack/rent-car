import {FooterSocial,FooterSocialList, FooterSocialItem, FooterSocialLink, FacebookIcon,  InstagramIcon, FooterContact, FooterContactsContainer, FooterContainer, FooterLink, FooterLinkItem, FooterLinksContainer, FooterLinksList, FooterSection, LinkLogo, Logo, TwitterIcon } from "./Footer.styled";
import logo from './/..//..//..//assets/images/logo.svg'

const Footer=()=>{
    return (
                <FooterSection >
                    <FooterContainer className="container">
                                <LinkLogo to='/'>
                                    <Logo src={logo} alt='car-logo'/>
                                </LinkLogo>
                                <FooterLinksContainer>
                                    <FooterLinksList>
                                        <FooterLinkItem>
                                            <FooterLink to='/'>About us</FooterLink>
                                        </FooterLinkItem>
                                        <FooterLinkItem>
                                            <FooterLink to='/catalog'>Our catalog</FooterLink>
                                        </FooterLinkItem>
                                        <FooterLinkItem>
                                            <FooterLink to='/favorites'>Your favorites</FooterLink>
                                        </FooterLinkItem>
                                    </FooterLinksList>
                                </FooterLinksContainer>
                                <FooterContactsContainer>
                                    <FooterContact>Contact Information:</FooterContact>
                                    <FooterContact>Address: 14000, Chernihiv, Shevchenko street, 27</FooterContact>
                                    <FooterContact>Phone: +38(093)11-33-254</FooterContact>
                                    <FooterContact>Email: rent-car@.ukr.net</FooterContact>
                                </FooterContactsContainer>
                                <FooterSocial>
                                    <FooterContact>We are on social media:</FooterContact>
                                    <FooterSocialList>
                                        <FooterSocialItem>
                                            <FooterSocialLink href="https://www.facebook.com/RentcarsUS/" target="_blank" title="Facebook">
                                                <FacebookIcon/>
                                            </FooterSocialLink>
                                        </FooterSocialItem>
                                        <FooterSocialItem>
                                            <FooterSocialLink href="https://twitter.com/rentalcarsuk" target="_blank" title="Twitter">
                                                <TwitterIcon/>
                                            </FooterSocialLink>
                                        </FooterSocialItem>
                                        <FooterSocialItem>
                                            <FooterSocialLink href="https://www.instagram.com/rentcars.com/" target="_blank" title="Instagram">
                                                <InstagramIcon />
                                            </FooterSocialLink>
                                        </FooterSocialItem>
                                    </FooterSocialList>
                                </FooterSocial>

                        
            {/* 
                <div class="footer-links">
                 
                </div>
                <div class="footer-contact">
                    <p>Контактная информация:</p>
                    <p>Адрес: [Адрес Компании]</p>
                    <p>Телефон: [Номер телефона]</p>
                    <p>Email: [Email Компании]</p>
                </div>
            </div>
            <div class="footer-social">
                <p>We are on social media:</p>
                <ul>
                    <li><a href="#" target="_blank"><img src="facebook-icon.png" alt="Facebook"/></a></li>
                    <li><a href="#" target="_blank"><img src="twitter-icon.png" alt="Twitter"/></a></li>
                    <li><a href="#" target="_blank"><img src="instagram-icon.png" alt="Instagram"/></a></li>
                </ul>
            </div> */}
                
            </FooterContainer>
        </FooterSection>
    );
}

export default Footer