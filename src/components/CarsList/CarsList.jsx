import { CarsListContainer } from "./CarsList.styled"
import CardItem from "../CardItem";

const CarsList=({cars})=>{

    return(
        <CarsListContainer>
            {cars?.map(item=>{return <CardItem key={item.id} car={item}/>})}
        </CarsListContainer>
    )
}

export default CarsList
