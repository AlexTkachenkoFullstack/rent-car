import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
export const FooterSection =styled.footer`
width:100%;
background-color:rgb(191 185 185);
font-size:12px;
line-height:1.24;
font-weight:500;
font-family: Manrope, sans-serif;
@media (min-width: 834px) {
    height:110px;
    font-size:14px;
    line-height:1.33;
  }
  @media (min-width: 1440px) {
    height:140px;
    font-size:18px;
    line-height:1.33;
  }
`

export const FooterContainer=styled.div`
display:flex;
justify-content: space-between;
flex-direction: column;
height: 100%;
padding-top:10px;
padding-bottom:10px;
@media (min-width: 834px) {
    padding-top:20px;
    padding-bottom:20px;    
    flex-direction: row;
  }
`

export const LinkLogo=styled(NavLink)`
font-size:24px;
color:black;
font-family:Open Sans;
font-weight: 400;


&:hover, &:focus{
    color: rgb(22 174 211);  
}

&.active{
    color: rgb(22 31 151);
}
`

export const Logo=styled.img`
width:34px;
border-radius: 7px;
filter: contrast(0.5);
margin-bottom:7px;
@media (min-width: 834px) {
    width:60px;
    margin-bottom:0;
  }
`

export const FooterLinksContainer=styled.div`
`

export const FooterLinksList=styled.ul`
display:none;
@media (min-width: 834px) {
    display:flex;
    flex-direction:column;
  }
`

export const FooterLinkItem=styled.li`
`

export const FooterLink=styled(NavLink)`
color:black;
font-family:Open Sans;
font-weight: 400;

&:hover, &:focus{
    color: rgb(22 174 211);  
}

&.active{
    color: rgb(22 31 151);
}
`

export const FooterContactsContainer=styled.div`
margin-bottom:7px;
@media (min-width: 834px) {
    margin-bottom:0;
  }
`

export const FooterContact=styled.p`
`

export const FooterSocial=styled.div`
`

export const FooterSocialList=styled.ul`
display:flex;
gap: 15px;
@media (min-width: 834px) {
    gap:0;
    justify-content: space-evenly;
    margin-top:10px;    
  }
`
export const FooterSocialItem=styled.li`
`

export const FooterSocialLink=styled.a`
`

export const FacebookIcon=styled(BiLogoFacebookCircle)`
width:24px;
height:24px;
color:rgb(56 56 215);
&:hover, &:focus{
    color: rgb(22 174 211);  
}
@media (min-width: 834px) {
    width:30px;
    height:30px;       
  }
`

export const TwitterIcon=styled(AiFillTwitterCircle)`
width:24px;
height:24px;
color:rgb(56 56 215);
&:hover, &:focus{
    color: rgb(22 174 211);  
}
@media (min-width: 834px) {
    width:30px;
    height:30px;       
  }
`

export const InstagramIcon=styled(AiFillInstagram)`
width:24px;
height:24px;
color:rgb(56 56 215);
&:hover, &:focus{
    color: rgb(22 174 211);  
}
@media (min-width: 834px) {
    width:30px;
    height:30px;       
  }
`