import * as React from "react";
import Calendario from "../../components/Calendar";
import HeaderPro from "../../components/HeaderPro";
import Horario from "../../components/Horario";
import styles from "./style.module.css";

function ProfilePro() {
  return (
    <div className={styles.containerProfilePro}>
      <div>
        <HeaderPro />
      </div>
      <main>
          <div>
            <h2>Escolha a data do atendimento</h2>
            <Calendario />
          </div>
          <div>
            <h2>Escolha o horário do atendimento</h2>
            <Horario />
          </div>
      </main>
    </div>
  );
}

export default ProfilePro;
