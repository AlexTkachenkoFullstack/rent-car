import { useSelector } from "react-redux";
import FormikFilter from "../../components/FormikFilter";
import { FavoritesPageContainer, MainContentContainer, SideBarContainer } from "./FavoritesPage.styled";
import { getAllCars, getFavorites } from "../../redux/cars/selectors";
import { useEffect, useState } from "react";
import FavoritesList from "../../components/FavoritesList/FavoritesList";

const FavoritesPage = () => {
  const [filter, setFilter]=useState({brand: 'All brands', price: 'All', minMileage: null, maxMileage: null})
const allFavoutite=useSelector(getFavorites);
const [carsToShow, setCarsToShow]=useState([])
const handleSubmitFilter=(data)=>{
  setFilter(data)
}

useEffect(()=>{
  setCarsToShow(allFavoutite)
},[allFavoutite])

    return (
      <FavoritesPageContainer >
          <SideBarContainer>
              <FormikFilter onSubmit={handleSubmitFilter}/>
          </SideBarContainer>
          <FavoritesList favoriteCars={carsToShow}/>
      </FavoritesPageContainer>
    );
  };
  
  export default FavoritesPage;