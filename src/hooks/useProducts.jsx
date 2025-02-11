import { useEffect, useState } from 'react';
import { getProducts } from '../services/getProducts';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts({ setProducts, setLoading, setError });
  }, []);

  return { products, loading, error };
};
