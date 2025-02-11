import { ProductDetail } from '../ProductDetaill/ProductDetail';
import styles from './Shop.module.css';
import shoppingImage1 from '../../assets/shoppingImage1.svg';
import { useProducts } from '../../hooks/useProducts';

export const Shop = () => {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <div className={styles.centered}>
        <img
          className={styles.shoppingImage1}
          src={shoppingImage1}
          alt='A woman looking for clothes with her smartphone'
        />
        <form onSubmit={() => {}} className={styles.searchContainer}>
          <h2>Search a product</h2>
          <input
            type='search'
            id='search'
            className={styles.search}
            placeholder='Mens Casual Slim Fit '
            value={''}
            onChange={() => {}}
          />
          <div className={styles.filter}>
            <input type='checkbox' id='price' name='price' value='price' />
            <label htmlFor='price'>Order by price</label>
          </div>
          <input className={styles.searchButton} type='submit' value='Search' />
        </form>
      </div>
      <section className={styles.shop}>
        {products.map((product) => (
          <ProductDetail key={product.id} product={product} />
        ))}
      </section>
    </>
  );
};
