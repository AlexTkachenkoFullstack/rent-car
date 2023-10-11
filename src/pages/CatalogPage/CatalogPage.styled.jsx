import styled from "styled-components";

export const FormikContainer=styled.div`
display:none;
 @media (min-width: 834px) {
    display:block;
  }
  `

export const ButtonFilterContainer=styled.div`
display:flex;
align-items: center;
justify-content: center;
padding-bottom: 10px;
@media (min-width: 834px) {
    display:none;
  }
`

export const ButtonFilter=styled.button`
width:274px;
height:30px;
border-radius: 7px;
background-color:rgba(52, 112, 255, 1);
color:rgba(255, 255, 255, 1);
font-size:16px;
line-height:1.1;
font-family: Manrope, sans-serif;
font-weight:500;
border: none;

&:hover, &:focus{
background-color:rgba(11, 68, 205, 1);
}
`

export const LoadMoreButtonContainer=styled.div`
width:100%;
margin-top:40px;
padding-bottom:40px;
display:flex;
justify-content: center;
`

export const LoadMoreButton=styled.button`
color:rgba(52, 112, 255, 1);
font-family:Manrope;
font-size:18px;
font-weight:500;
line-height:1.53;
border: none;
background-color: inherit;

&:hover, &:focus{
    color:rgba(11, 68, 205, 1);
}
`

export const NoContentContainer=styled.div`
display:flex;
flex-direction:column;
width:100%;
padding-top:30px;
`

export const NoContentText=styled.p`
margin-left:auto;
margin-right:auto;
font-size:13px;
line-height:1.25;
font-weight:500;
font-family: Manrope, sans-serif;
@media (min-width: 834px) {
  font-size:20px;
  line-height:1.6;
}
`