import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import brandLogo from '../../assets/brandLogo.svg'
import { ShoppingCart } from 'lucide-react';
import styles from './Header.module.css'

const Links = ({cartItemsCount}) => {
    return (
        <nav className={styles.menu}>
            <Link to="/" className={styles.link}>Home</Link>
            <Link className={styles.link} to="/shop">Shop</Link>
            <Link to="/cart" title ="Shopping Cart" className={styles.cartLink}><ShoppingCart strokeWidth={3} color="#336688" /> {cartItemsCount}</Link>
        </nav>
    )
}

const Header = ({cartItemsCount}) => {
    return (
        <header className={styles.header}>
          <Link className={styles.brand} to='/'>
          <img src={brandLogo} alt="brand logo" />
          <span>Fake Store</span>
          </Link>
         
            <Links cartItemsCount={cartItemsCount} />
        </header>
    )
}

export default Header

Links.propTypes = {
    cartItemsCount: PropTypes.number
}

Header.propTypes = {
    cartItemsCount: PropTypes.number
}