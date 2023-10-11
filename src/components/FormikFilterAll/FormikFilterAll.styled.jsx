import styled from 'styled-components';
import { Field, Form } from 'formik';


export const FormContainer=styled(Form)`
display: flex;
flex-direction: column; 
justify-content: start;
align-items: start;
margin-bottom:50px;
gap:18px;
@media (min-width: 834px) {
  flex-direction: row; 
  justify-content: center;
  align-items: end;
}
`

export const FilterItemContainer=styled.div`
display:flex;
flex-direction:column;
`

export const Label=styled.label`
font-size:12px;
line-height:1.33;
font-weight:500;
font-family: Manrope, sans-serif;
margin-bottom:7px;
color:rgba(138, 138, 137, 1);
@media (min-width: 834px) {
  font-size:14px;
}
`

export const OptionBrand=styled.option`
font-size:12px;
line-height:1.1;
font-weight:500;
width:100px;
color:rgba(18, 20, 23, 0.2);
background-color: rgba(255, 255, 255, 1);
line-height:1.1;
font-weight:500;
font-family: Manrope, sans-serif;
@media (min-width: 834px) {
  font-size:18px;
}
`

export const OptionPrice=styled.option`
font-size:12px;
line-height:1.1;
font-weight:500;
width:50px;
color:rgba(18, 20, 23, 0.2);
background-color: rgba(255, 255, 255, 1);
line-height:1.1;
font-weight:500;
font-family: Manrope, sans-serif;
@media (min-width: 834px) {
  font-size:18px;
}
`

export const MilageContainer=styled.div`
display:flex;
border-color: rgba(138, 138, 137, 0.2);
background-color: rgba(138, 138, 137, 0.2);
border-radius: 8px;
height:35px;
@media (min-width: 834px) {
  height:49px;
}
`
export const MilageItemContainer=styled.div`
display:flex;
align-items: center;
width: 138px;
padding-left:24px;
&:first-child{
    border-right: 1px rgba(138, 138, 137, 0.2) solid;
}
@media (min-width: 834px) {
  width: 160px;
}
`

export const MilageItemText=styled.p`
font-size:14px;
line-height:1.1;
font-family: Manrope, sans-serif;
font-weight:500;
@media (min-width: 834px) {
  font-size:18px;
}
`

export const InputMileage=styled(Field)`
font-size:14px;
line-height:1.1;
font-family: Manrope, sans-serif;
font-weight:500;
overflow: auto;
outline: none;
padding-left:5px;
border-style: none;
background-color: inherit;
@media (min-width: 834px) {
  font-size:18px;
}
`

export const ButtonFilter=styled.button`
width:100px;
height:35px;
border-radius: 8px;
background-color:rgba(52, 112, 255, 1);
color:rgba(255, 255, 255, 1);
font-size:12px;
line-height:1.1;
font-family: Manrope, sans-serif;
font-weight:500;
border: none;

&:hover, &:focus{
background-color:rgba(11, 68, 205, 1);
}

@media (min-width: 834px) {
  font-size:18px;
  width:138px;
  height:49px;
  border-radius: 14px;
  font-size:14px;
}
`