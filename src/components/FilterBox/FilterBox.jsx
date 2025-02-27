import PropTypes from 'prop-types';
import styles from './FilterBox.module.css'

export const FilterBox = ({minPrice, handlePriceChange, handleCategoryChange}) => {
    

    return (
        <aside className={styles.filterBox}>
           <div className={styles.priceFilter}>
            <label htmlFor="price">From price:</label>
            <input type="range" id="price" min='0' max='800'  value={minPrice} onChange={handlePriceChange} />
            <span className={styles.priceValue}>${minPrice}</span>
           </div>

          <div className={styles.categoryFilter}>
            <label htmlFor="category">Category:</label>
            <select id="category" onChange={handleCategoryChange}>
              <option value="all">All</option>
              <option value="men's clothing">Men&apos;s Clothing</option>
              <option value="women's clothing">Women&apos;s Clothing</option>
              <option value="jewelery">Jewelery</option>
              <option value="electronics">Electronics</option>
            </select>
          </div>
        </aside>
    )
}

FilterBox.propTypes = {
    minPrice: PropTypes.number,
    handlePriceChange: PropTypes.func,
    handleCategoryChange: PropTypes.func
}