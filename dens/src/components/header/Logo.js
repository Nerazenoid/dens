import styles from './NavMenu.module.css';

function NavMenu() {

  return (
    <nav className="navigation">
      <ul className={styles.nav_menu}>
        <li className={styles.nav_item}>О нас</li>
        <li className={styles.nav_item}>Услуги</li>
        <li className={styles.nav_item}>Врачи</li>
        <li className={styles.nav_item}>Контакты</li>
      </ul>
    </nav>
  );
}

export default NavMenu;
