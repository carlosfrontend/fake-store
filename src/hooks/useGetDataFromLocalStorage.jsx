import { useEffect } from 'react';

export const useGetDataFromLocalStorage = (key, setCartItems) => {
  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem(key)) || []);
  }, [key, setCartItems]);
};
