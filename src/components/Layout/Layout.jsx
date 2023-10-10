import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Header from './Header';
import { BodyContainer, MainContainer } from './Layout.styled';
import Footer from './Footer';
import Loader from './/..//Loader/Loader';

const Layout = () => {
  return (
    <>
     <BodyContainer >
        <Header />
        <MainContainer className="container">
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </MainContainer>
        <Footer/>
      </BodyContainer>
    </>
  );
};

export default Layout;