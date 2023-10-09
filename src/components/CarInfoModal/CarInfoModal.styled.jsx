import styled from 'styled-components';
import { AiOutlineClose } from "react-icons/ai";

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

export const CarModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;

  width: 541px;
  min-height: 752px;
  height:auto;
  border-radius: 24px;
  padding: 40px;
  background-color: rgba(255, 255, 255, 1);
`;

export const CloseModalIcon=styled(AiOutlineClose)`
position:absolute;
right:16px;
top:16px;
width:24px;
height:24px;
`

export const CardContainer=styled.div`
display:flex;
flex-direction:column;
`

export const ImgContainer=styled.div`
position:relative;
height:248px;
width:461px;
overflow: hidden;
border-radius: 14px;
margin-bottom:14px;
`

export const Image=styled.img`
height:100%;
width:100%;
object-fit: cover;
`

export const TextContainer=styled.div`
display:flex;
flex-direction:column;
`

export const TextFirstRowContainer=styled.div`
font-size:18px;
line-height:1.33;
font-weight:500;
font-family: Manrope;
display:flex;
justify-content: space-between;
margin-bottom:8px;
`

export const TitleContainer=styled.div`

`
export const TextFirstRow=styled.p`
`

export const TextFeatureRow=styled.ul`
display:flex;
margin-bottom:4px;
flex-wrap:wrap;
`

export const TextFeatureItem=styled.li`
padding-left:6px;
padding-right:6px;
border-right: 1px rgba(18, 20, 23, 0.5) solid;
color:rgba(18, 20, 23, 0.5);
font-size:12px;
line-height:1.58;
font-family: Manrope, sans-serif;
white-space: pre;
  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    border-right: none;
    padding-right: 0;
  }
`

export const TextDescription=styled.p`
margin-top:10px;
margin-bottom:24px;
font-size:14px;
line-height:1.58;
font-family: Manrope, sans-serif;
`
export const SectionContainer=styled.div`
margin-bottom:24px;
`

export const TextDescriptionTitle=styled.p`
margin-bottom:8px;
font-size:14px;
line-height:1.58;
font-family: Manrope, sans-serif;
`

export const ConditionContainer=styled.div`
display:flex;
gap: 8px;
flex-wrap:wrap;
`

export const ConditionItemContainer=styled.div`
background-color:rgba(249, 249, 249, 1);
border-radius: 35px;
padding: 7px 14px;
font-size:12px;
line-height:1.33;
font-family: Manrope, sans-serif;
`
 
export const ButtonRentCar=styled.a`
display: flex;
justify-content: center;
align-items: center;
width:189px;
height:44px;
border-radius: 14px;
background-color:rgba(52, 112, 255, 1);
color:rgba(255, 255, 255, 1);
font-size:14px;
line-height:1.33;
font-family: Manrope, sans-serif;
font-weight:800;
border: none;
padding: 7px 14px;


&:hover, &:focus{
background-color:rgba(11, 68, 205, 1);
}
`
