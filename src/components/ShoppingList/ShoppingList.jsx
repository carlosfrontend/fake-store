import { Send, Trash } from 'lucide-react';
import styles from './ShoppingList.module.css';
import PropTypes from 'prop-types';
import { toast } from '@pheralb/toast';

const ShoppingList = ({ cartItems, setCartItems }) => {
  const handleAmountChange = (e) => {
    const id = +e.target.id;
    let newAmount = +e.target.value;

    if (newAmount < 1) {
      return;
    }
    const newCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, amount: newAmount };
      }
      return item;
    });

    setCartItems(newCartItems);
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
  };

  const handleIncrement = (id) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    setCartItems(newCartItems);
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
  };

  const removeItem = (id) => {
    const title = cartItems.find((item) => item.id === id).title;
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    toast.error({
      text: `The product ${title} was removed !`,
      description: 'Go to the Shop to add it if you want to buy it again'
    });
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.setItem('cartItems', JSON.stringify([]));
    toast.success({
      text: 'The cart was cleared !',
      description: 'Go to the Shop to add new products'
    });
  };

  const handleDecrement = (id) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === id && item.amount > 1) {
        return { ...item, amount: item.amount - 1 };
      }
      return item;
    });
    setCartItems(newCartItems);
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
  };

  return (
    <section className={styles.container} id='shoppingList'>
      <h2 className={styles.title}>Shopping List</h2>
      <ul className={styles.list}>
        {cartItems.map((item) => (
          <li key={item.id} className={styles.item}>
            <img
              className={styles.img}
              width={100}
              src={item.image}
              alt={item.title}
            />
            <div className={styles.textContainer}>
              <h3 className={styles.productTitle}>{item.title}</h3>
              <div className={styles.priceContainer}>
                <div className={styles.price}>
                  <div className={styles.amountContainer}>
                    <button
                      className={styles.buttonMinus}
                      onClick={() => handleDecrement(item.id)}
                    >
                      -
                    </button>
                    <input
                      id={item.id}
                      type='number'
                      className={styles.amount}
                      value={item.amount}
                      onChange={handleAmountChange}
                    />
                    <button
                      className={styles.buttonPlus}
                      onClick={() => handleIncrement(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <div className={styles.subtotalContainer}>
                    <span className={styles.priceText}>
                      ${item.price} X {item.amount} = &nbsp;
                    </span>{' '}
                    <span className={styles.subtotal}>
                      {' '}
                      ${(item.price * item.amount).toFixed(2)}
                    </span>
                  </div>
                </div>
                <button
                  className={styles.button}
                  onClick={() => removeItem(item.id)}
                >
                  <Trash color='red' size={20} cursor={'pointer'} fill='red' />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p className={styles.itemsCount}>
        There are {cartItems.length} items in your cart !
      </p>
      <h3 className={styles.total}>
        Total: $
        {cartItems
          .reduce((acc, item) => acc + item.price * item.amount, 0)
          .toFixed(2)}
      </h3>
      <button className={styles.clearButton} onClick={clearCart}>
        <Trash />
        Clear Cart
      </button>
      <button className={styles.checkoutButton}>
        <Send />
        Checkout
      </button>
    </section>
  );
};

export default ShoppingList;

ShoppingList.propTypes = {
  cartItems: PropTypes.array,
  setCartItems: PropTypes.func
};
