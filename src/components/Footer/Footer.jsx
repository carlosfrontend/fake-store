import styles from './Footer.module.css';
import Github from '../../Icons/Github';
import Linkedin from '../../Icons/Linkedin';
import X from '../../Icons/X';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <a title='XTwitter' href="https://x.com/CarlosFrontEnd" target='_blank' rel='noreferrer noopener'><X /></a>
        <a title='Linkedin' target='_blank' rel='noreferrer noopener' href="https://www.linkedin.com/in/carlosfrontend/"><Linkedin /></a>
        <a title='Github' target='_blank' rel='noreferrer noopener' href="https://github.com/carlosfrontend"><Github /></a>
      </div>

      <small className={styles.copyright}>
        &copy; Fake Store - {new Date().getFullYear()}
      </small>
    </footer>
  );
};
