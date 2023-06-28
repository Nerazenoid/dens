import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import NavMenu from './NavMenu';

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
        <NavMenu></NavMenu>
      </header>
    </div>
  );
}

export default Header;
