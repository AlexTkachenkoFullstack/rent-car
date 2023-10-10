import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormContainer=styled(Form)`
display: flex;
flex-direction: row; 
justify-content: center;
align-items: end;
margin-bottom:50px;
gap:18px;
`

export const FilterItemContainer=styled.div`
display:flex;
flex-direction:column;
`

export const Label=styled.label`
font-size:14px;
line-height:1.33;
font-weight:500;
font-family: Manrope, sans-serif;
margin-bottom:7px;
color:rgba(138, 138, 137, 1);
`

export const OptionBrand=styled.option`
font-size:12px;
line-height:1.1;
font-weight:500;
width:100px;
color:rgba(18, 20, 23, 0.2);
background-color: rgba(255, 255, 255, 1);
font-size:18px;
line-height:1.1;
font-weight:500;
font-family: Manrope, sans-serif;
`

export const OptionPrice=styled.option`
font-size:12px;
line-height:1.1;
font-weight:500;
width:50px;
color:rgba(18, 20, 23, 0.2);
background-color: rgba(255, 255, 255, 1);
font-size:18px;
line-height:1.1;
font-weight:500;
font-family: Manrope, sans-serif;
`

export const MilageContainer=styled.div`
display:flex;
`

export const InputMileage=styled(Field)`
font-size:18px;
line-height:1.33;
font-family: Open Sans, sans-serif;
font-weight:800;
width: 110px;
overflow: auto;
height:49px;
border-color: rgba(138, 138, 137, 0.2);
background-color: rgba(138, 138, 137, 0.2);
border-radius: 8px;
outline: none;
padding-left:15px;
`
export const ButtonFilter=styled.button`
width:138px;
height:49px;
border-radius: 14px;
background-color:rgba(52, 112, 255, 1);
color:rgba(255, 255, 255, 1);
font-size:18px;
line-height:1.33;
font-family: Manrope, sans-serif;
font-weight:800;
border: none;

&:hover, &:focus{
background-color:rgba(11, 68, 205, 1);
}
`