import { useOutletContext } from 'react-router-dom';
import HeroCartCard from '../HeroCartCard/HeroCartCard';
import ShoppingList from '../ShoppingList/ShoppingList';
import { useEffect } from 'react';

export const Cart = () => {
  const { cartItems, setCartItems } = useOutletContext();
  const productsQuantity = cartItems.reduce(
    (total = 0, item) => total + item.amount,
    0
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroCartCard productsQuantity={productsQuantity} />
      {productsQuantity > 0 ?  (
        <ShoppingList cartItems={cartItems} setCartItems={setCartItems} />
      ): null}
    </>
  );
};
