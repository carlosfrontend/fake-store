import styles from './ProductDetail.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { toast } from '@pheralb/toast';
import { useSetDataToLocalStorage } from '../../hooks/useSetDataToLocalStorage';

export const ProductDetail = ({ product }) => {
  const { cartItems, setCartItems } = useOutletContext();
  const [amount, setAmount] = useState(1);
  useSetDataToLocalStorage('cartItems', cartItems);

  const handleAmountChange = (e) => {
    setAmount(+e.target.value);
  };

  const handleIncrement = () => {
    setAmount(amount + 1);
  };

  const handleDecrement = () => {
    if (amount <= 0) return;
    setAmount(amount - 1);
  };

  const addToCart = ({ product }) => {
    if (amount === 0) {
      toast.error({
        text: 'Amount can not be 0 !',
        description: 'Try setting amount to 1 as minimum',
      });
      return;
    }
    const productInCart = cartItems.find((item) => item.id === product.id);
    let newSubtotal = (product.price * amount).toFixed(2);
    if (!productInCart) {
      setCartItems([
        ...cartItems,
        { ...product, amount, subtotal: JSON.parse(newSubtotal) }
      ]);
      setAmount(1);
    } else {
      const newCartItems = cartItems.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            amount: item.amount + amount,
            subtotal: Number(
              (item.subtotal += JSON.parse(newSubtotal)).toFixed(2)
            )
          };
        }
        return item;
      });
      setCartItems(newCartItems);
      setAmount(1);
    }
    toast.success({
      text:
        amount === 1
          ? amount + ' Product added to cart 👌'
          : amount + ' Products added to cart 👌',
      description: '✨ ' + product.title
    });
  };

  return (
    <article className={styles.productDetail}>
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} />
      <p className={styles.description}>{product.description}</p>
      <p className={styles.price}>$ {product.price}</p>
      <div className={styles.quantity}>
        <button onClick={handleDecrement} className={styles.minusButton}>
          -
        </button>
        <input
          min={0}
          type='number'
          onChange={handleAmountChange}
          value={amount}
          id={product.id}
          name='amount'
        />
        <button onClick={handleIncrement} className={styles.plusButton}>
          +
        </button>
      </div>
      <button
        onClick={() => addToCart({ product })}
        className={styles.addToCart}
      >
        Add to cart
      </button>
    </article>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.object
};
