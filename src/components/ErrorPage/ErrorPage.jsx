import { ShieldAlert } from 'lucide-react';
import styles from './ErrorPage.module.css'
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
    return (
        <section className={styles.errorPage}>
           <div className={styles.circle}>
               <ShieldAlert size={100} fill="none" color='#fff' />
           </div>
            <h1 className={styles.title}>Page not found 404</h1>
            <Link className={styles.link} to="/">Back to home</Link>
        </section>
    )
}