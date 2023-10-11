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
  overflow-y: auto;
`;

export const CarModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;

  width: 320px;
  height:auto;
  border-radius: 10px;
  padding: 15px;
  background-color: rgba(255, 255, 255, 1);
  @media (min-width: 834px) {
    width: 541px;
    height: 752px;
    height:auto;
    border-radius: 24px;
    padding: 40px;
  }
`;

export const CloseModalIcon=styled(AiOutlineClose)`
position:absolute;
right:5px;
top:5px;
width:16px;
height:16px;
@media (min-width: 834px) {
  right:16px;
  top:16px;
  width:24px;
  height:24px;
}
`

export const CardContainer=styled.div`
display:flex;
flex-direction:column;
`

export const ImgContainer=styled.div`
position:relative;
height:180px;
width:290px;
overflow: hidden;
border-radius: 14px;
margin-bottom:14px;
@media (min-width: 834px) {
  height:248px;
  width:461px;
}
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
font-size:14px;
line-height:1.33;
font-weight:500;
font-family: Manrope;
display:flex;
justify-content: space-between;
margin-bottom:8px;
@media (min-width: 834px) {
  font-size:18px;
}
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
font-size:11px;
line-height:1.2;
font-family: Manrope, sans-serif;
white-space: pre;

@media (min-width: 834px) {
  padding-left:3px;
  padding-right:3px;
  line-height:1.58;
  font-size:12px;
}

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
margin-bottom:14px;
font-size:12px;
line-height:1.28;
font-family: Manrope, sans-serif;
@media (min-width: 834px) {
  font-size:14px;
  line-height:1.58;
  margin-bottom:24px;
}
`
export const SectionContainer=styled.div`
margin-bottom:16px;
@media (min-width: 834px) {
  margin-bottom:24px;
}
`

export const TextDescriptionTitle=styled.p`
margin-bottom:8px;
font-size:12px;
line-height:1.28;
font-family: Manrope, sans-serif;
@media (min-width: 834px) {
  font-size:14px;
  line-height:1.58;
}
`

export const ConditionContainer=styled.div`
display:flex;
gap: 8px;
flex-wrap:wrap;
`

export const ConditionItemContainer=styled.div`
background-color:rgba(249, 249, 249, 1);
border-radius: 10px;
padding: 3px 6px;
font-size:12px;
line-height:1.33;
font-family: Manrope, sans-serif;
@media (min-width: 834px) {
  border-radius: 35px;
padding: 7px 14px;
}
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
