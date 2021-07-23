import React from 'react';
import styles from '../styles/components/ClientesMarcados.module.css'

interface ClienteItemProps {
    photo: string;
    name: string;
    hour: string;
}
  
const ClienteMarcado: React.FC<ClienteItemProps> = (props) => {
    return(
        <div className={styles.hour}>
            <span><img src="icons/clock.svg" alt="Horário" /> {props.hour}</span>
            <div className={styles.profile}>
                <div className={styles.photo}>
                    <img src="icons/profile-icon.svg" alt="Perfil" />
                </div>
                <p>{props.name}</p>

            </div>
        </div>
    );
}

export default ClienteMarcado;