import React from 'react';
 import { Field, Formik } from 'formik';
import { useSelector } from 'react-redux';
import { getAllCars } from '../../redux/cars/selectors';
import { ButtonFilter, FormContainer, InputMileage, Label, MilageContainer, OptionBrand, OptionPrice } from './FormikFilterFavorites.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { formatNumberWithCommas } from '../../utils/formatNumberWithCommas';

const inputBrand={
    fontSize:'18px',
    lineHeight:'1.33',
    fontWeight:500,
    fontFamily: 'Open Sans, sans-serif',
    width: '100%',
    marginBottom:'15px',
    borderColor: 'rgb(22 174 211)',
    borderRadius: '8px',
    outline: 'none'
}

const inputPrice={
    fontSize:'18px',
    lineHeight:'1.33',
    fontWeight:800,
    fontFamily: 'Open Sans, sans-serif',
    width: '60px',
    marginBottom:'15px',
    borderColor: 'rgb(22 174 211)',
    borderRadius: '8px',
    outline: 'none'
    }

 const FormikFilterFavorites = ({onSubmit}) => {
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
  const inputValue = e.target.value.replace(/\D/g, ''); 
  const numericValue =formatNumberWithCommas(inputValue); 
  e.target.value = numericValue;
}

   return (
   <div>
     <Formik
       initialValues={{ brand: 'All brands', price: 'All', minMileage: '', maxMileage: '' }}
       onSubmit={ handleSubmit}
     >
         <FormContainer>
            <Label htmlFor="brand">Car brand</Label>
                <Field as="select" style={inputBrand} name="brand"  placeholder="Select a car brand" >
                    <OptionBrand >All brands</OptionBrand>
                    {carsBrandsArray?.map((item) => (
                            <OptionBrand key={item} value={item}>{item}</OptionBrand>
                            ))
                        }
            </Field>
           <Label htmlFor="price">Price/ 1 hour</Label>
           <Field as="select" style={inputPrice} name="price" >
                <OptionPrice >All</OptionPrice>
                {rentPrice?.map((item) => (
                            <OptionPrice key={item} value={item}>{item}</OptionPrice>
                            ))
                        }
           </Field>
           <Label htmlFor="mileage">Сar mileage / km</Label>
           <MilageContainer>
                <InputMileage type="text" id="minMileage"  name="minMileage" onInput={onMilageInput} maxLength={7}/>
                <InputMileage type="text" id="maxMileage"  name="maxMileage"  onInput={onMilageInput} maxLength={7}/>
           </MilageContainer>
           <ButtonFilter type="submit" >Filter</ButtonFilter>
         </FormContainer>
     </Formik>
   </div>
 )
}


 export default FormikFilterFavorites