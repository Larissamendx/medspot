import Link from "next/link";
import * as React from "react";
import { Container } from "react-bootstrap";
import BarraPesquisa from "../../components/BarraPesquisa";
import Caixainformacao from "../../components/CaixaInformacao";
import NavbarHome from "../../components/NavbarHome";
import styles from "./style.module.css";

function HomeAuth() {
  return (
    <>
    <div className={styles.navbar}>
      <NavbarHome />
      </div>
      <div className={styles.pesquisa}>
        <BarraPesquisa />
      </div>
      <div className={styles.content}>
        <h6>Olá</h6>
        <p>Como podemos te ajudar hoje?</p>
      </div>
      <div className={styles.box}>
        <h3>Faça consultas direto da sua casa</h3>
        <p>Realize sua consulta de forma segura por video ou chamada</p>

        <Link href="/Search">
          <h3>
            Agendar consultas <img src="img/Union.png" alt="" />
          </h3>
        </Link>

        <img className={styles.img_caixa} src="img/Online-Doctor-bro.png" />
      </div>
    </>
  );
}

export default HomeAuth;
