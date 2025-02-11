import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import { useState } from 'react';
import { Footer } from './components/Footer/Footer';
import { useDataFromLocalStorage } from './hooks/useDataFromLocalStorage';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const totalItems = cartItems.reduce((total, item) => total + item.amount, 0);
  useDataFromLocalStorage('cartItems', setCartItems);


  return (
    <>
      <Header cartItemsCount={totalItems} />
      <Outlet context={{ cartItems, setCartItems }} />
      <Footer />
    </>
  );
}

export default App;
