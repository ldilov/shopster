import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Main from './components/main/main.component';

import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/homepage.component'));
const ProductPage = lazy(() => import('./pages/productpage.component'));

function App() {
  return (
      <>
        <Header/>
        <Main>
          <Routes>
            <Route
                exact
                path="/"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <HomePage />
                  </Suspense>
                }
            />
            <Route
                exact
                path="/product/:id"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <ProductPage />
                  </Suspense>
                }
            />
          </Routes>
        </Main>
        <Footer/>
      </>
  );
}

export default App;
