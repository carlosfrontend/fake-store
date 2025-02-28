import { ProductDetail } from '../ProductDetaill/ProductDetail';
import styles from './Shop.module.css';
import shoppingImage1 from '../../assets/shoppingImage1.svg';
import { useProducts } from '../../hooks/useProducts';
import { FilterBox } from '../FilterBox/FilterBox';
import { useOutletContext } from 'react-router-dom';
import  Loader  from '../Loader/Loader';
import { NetworkError } from '../NetworkError/NetworkError';

export const Shop = () => {
  const { products, loading, error } = useProducts();
  const { filters, setFilters } = useOutletContext();

  const handlePriceChange = (e) => {
    setFilters({ ...filters, minPrice: e.target.value });
  };

  const handleCategoryChange = (e) => {
    setFilters({ ...filters, category: e.target.value });
  };

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <NetworkError error={error} />;
  }

  const filterProducts = (products) => {
    return products.filter(
      (product) =>
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
    );
  };
  const filteredProducts = filterProducts(products);

  return (
    <>
      <div className={styles.centered}>
        <img
          className={styles.shoppingImage1}
          src={shoppingImage1}
          alt='A woman looking for clothes with her smartphone'
        />
      </div>
      <FilterBox
        minPrice={filters.minPrice}
        handlePriceChange={handlePriceChange}
        handleCategoryChange={handleCategoryChange}
      />
      {filteredProducts.length === 0 && (
        <p className={styles.noProducts}>
          No products found with the selected filters.
        </p>
      )}
      <section className={styles.shop}>
        {filteredProducts.length > 0 &&
          filteredProducts.map((product) => (
            <ProductDetail key={product.id} product={product} />
          ))}
      </section>
    </>
  );
};
