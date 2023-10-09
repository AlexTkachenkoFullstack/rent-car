import { useState } from "react";
import { ButtonDelete, ButtonLearnMore, CardContainer, DescriptionContainer, DescriptionText, Image, ImageContainer } from "./FavoriteItem.styled"
import CarInfoModal from "../CarInfoModal";
import { useDispatch } from "react-redux";
import { deleteCar } from "../../redux/cars/slice";

const FavoriteItem=({car})=>{
    const [showCarModal, setShowCarModal] = useState(false);
   const adress= car.address.split(',').map(item=>item.trim())
   const dispatch=useDispatch()

   const openCarModal = () => {
    setShowCarModal(!showCarModal);
  };

  const closeCarModal = () => {
    setShowCarModal(false);
  };
    
 const onHandleDelete=()=>{
    dispatch(deleteCar(car))
 }
  
    return(<>
            <CardContainer>
                <ImageContainer onClick={openCarModal}>
                    <Image src={car.img}/>
                </ImageContainer>
                <DescriptionContainer>
                    <DescriptionText>{car.make} {car.model}, {car.year}</DescriptionText>
                    <DescriptionText>engine size: {car.engineSize}</DescriptionText>
                    <DescriptionText>mileage: {car.mileage}</DescriptionText>
                    <DescriptionText>address: {adress[1]}, {adress[2]}</DescriptionText>
                    <DescriptionText >rental price: <span style={{color:'rgba(52, 112, 255, 1)'}}>{car.rentalPrice}</span></DescriptionText>
                </DescriptionContainer>
                <ButtonLearnMore type="button" onClick={openCarModal}>Learn more</ButtonLearnMore>
                <ButtonDelete type="button" onClick={onHandleDelete}>Delete</ButtonDelete>
            </CardContainer>
            {showCarModal && <CarInfoModal onClose={closeCarModal} car={car}/>}
        </>
    )
}

export default FavoriteItem