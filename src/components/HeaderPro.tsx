import Link from "next/link";
import * as React from "react";
import style from "../styles/components/HeaderPro.module.css";
import BarraPesquisa from "./BarraPesquisa";
import Menu from "./Menu";

function HeaderPro() {
  return (
    <div className={style.containerHeaderPro}>
      <nav>
        <Menu />
        <div className={style.search}>
          <BarraPesquisa />
        </div>
        <Link href="/Home2">
          <img src="img/logo-sm.png" alt="Logo" />
        </Link>
      </nav>
      <div>
        <div className={style.photoProfile}>
          <img src="icons/profile-icon.svg" alt="Foto do Perfil"/>
        </div>
        <div>
          <h2>Dr. Nome</h2>
          <h3>
            Especialização: <span>Sou médico</span>
          </h3>
          <h3>Meio de Pagamento: <span>Plano de Saúde</span></h3>
          <span className={style.star}>
            <img src="icons/star.svg" alt="Estrela" /> 5,0
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeaderPro;
