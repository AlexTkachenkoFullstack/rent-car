import { useSelector } from "react-redux";
import { FavoritesPageContainer,  NoContentContainer, NoContentText, SideBarContainer } from "./FavoritesPage.styled";
import {  getFavorites, isCarsLoading } from "../../redux/cars/selectors";
import { useEffect, useState } from "react";
import FavoritesList from "../../components/FavoritesList/FavoritesList";
import FormikFilterFavorites from "../../components/FormikFilterFavorites/FormikFilterFavorites";

const FavoritesPage = () => {
const [filter, setFilter]=useState({brand: 'All brands', price: 'All', minMileage: '', maxMileage: ''})
const allFavorite=useSelector(getFavorites);
const [carsToShow, setCarsToShow]=useState([])
const isCarLoading = useSelector(isCarsLoading);

const handleSubmitFilter=(data)=>{
  setFilter(data)
}

useEffect(()=>{
    const filterList=allFavorite?.filter(item=>(
      (filter.brand==='All brands' ? true : item.make===filter.brand)
      && (filter.price==='All' ? true : parseFloat(item.rentalPrice.replace('$', ''))<=Number(filter.price))
      && (!filter.minMileage ? true : item.mileage>=filter.minMileage)
      && (!filter.maxMileage ? true : item.mileage<=filter.maxMileage)))
    setCarsToShow(filterList)
},[allFavorite, filter.brand, filter.maxMileage, filter.minMileage, filter.price])

    return (
      <FavoritesPageContainer >
          <SideBarContainer>
              <FormikFilterFavorites onSubmit={handleSubmitFilter}/>
          </SideBarContainer>
          {carsToShow.length>0 && <FavoritesList favoriteCars={carsToShow}/>}
          {carsToShow.length===0 
          && !isCarLoading 
          && (<NoContentContainer>
            <NoContentText>Sorry.</NoContentText>
            <NoContentText> Nothing could be found using the selected filter. </NoContentText>
            <NoContentText> Try changing the filter.</NoContentText>
          </NoContentContainer>)}
      </FavoritesPageContainer>
    );
  };
  
  export default FavoritesPage;