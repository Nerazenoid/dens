import styles from './Header.module.css';
import logo from '../logo.png';

function Logo() {

  return (
    <div className={styles.logo_wrap}>
      <img src={logo} alt='Логотип' ></img>
    </div>
  );
}

export default Logo;
