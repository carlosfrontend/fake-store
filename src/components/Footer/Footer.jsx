import styles from './Footer.module.css';
import { SocialIcon } from 'react-social-icons';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <SocialIcon
          network='linkedin'
          style={{ height: 25, width: 25 }}
          url='https://www.linkedin.com/in/carlosfrontend/'
          target='_blank'
          fgColor='#336688'
          bgColor='#fff'
        />
        <SocialIcon
          network='github'
          style={{ height: 25, width: 25 }}
          target='_blank'
          url='https://github.com/carlosfrontend'
          fgColor='#336688'
          bgColor='#fff'
        />
        <SocialIcon
          network='x'
          style={{ height: 25, width: 25 }}
          url='https://x.com/CarlosFrontEnd'
          fgColor='#336688'
          bgColor='#fff'
          target='_blank'
        />
      </div>

      <small className={styles.copyright}>&copy; Fake Store - {new Date().getFullYear()}</small>
    </footer>
  );
};
