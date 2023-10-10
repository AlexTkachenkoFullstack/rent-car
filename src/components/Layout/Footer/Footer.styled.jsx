import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
export const FooterSection =styled.footer`
width:100%;
height:140px;
background-color:rgb(191 185 185);
font-size:18px;
line-height:1.33;
font-weight:500;
font-family: Manrope, sans-serif;
`

export const FooterContainer=styled.div`
display:flex;
justify-content: space-between;
height: 100%;
padding-top:20px;
padding-bottom:20px;
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
width:60px;
border-radius: 9px;
filter: contrast(0.5);
`

export const FooterLinksContainer=styled.div`
`

export const FooterLinksList=styled.ul`
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
`

export const FooterContact=styled.p`
`

export const FooterSocial=styled.div`
`

export const FooterSocialList=styled.ul`
display:flex;
justify-content: space-evenly;
margin-top:10px;
`
export const FooterSocialItem=styled.li`
`

export const FooterSocialLink=styled.a`
`

export const FacebookIcon=styled(BiLogoFacebookCircle)`
width:30px;
height:30px;
color:rgb(56 56 215);
&:hover, &:focus{
    color: rgb(22 174 211);  
}
`

export const TwitterIcon=styled(AiFillTwitterCircle)`
width:30px;
height:30px;
color:rgb(56 56 215);
&:hover, &:focus{
    color: rgb(22 174 211);  
}
`

export const InstagramIcon=styled(AiFillInstagram)`
width:30px;
height:30px;
color:rgb(56 56 215);
&:hover, &:focus{
    color: rgb(22 174 211);  
}
`