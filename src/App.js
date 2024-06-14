import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationMenu from './components/NavigationMenu';
import HomePage from './components/HomePage';
import ProductsPage from './components/ProductsPage';
import AboutPage from './components/AboutPage';
import TotalPrice from './components/TotalPrice';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  const handleBuy = (price) => {
    setTotalPrice(totalPrice + price);
  };
  

  return (
    <Router>
      <div>
        <NavigationMenu />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage />
            }
          />
          <Route
            path="/products"
            element={
              <div>
                <TotalPrice totalPrice={totalPrice} />
                <ProductsPage onBuy={handleBuy} />
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div>
                <TotalPrice totalPrice={totalPrice} />
                <AboutPage totalPrice={totalPrice} />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
