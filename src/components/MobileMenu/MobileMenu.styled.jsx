import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(5, 5, 5, 0.8);
  backdrop-filter: blur(3px);
  z-index:999;
`;

export const MenuModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  
  display:flex;
  flex-direction:column;
  justify-content: space-around;
  width: 230px;
  min-height: 300px;
  height:auto;
  border-radius: 24px;
  padding: 5px;
  background-color: rgb(197 239 187);
`;

export const CloseModalIcon=styled(AiOutlineClose)`
position:absolute;
right:10px;
top:10px;
width:18px;
height:18px;

&:hover, &:focus{
    color:rgb(151 14 26);
}
`

export const MobileMenuList=styled.ul`
display:flex;
flex-direction: column;
align-items: center;
gap: 10px;
`
export const MobileMenuItem=styled.li`
font-size:16px;
line-height:1.45;
font-weight:500;
font-family: Manrope, sans-serif;

&:hover, &:focus{
    color: rgb(22 174 211);  
}

&.active{
    color: rgb(22 31 151);
}
`
export const Link=styled(NavLink)`
color:black;
&:hover, &:focus{
    color: rgb(22 174 211);  
}

&.active{
    color: rgb(22 31 151);
}
`

export const ContactsContainer=styled.div`
padding-left:10px;
padding-right:10px;
font-size:12px;
line-height:1.45;
font-weight:500;
font-family: Manrope, sans-serif;
`
export const Contact=styled.p`
`