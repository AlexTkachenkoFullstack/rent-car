import { useEffect, useState } from "react";
import { formatNumberWithCommas } from "../../utils/formatNumberWithCommas";
import { ButtonLearnMore, CardContainer, HeartIcon, HeartIconMarked, Image, ImgContainer, TextContainer, TextDescriptionContainer, TextDescriptionItem, TextDescriptionRow, TextFirstRow, TextFirstRowContainer, TitleContainer } from "./CardItem.styled"
import { useDispatch, useSelector } from "react-redux";
import { addCar, deleteCar } from "../../redux/cars/slice";
import { getFavorites } from "../../redux/cars/selectors";
import CarInfoModal from "../CarInfoModal";

const CardItem=({car})=>{
const make= car.make;
const model=car.model;
const year=car.year;
const price=car.rentalPrice;
const location=car.address.split(',').map(item=>item.trim());
const rentalCompany=car.rentalCompany;
const type=car.type;
const mileage= car.mileage;
const [favorite, setFavorite]=useState(false)
const dispatch=useDispatch()
const favouriteCars=useSelector(getFavorites)
const [showCarModal, setShowCarModal] = useState(false);

useEffect(()=>{
    const isFavorite=favouriteCars.find(item=>item.id===car.id);
    if(isFavorite){
        setFavorite(true)
    }
},[car.id, favouriteCars])

const onHandleFavoriteClick=()=>{
    setFavorite(!favorite)
    if(favorite){
        dispatch(deleteCar(car))
    }else{
        dispatch(addCar(car))
    }
}

const openCarModal = () => {
    setShowCarModal(!showCarModal);
  };

  const closeCarModal = () => {
    setShowCarModal(false);
  };

    return (<>
                <CardContainer>
                    <ImgContainer>
                        <Image src={car.img || car.photoLink} loading="lazy" alt='car'/>
                        {!favorite ? <HeartIcon onClick={onHandleFavoriteClick}/>:<HeartIconMarked onClick={onHandleFavoriteClick}/>}
                    </ImgContainer>
                    <TextContainer>
                        <TextFirstRowContainer>
                            <TitleContainer>
                                <TextFirstRow > {make}{model && <span style={{color:'rgba(52, 112, 255, 1)'}}> {model}</span>}, {year}</TextFirstRow>
                            </TitleContainer>
                            <TextFirstRow> {price}</TextFirstRow>
                        </TextFirstRowContainer>
                        <TextDescriptionContainer>
                            <TextDescriptionRow>
                                <TextDescriptionItem>{location[1]}</TextDescriptionItem>
                                <TextDescriptionItem>{location[2]}</TextDescriptionItem>
                                {rentalCompany && <TextDescriptionItem style={{whiteSpace: 'nowrap',overflow: 'hidden', textOverflow: 'ellipsis'}}>{rentalCompany}</TextDescriptionItem>}
                                {parseFloat(price.replace('$', ''))>50 && <TextDescriptionItem>Premium</TextDescriptionItem>}
                            </TextDescriptionRow>
                            <TextDescriptionRow>
                                <TextDescriptionItem>{type}</TextDescriptionItem>
                                <TextDescriptionItem>{model || make}</TextDescriptionItem>
                                <TextDescriptionItem>{formatNumberWithCommas(mileage)}</TextDescriptionItem>
                            </TextDescriptionRow>
                        </TextDescriptionContainer>
                    </TextContainer>
                    <ButtonLearnMore type="button" onClick={openCarModal}>Learn more</ButtonLearnMore>
                </CardContainer>
                {showCarModal && <CarInfoModal onClose={closeCarModal} car={car}/>}
            </>
    )
}

export default CardItem