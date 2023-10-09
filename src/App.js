import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import FavoritesPage from './pages/FavoritesPage';
import Layout from './components/Layout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCars } from './redux/cars/operations';


function App() {
  
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
    </>
  );
}

export default App;
