import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export const CardContainer=styled.div`
display:flex;
flex-direction:column;
width:274px;
height:426px;
`

export const ImgContainer=styled.div`
position:relative;
height:288px;
overflow: hidden;
border-radius: 14px;
margin-bottom:14px;
`

export const Image=styled.img`
height:100%;
object-fit: cover;
transition: transform .35s ease-in-out;

&:hover{
  transform: scale(1.05);
}
`

export const HeartIcon=styled(AiOutlineHeart)`
width:19px;
height:19px;
position:absolute;
top:14px;
right:14px;
color: white;
`

export const HeartIconMarked=styled(AiFillHeart)`
width:19px;
height:19px;
position:absolute;
top:14px;
right:14px;
color: rgba(52, 112, 255, 1);
`

export const TextContainer=styled.div`
display:flex;
flex-direction:column;
margin-bottom:10px;
@media (min-width: 834px) {
   margin-bottom:28px;
}
`

export const TextFirstRowContainer=styled.div`
font-size:15px;
line-height:1.33;
font-weight:500;
font-family: Manrope, sans-serif;
display:flex;
justify-content: space-between;
margin-bottom:8px;
`

export const TitleContainer=styled.div`

`
export const TextFirstRow=styled.p`
`

export const TextDescriptionContainer=styled.div`
display:flex;
flex-direction:column;
color:rgba(18, 20, 23, 0.5);
font-size:12px;
line-height:1.58;
font-family: Manrope, sans-serif;
`

export const TextDescriptionRow=styled.ul`
display:flex;
`

export const TextDescriptionItem=styled.li`
padding-left:6px;
padding-right:6px;
border-right: 1px rgba(18, 20, 23, 0.1) solid;


  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    border-right: none;
    padding-right: 0;
  }
`

export const ButtonLearnMore=styled.button`
width:110px;
height:35px;
border-radius: 9px;
background-color:rgba(52, 112, 255, 1);
color:rgba(255, 255, 255, 1);
font-size:14px;
line-height:1.33;
font-family: Manrope, sans-serif;
font-weight:800;
border: none;

&:hover, &:focus{
background-color:rgba(11, 68, 205, 1);
}

@media (min-width: 834px) {
  width:100%;
  height:44px;
  border-radius: 14px;
}
`