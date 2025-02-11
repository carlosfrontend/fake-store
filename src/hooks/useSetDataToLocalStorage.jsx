import { useEffect } from 'react';

export const useSetDataToLocalStorage = (key, cartItems) => {
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(cartItems));
  }, [key, cartItems]);
};
