import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import { fetchCars } from './redux/cars/operations';
import { isCarsLoading } from './redux/cars/selectors';
import Loader from './components/Loader';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));

function App() {
  const isCarLoading = useSelector(isCarsLoading);
  const dispatch=useDispatch()
  useEffect(()=>{
  dispatch(fetchCars());
  },[dispatch])

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}/>
          <Route path="catalog" element={<CatalogPage />}/>
          <Route path="favorites" element={<FavoritesPage />}/>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      {isCarLoading && <Loader />}
    </>
  );
}

export default App;
