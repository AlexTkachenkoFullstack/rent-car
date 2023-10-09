import styled from "styled-components";
import { TiThMenu } from "react-icons/ti";
import { NavLink } from "react-router-dom";

export const HeaderContainer=styled.header`
display:flex;
`

export const Container=styled.div`
height: 85px;
padding-top:15px;
padding-bottom:15px;
display:flex;
`

export const HeaderLeft=styled.div`
display:flex;
gap: 10px;
`

export const BurgerButton=styled.button`
width: 36px;
height:36px;
border-style: none;
background-color: inherit;
`

export const BurgerIcon=styled(TiThMenu)`
width: 100%;
height:100%;
color: rgb(74 74 126);

&:hover, &:focus{
    color: rgb(22 174 211);
}
`
export const Logo=styled.img`
width:60px;
`

export const HeaderMiddle=styled.div`
display:flex;
flex-direction:column;
align-items: center;
margin-left:auto;
margin-right:auto;
`

export const HeaderMiddleText=styled.p`
font-size:24px;
font-family:Dancing Script, cursive;
font-weight: 700;
`

export const HeaderRight=styled.nav`
height: 100%;
display:flex;
align-items: center;
gap: 28px;
`

export const Link=styled(NavLink)`
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