import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormContainer=styled(Form)`
display: flex;
flex-direction: column; 
`

export const Label=styled.label`
font-size:20px;
line-height:1.33;
font-weight:400;
font-family: Pacifico, cursive;
margin-bottom:7px;
`

export const OptionBrand=styled.option`
font-size:12px;
line-height:1.1;
font-weight:500;
width:100px;
`

export const OptionPrice=styled.option`
font-size:12px;
line-height:1.1;
font-weight:500;
width:50px;
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
margin-bottom:15px;
overflow: auto;
border-color: rgb(22 174 211);
border-radius: 8px;
outline: none;
`
export const ButtonFilter=styled.button`
width:100%;
height:44px;
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