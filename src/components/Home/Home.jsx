import { Link } from 'react-router-dom';
import shoppingBags from '../../assets/shoppingBags.svg';
import styles from './Home.module.css';

export const Home = () => {
  return (
    <section className={styles.home}>
      <Link to='shop' title='Shop Now!'>
        <img className={styles.img} src={shoppingBags} alt='shopping bags' />
      </Link>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to Fake Store</h1>
        <h2 className={styles.subtitle}>
          Your one stop shop for all your shopping needs
        </h2>
        <div className={styles.linkContainer}>
          <Link to='/shop' className={styles.link}>
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};
