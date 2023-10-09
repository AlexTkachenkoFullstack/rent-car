import { useEffect, useState } from "react";
import CarsList from "../../components/CarsList";
import { LoadMoreButton, LoadMoreButtonContainer } from "./CatalogPage.styled";
import { useSelector } from "react-redux";
import { getAllCars } from "../../redux/cars/selectors";


const CatalogPage = () => {
  const [displayedCars, setDisplayedCars] = useState([]);
  const [countPage, setCountPage] = useState(1);
  const [showButtonLoadMore, setShowButtonLoadMore]=useState(false);

  const carsArray=useSelector(getAllCars);
  const totalPages=Math.ceil(carsArray.length/8);

  useEffect(()=>{
    if(countPage===1 && carsArray.length>0){
      const loadFirstPage=async()=>{
        const firstLoad=carsArray.slice(0, 8)
        setDisplayedCars([...firstLoad])
        setCountPage(countPage + 1)
        setShowButtonLoadMore(true);
       }
       loadFirstPage()  
    }
  },[carsArray, countPage])

  const handleLoadMore = () => {
    setShowButtonLoadMore(false)
    const currentCount = displayedCars.length;
    const nextCount = currentCount + 8;
    const nextImages = carsArray.slice(currentCount, nextCount);
    setDisplayedCars([...displayedCars, ...nextImages]);
    setCountPage(countPage+1);
    if(totalPages<=countPage){
    setShowButtonLoadMore(false)
  }else{setShowButtonLoadMore(true)}
};

    return (<>
              <CarsList cars={displayedCars}/>
              <LoadMoreButtonContainer>
              {showButtonLoadMore && <LoadMoreButton type="button" onClick={handleLoadMore}>Load more</LoadMoreButton>}
              </LoadMoreButtonContainer>
            </>    
    );
  };
  
  export default CatalogPage;