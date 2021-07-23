import * as React from "react";

import styles from "../styles/components/ConsultaItem.module.css";

interface ConsultaItemProps {
  doctor: string;
  speciality: string;
  day: string;
  hour: string;
}

const ConsultaItem: React.FC<ConsultaItemProps> = (props) => {
  return (
    <div className={styles.containerConsultaItem}>
      <div className={styles.profile}>
        <div className={styles.photoProfile}>
          <img src="icons/profile-icon.svg" alt="Foto do Perfil"/>
        </div>
        <div>
          <h2>Dr. {props.doctor}</h2>
          <h3>Especialidades: {props.speciality}</h3>
        </div>
      </div>
      <div className={styles.hour}>
        <h3>
          <span>Dia:</span> {props.day}
        </h3>
        <h3>
          <span>Horário:</span> {props.hour}
        </h3>
      </div>
    </div>
  );
};

export default ConsultaItem;
