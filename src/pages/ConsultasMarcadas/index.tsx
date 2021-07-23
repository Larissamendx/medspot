import * as React from "react";
import BarraPesquisa from "../../components/BarraPesquisa";
import ConsultaItem from "../../components/ConsultaItem";
import Navbar from "../../components/Navbar";
import styles from "./style.module.css";

function ConsultasMarcadas() {
  return (
    <div className={styles.containerConsulta}>
      <div className={styles.nav}>
        <Navbar />
        <BarraPesquisa />
      </div>
      <div className={styles.consultaItem}>
        <ConsultaItem
          doctor="Ferdinando"
          speciality="Cardio"
          day="14/05"
          hour="18:00"
        />
        <ConsultaItem
          doctor="José"
          speciality="Neuro"
          day="12/05"
          hour="10:00"
        />
        <ConsultaItem
          doctor="Ferdinando"
          speciality="Cardio"
          day="14/05"
          hour="18:00"
        />
      </div>
    </div>
  );
}

export default ConsultasMarcadas;
