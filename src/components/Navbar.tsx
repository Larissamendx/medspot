import Link from "next/link";
import styles from "../styles/components/Navbar.module.css";
import Menu from "./Menu";

function Navbar() {
  return (
      <nav className={styles.navbar}>
        <Menu />
        <Link href="/Home2">
          <img src="img/logo-sm.png" alt="Logo" />
        </Link>
      </nav>
  );
}

export default Navbar;
