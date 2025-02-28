import styles from './Loader.module.css';
const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loaderContainer}>
        <div className={styles.loader}></div>
        <div className={styles.loadingText}>
          <h3 className={styles.text}>Loading ...</h3>
        </div>
      </div>
    </div>
  );
};
export default Loader;
