import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";
export const CardContainer=styled.li`
    display:flex;
    flex-direction:column;
    align-items: center;
    margin-bottom:15px;
    padding-right:0px;
    @media (min-width: 834px) {
      flex-direction:row;
      justify-content: space-between;
      align-items: start;
      padding-right:0px;
    }
`

export const ImageContainer=styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// width: 200px;
// height:120px;
// overflow: hidden;
// border-radius: 14px;
// margin-bottom:14px;
// @media (min-width: 834px) {
//   height:120px;
// }
    height: 220px;
    width: 288px;
    overflow: hidden;
    border-radius: 14px;
    margin-bottom: 14px;
  @media (min-width: 834px) {
    height: 105px;
    width: 120px;
    margin-bottom: 0px;
 }
 @media (min-width: 1440px) {
  width: 260px;
  height:200px;
}
`

export const Image=styled.img`
object-fit: cover;
height: 100%;
transition: transform .35s ease-in-out;

&:hover{
  transform: scale(1.05);
}
`
export const DescriptionContainer=styled.div`
display:flex;
flex-direction:column;
padding-bottom: 5px;
padding-left: 5px;
width: 300px;
@media (min-width: 834px) {
  width: 235px;
}
@media (min-width: 1440px) {
  width: 310px;
}
`
export const DescriptionText=styled.p`
font-size:16px;
line-height:1.33;
font-weight:500;
font-family: Manrope, sans-serif;
@media (min-width: 834px) {
  font-size:14px;
}
@media (min-width: 1440px) {
  font-size:18px;
}
`

export const ButtonsContainer=styled.div`
display:flex;
flex-direction:row;
justify-content: space-between;
align-items: center;
gap:125px;
padding-right:30px;
@media (min-width: 834px) {
  padding-right:30px;
  gap:25px;
  height: 100%;
  padding-right:0px;
}
`

export const ButtonLearnMore=styled.button`
width:100px;
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
@media (min-width: 1440px) {
  width:130px;
  font-size:18px;
}
`

export const ButtonDelete=styled(AiFillDelete)`
width:30px;
height:30px;
margin-left:0px;
color:rgb(171 31 31);

&:hover, &:focus{
    color:rgb(245 4 4);
}
@media (min-width: 834px) {
  margin-left:0px;
}

@media (min-width: 1440px) {
  margin-left:60px;
}
`