import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import FavoritesPage from './pages/FavoritesPage';
import Layout from './components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCars } from './redux/cars/operations';
import { isCarsLoading } from './redux/cars/selectors';
import Loader from './components/Loader';


function App() {
  const isCarLoading = useSelector(isCarsLoading);
  const dispatch=useDispatch()
  useEffect(()=>{
  dispatch(fetchCars());
  },[dispatch])

  return (
    <>
    {isCarLoading  
    ? <Loader />
    : <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}/>
          <Route path="catalog" element={<CatalogPage />}/>
          <Route path="favorites" element={<FavoritesPage />}/>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      }
    </>
  );
}

export default App;
