import React from "react";
import { Dropdown } from "react-bootstrap";
import styles from "../styles/components/Menu.module.css";

function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown className={styles.drop}>
        <Dropdown.Toggle id="dropdown-basic" className={styles.dropbtn}>
          <img src="icons/menu.svg" alt="Menu" />
        </Dropdown.Toggle>

        <Dropdown.Menu className={styles.dropContent}>
          <Dropdown.Item href="#/Profile">
            <img src="icons/avatar.svg" alt="Perfil" />
            Perfil
          </Dropdown.Item>
          <Dropdown.Item href="/Notification">
            <img src="icons/envelope.svg" alt="Perfil" />
            Notificações
          </Dropdown.Item>
          <Dropdown.Item href="/Page_Faq">
            <img src="icons/faq.svg" alt="Perfil" />
            F.A.Q.
          </Dropdown.Item>
          <Dropdown.Item href="/ConsultasMarcadas">
            <img src="icons/tag.svg" alt="Perfil" />
            Consultas
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Menu;
