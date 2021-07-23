import * as React from 'react';
import style from '../styles/components/Horario.module.css';

function Horario() {
    const Horarios = ["07:30", "08:30", "10:30"]
    return(
        <div className={style.containerHorario}>
            <div className={style.data}>
                <h2>Terça-Feira</h2>
                <h3>06/04</h3>
            </div>
            <div className={style.hora}>
                {Horarios.map((horario) => (
                    <span>{horario}</span>
                ))}

            </div>
        </div>
    );
}

export default Horario;