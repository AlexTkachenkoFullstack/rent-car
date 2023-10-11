import styled from "styled-components";
import { TiThMenu } from "react-icons/ti";
import { NavLink } from "react-router-dom";

export const HeaderContainer=styled.header`
display:flex;
`

export const Container=styled.div`
height: 55px;
padding-top:15px;
padding-bottom:15px;
display:flex;
@media (min-width: 834px) {
  height: 85px;
}
`

export const HeaderLeft=styled.div`
display:flex;
gap: 10px;
align-items: center;
`

export const BurgerButton=styled.button`
width: 28px;
height:28px;
border-style: none;
background-color: inherit;

@media (min-width: 834px) {
    display:none
  }
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
width:30px;
@media (min-width: 834px) {
    width:60px;
  }
`

export const HeaderMiddle=styled.div`
display:flex;
flex-direction:column;
align-items: center;
justify-content: center;
margin-left:auto;
margin-right:auto;
font-size:14px;
font-family:Dancing Script, cursive;
font-weight: 700;

@media (min-width: 834px) {
font-size:20px;
font-family:Dancing Script, cursive;
font-weight: 700;
  }

  @media (min-width: 1440px) {
font-size:24px;
  }
`

export const HeaderMiddleText=styled.p`
`

export const HeaderRight=styled.nav`
display:none;

    @media (min-width: 834px) {
    height: 100%;
    display:flex;
    align-items: center;
    gap: 20px;
        }
    
      @media (min-width: 1440px) {
    font-size:24px;
    gap: 40px;
      }
`

export const Link=styled(NavLink)`
font-size:24px;
color:black;
font-family: Manrope, sans-serif;
font-weight: 400;

&:hover, &:focus{
    color: rgb(22 174 211);  
}

&.active{
    color: rgb(22 31 151);
}
`