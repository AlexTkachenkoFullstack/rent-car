import { useEffect } from "react";
import { Backdrop, ButtonRentCar, CarModal, CardContainer, CloseModalIcon, ConditionContainer, ConditionItemContainer, Image, ImgContainer, SectionContainer, TextContainer, TextDescription, TextDescriptionTitle, TextFeatureItem, TextFeatureRow, TextFirstRow, TextFirstRowContainer, TitleContainer } from "./CarInfoModal.styled"
import { formatNumberWithCommas } from "../../utils/formatNumberWithCommas";

const CarInfoModal=({onClose, car})=>{
    const location=car.address.split(',').map(item=>item.trim());
    const handleCloseModal = e => {
        (e.code === 'Escape' || e.currentTarget === e.target) && onClose();
      };

      useEffect(() => {
        window.addEventListener('keydown', handleCloseModal);
        return () => {
          window.removeEventListener('keydown', handleCloseModal);
        };
      });      

    return (
        <Backdrop onClick={handleCloseModal}>
            <CarModal>
                <CloseModalIcon onClick={onClose}/>
                <CardContainer>
                    <ImgContainer>
                        <Image src={car.img || car.photoLink} loading="lazy" alt='car'/>
                    </ImgContainer>
                    <TextContainer>
                        <TextFirstRowContainer>
                            <TitleContainer>
                                <TextFirstRow > {car.make}{car.model && <span style={{color:'rgba(52, 112, 255, 1)'}}> {car.model}</span>}, {car.year}</TextFirstRow>
                            </TitleContainer>
                        </TextFirstRowContainer>
                        <TextFeatureRow>
                            <TextFeatureItem>{location[1]}</TextFeatureItem>
                            <TextFeatureItem>{location[2]}</TextFeatureItem>
                            <TextFeatureItem>Id: {car.id}</TextFeatureItem>
                            <TextFeatureItem>Year: {car.year}</TextFeatureItem>
                            <TextFeatureItem>Type: {car.type}</TextFeatureItem>
                        </TextFeatureRow>
                        <TextFeatureRow>
                            <TextFeatureItem>Fuel Consumption: {car.fuelConsumption}</TextFeatureItem>
                            <TextFeatureItem>Engine Size: {car.engineSize}</TextFeatureItem>
                        </TextFeatureRow>
                        <TextDescription>{car.description}</TextDescription>

                        <SectionContainer>
                                <TextDescriptionTitle>Accessories and functionalities:</TextDescriptionTitle>
                                <TextFeatureRow>
                                    {car.accessories.map((item)=><TextFeatureItem key={item}>{item}</TextFeatureItem>)}
                                </TextFeatureRow>
                                <TextFeatureRow>
                                    {car.functionalities.map((item)=><TextFeatureItem key={item}>{item}</TextFeatureItem>)}
                                </TextFeatureRow>
                        </SectionContainer>
                        <SectionContainer>
                            <TextDescriptionTitle>Rental Conditions: </TextDescriptionTitle>
                            <ConditionContainer>
                                 <ConditionItemContainer>Minimum age : <span >25</span></ConditionItemContainer>
                                <ConditionItemContainer>Valid driver’s license</ConditionItemContainer>
                                <ConditionItemContainer>Security deposite required </ConditionItemContainer>
                                <ConditionItemContainer>Mileage: <span style={{color:'rgba(52, 112, 255, 1)', fontWeight:800}}>{formatNumberWithCommas(car.mileage)}</span> </ConditionItemContainer>
                                <ConditionItemContainer>Price: <span style={{color:'rgba(52, 112, 255, 1)', fontWeight:800}}>{parseInt(car.rentalPrice.slice(1))}$</span></ConditionItemContainer>
                            </ConditionContainer>
                        </SectionContainer>   
                    </TextContainer>
                    <ButtonRentCar href="tel:+380730000000">
                        Rental car
                    </ButtonRentCar>
                </CardContainer>
            </CarModal>
        </Backdrop>
    )
}

export default CarInfoModal