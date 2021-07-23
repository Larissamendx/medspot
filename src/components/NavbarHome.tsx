import styles from "../styles/components/NavBarHome.module.css";
import Menu from "./Menu";

function NavbarHome() {
  return (
    <header className={styles.navbarHome}>
      <img src="img/logo-md.png" alt="Logo" className={styles.logo} />
      <nav>
        <Menu />
      </nav>
    </header>
  );
}

export default NavbarHome;
