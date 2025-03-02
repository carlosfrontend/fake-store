import { WifiOffIcon } from 'lucide-react';
import styles from './NetworkError.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const NetworkError = ({ error }) => {
    return (
        <section className={styles.networkError} role='alert'>
            <h3 className={styles.title}>Network Error</h3>
            <WifiOffIcon role='img' size={100} fill='none' color='#88334c' />
            <p className={styles.error}>{error}</p>
            <p className={styles.text}>Please check your internet connection and try again.</p>
            <Link className={styles.link} to='/'>
                Back to home
            </Link>
        </section>
    );
};

NetworkError.propTypes = {
    error: PropTypes.string
};