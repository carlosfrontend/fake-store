import { useEffect } from 'react';

export const useDataFromLocalStorage = (key, setCartItems) => {
  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem(key)) || []);
  }, [key, setCartItems]);
};
