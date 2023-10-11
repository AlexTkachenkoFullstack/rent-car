import React from 'react';
 import { Field, Formik } from 'formik';
import { useSelector } from 'react-redux';
import { getAllCars } from '../../redux/cars/selectors';
import { ButtonFilter, FormContainer, InputMileage, Label, MilageContainer, OptionBrand, OptionPrice } from './FormikFilterFavorites.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

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
    if( minMileage && maxMileage && minMileage>=maxMileage){
      Notify.failure('Min mileage cannot be greater than max mileage');
      return
    }
  const valuesToSend = {
        brand,
        price,
        minMileage,
        maxMileage,
      };
    onSubmit(valuesToSend)    
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
                <InputMileage type="number"  id="minMileage" min="1" name="minMileage" placeholder="From" />
                <InputMileage type="number" id="maxMileage" min="1" name="maxMileage" placeholder="To" />
           </MilageContainer>
           <ButtonFilter type="submit" >Filter</ButtonFilter>
         </FormContainer>
     </Formik>
   </div>
 )
}


 export default FormikFilterFavorites