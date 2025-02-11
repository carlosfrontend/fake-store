import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import { useState } from 'react';
import { Footer } from './components/Footer/Footer';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const totalItems = cartItems.reduce((total, item) => total + item.amount, 0);

  return (
    <>
      <Header cartItemsCount={totalItems} />
      <Outlet context={{ cartItems, setCartItems }} />
      <Footer />
    </>
  );
}

export default App;
