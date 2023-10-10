import { useEffect, useState } from "react";
import CarsList from "../../components/CarsList";
import { LoadMoreButton, LoadMoreButtonContainer } from "./CatalogPage.styled";
import { useDispatch, useSelector } from "react-redux";
import { getAllCars, getFilterCars } from "../../redux/cars/selectors";
import FormikFilterAll from "../../components/FormikFilterAll/FormikFilterAll";
import { addFilterCars } from "../../redux/cars/slice";


const CatalogPage = () => {
  const [countPage, setCountPage] = useState(1);
  const [displayedCars, setDisplayedCars]=useState([]);
  const [showButtonLoadMore, setShowButtonLoadMore]=useState(false);
  const [filter, setFilter]=useState({brand: 'All brands', price: 'All', minMileage: '', maxMileage: ''})
  const [totalPages, setTotalPages]=useState(0)
  const [countPageIncreased, setCountPageIncreased] = useState(false);
  const carsArray=useSelector(getAllCars);
  const dispatch =useDispatch()
  const filtredCars=useSelector(getFilterCars)

  const handleSubmitFilter=(data)=>{
   setFilter(data);
   setCountPage(1);
   setCountPageIncreased(false);
  }
 
  useEffect(() => {
    const filterList=carsArray?.filter(item=>(
      (filter.brand==='All brands' ? true : item.make===filter.brand)
      && (filter.price==='All' ? true : parseFloat(item.rentalPrice.replace('$', ''))<=Number(filter.price))
      && (!filter.minMileage ? true : item.mileage>=filter.minMileage)
      && (!filter.maxMileage ? true : item.mileage<=filter.maxMileage)))
      dispatch(addFilterCars(filterList));
      setTotalPages(Math.ceil(filterList.length/8))
  }, [filter, carsArray, dispatch]);

  useEffect(()=>{
    if(filtredCars.length>0 && countPage===1 && !countPageIncreased){
      setCountPageIncreased(true);
      const firstLoad=filtredCars.slice(0, 8)
      setDisplayedCars([...firstLoad])
      setShowButtonLoadMore(true);
      setCountPage(2)
      if(filtredCars.length<9){
        setShowButtonLoadMore(false)
        }else{setShowButtonLoadMore(true)}
    } 
  },[filtredCars])

  const handleLoadMore = () => {
      const currentCount = displayedCars.length;
      const nextCount = currentCount + 8;
      const nextCars = filtredCars.slice(currentCount, nextCount);
      setDisplayedCars([...displayedCars, ...nextCars]);
      setCountPage(countPage+1);
      if(totalPages<=countPage){
      setShowButtonLoadMore(false)
      }else{setShowButtonLoadMore(true)}
};

    return (<>
              <FormikFilterAll onSubmit={handleSubmitFilter}/>
              <CarsList cars={displayedCars}/>
              <LoadMoreButtonContainer>
              {showButtonLoadMore && <LoadMoreButton type="button" onClick={handleLoadMore}>Load more</LoadMoreButton>}
              </LoadMoreButtonContainer>
            </>    
    );
  };
  
  export default CatalogPage;