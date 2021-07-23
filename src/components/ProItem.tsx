import * as React from "react";
import style from "../styles/components/ProItem.module.css";

function ProItem() {
  return (
    <div className={style.containerProItem}>
      <div className={style.photoProfile}>
        <img src="icons/profile-icon.svg" alt="Foto do Perfil"/>
      </div>
      <div>
        <h2>Dr. Nome</h2>
        <h3>Especialidades:</h3>
      </div>
    </div>
  );
}

export default ProItem;
