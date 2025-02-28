import { Link } from 'react-router-dom';
import purchaseImage from '../../assets/purchase.svg';
import styles from './HeroCartCard.module.css';
import PropTypes from 'prop-types';

const HeroCartCard = ({ productsQuantity }) => {
  return (
    <div className={styles.container} id='hero'>
      <img
        className={styles.img}
        src={purchaseImage}
        alt='A drawing of a woman making a purchase.'
      />
      {productsQuantity <= 0 ? (
        <>
          <h2 className={styles.title}>
            Your cart is empty <span>😔</span> !
          </h2>
          <Link to='/shop' className={styles.buyButton}>
            Buy something
          </Link>
        </>
      ) : (
        <h2 className={styles.title}>
          You have {productsQuantity} products in your cart <span>😊</span> !
        </h2>
      )}
      <div>
        {productsQuantity > 0 && (
          <a href='#shoppingList' className={styles.link}>
            <h2>
              View the shopping list <span>👇</span>
            </h2>
          </a>
        )}
      </div>
    </div>
  );
};

export default HeroCartCard;

HeroCartCard.propTypes = {
  productsQuantity: PropTypes.number
};
