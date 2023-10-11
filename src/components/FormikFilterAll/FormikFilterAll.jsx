import React, { useEffect, useState } from 'react';
 import { Field, Formik } from 'formik';
import { useSelector } from 'react-redux';
import { getAllCars } from '../../redux/cars/selectors';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ButtonFilter, FilterItemContainer, FormContainer, InputMileage, Label, MilageContainer, MilageItemContainer, MilageItemText, OptionBrand, OptionPrice } from './FormikFilterAll.styled';
import { formatNumberWithCommas } from '../../utils/formatNumberWithCommas';

const inputStyle={
    fontSize:'14px',
    lineHeight:'1.1',
    fontWeight:500,
    fontFamily: 'Manrope, sans-serif',
    height:35,
    paddingLeft:15,
    borderColor: 'rgba(138, 138, 137, 0.2)',
    backgroundColor: 'rgba(138, 138, 137, 0.2)',
    borderRadius: '8px',
    outline: 'none',
    }

const FormikFilterAll=({onSubmit})=>{
  const [fontSize, setFontSize] = useState('14px');
  const [height, setHeight] = useState('35px');

  useEffect(() => {
    if (window.innerWidth >= 834) {
      setFontSize('18px');
      setHeight('49px');
    } else {
      setFontSize('14px');
      setHeight('35px');
    }
  }, []);

const cars=useSelector(getAllCars);
 const carsBrands=new Set( [...cars.map(item=>item.make)].sort((a,b)=>a.localeCompare(b)));
const carsBrandsArray=[...carsBrands];
const rentPrice=[30,40,50,60,70,80,90,100,120,140,160,180,200,300,400,500,600]

const handleSubmit=({brand, price, minMileage, maxMileage}, actions)=>{
  const minMileageValue = minMileage ? parseFloat(minMileage.replace(',', '')) : null;
  const maxMileageValue = maxMileage ? parseFloat(maxMileage.replace(',', '')) : null;

  if (minMileageValue !== null && maxMileageValue !== null && Number(minMileageValue) >= Number(maxMileageValue)) {
    Notify.failure('Min mileage cannot be greater than max mileage');
    return;
  }
  const valuesToSend = {
        brand,
        price,
        minMileage:minMileageValue,
        maxMileage:maxMileageValue,
      };
    onSubmit(valuesToSend)    
}

const onMilageInput=(e) => {
  const inputValue = e.target.value.replace(/\D/g, ''); // Убираем всё, кроме цифр
  const numericValue =formatNumberWithCommas(inputValue); 
  e.target.value = numericValue;
}

   return (
     <Formik
       initialValues={{ brand: 'All brands', price: 'All', minMileage: '', maxMileage: '' }}
       onSubmit={ handleSubmit}
     >
         <FormContainer>
            <FilterItemContainer>
                <Label htmlFor="brand">Car brand</Label>
                <Field as="select" style={{...inputStyle, width: 224, fontSize, height}} name="brand"  placeholder="Select a car brand" >
                        <OptionBrand >All brands</OptionBrand>
                        {carsBrandsArray?.map((item) => (
                                <OptionBrand key={item} value={item}>{item}</OptionBrand>
                                ))
                            }
                </Field>
            </FilterItemContainer>
           <FilterItemContainer>
                <Label htmlFor="price">Price/ 1 hour</Label>
                <Field as="select" style={{...inputStyle, width: 125, fontSize, height}} name="price" >
                        <OptionPrice >All</OptionPrice>
                        {rentPrice?.map((item) => (
                                    <OptionPrice key={item} value={item}>{item}</OptionPrice>
                                    ))
                                }
                </Field>
           </FilterItemContainer>
           <FilterItemContainer>
                <Label htmlFor="mileage">Сar mileage / km</Label>
                <MilageContainer>
                    <MilageItemContainer>
                        <MilageItemText>From</MilageItemText>
                        <InputMileage type="text" id="minMileage"  name="minMileage" onInput={onMilageInput} maxLength={7}/>
                    </MilageItemContainer>
                    <MilageItemContainer>
                        <MilageItemText>To</MilageItemText>
                        <InputMileage type="text" id="maxMileage"  name="maxMileage"  onInput={onMilageInput} maxLength={7}/>
                    </MilageItemContainer>                
                </MilageContainer>
           </FilterItemContainer>
           <ButtonFilter type="submit" >Search</ButtonFilter>
         </FormContainer>
     </Formik>
 )
}

export default FormikFilterAll