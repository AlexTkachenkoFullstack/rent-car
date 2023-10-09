import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";
export const CardContainer=styled.li`
    display:flex;
    height:120px;
    margin-bottom:10px;
    padding-right:30px;
`

export const ImageContainer=styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 200px;
height: 110px;
overflow: hidden;
border-radius: 14px;
margin-bottom:14px;
`

export const Image=styled.img`
object-fit: cover;

&:hover{
    scale: 1.05;
}
`
export const DescriptionContainer=styled.div`
display:flex;
flex-direction:column;
margin-left:10px;
`
export const DescriptionText=styled.p`
font-size:16px;
line-height:1.33;
font-weight:500;
font-family: Manrope, sans-serif;
`

export const ButtonLearnMore=styled.button`
width:100px;
margin-left:auto;
margin-top: 25px;
height:44px;
border-radius: 14px;
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
`

export const ButtonDelete=styled(AiFillDelete)`
width:30px;
height:30px;
margin-left:60px;
margin-top: 32px;
color:rgb(171 31 31);

&:hover, &:focus{
    color:rgb(245 4 4);
}
`