import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import NavMenu from './NavMenu';
import logo from '../logo.png';

function Header() {

  //Проверка положения окна
  const [scroll, setScroll] = useState(false);
  useEffect(()=> {

    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 100)
    })
  })

  return (
    <div className={`${styles.header_wrap} ${scroll ? styles.scrolled : ''}`}>
      <header className={styles.header}>
        <img src={logo} ></img>
        <NavMenu />
      </header>
    </div>
  );
}

export default Header;
