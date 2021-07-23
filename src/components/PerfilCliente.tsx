import react from "react";
import { Container, Form } from "react-bootstrap";
import styles from "../styles/components/PerfilCliente.module.css";
import Button from "react-bootstrap";
import Link from "next/link";

function PerfilCliente() {
  return (
    <div className={styles.Container}>
      <div className={styles.foto}>
        <img src="icons/profile-icon.svg" alt="Foto do Perfil" />
        <h2>Nome</h2>
      </div>

      <div className={styles.Buttons}>
        <img src="img/edit.png" />
        <Link href="/CreateProfilePro">
          <button type="submit">Editar informações</button>
        </Link>
      </div>

      <div className={styles.Buttons}>
        <img src="img/book.png" />
        <Link href="/CreateProfilePro">
          <button type="submit">Termos e condiçõess</button>
        </Link>
      </div>

      <div className={styles.Buttons}>
        <img src="img/star.png" />
        <Link href="/CreateProfilePro">
          <button type="submit">Avalie o site</button>
        </Link>
      </div>

      <div className={styles.Buttons}>
        <img src="img/logout.png" />
        <Link href="/Home_1">
          <button type="submit">Sair</button>
        </Link>
      </div>
    </div>
  );
}

export default PerfilCliente;
