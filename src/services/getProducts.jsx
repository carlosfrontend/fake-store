export const getProducts = ({ setProducts, setLoading, setError }) => {
  return fetch('https://fakestoreapi.com/products')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => setProducts(data))
    .catch((error) => setError(error.message))
    .finally(() => setLoading(false));
};
