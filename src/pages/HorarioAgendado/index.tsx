import React from 'react';
import Calendario from '../../components/Calendar';
import ClienteMarcado from '../../components/ClienteMarcado';
import Navbar from '../../components/Navbar';
import styles from './styles.module.css';

function HorarioAgendado(){
    return(
        <div className={styles.containerHorarioAgendado}>
            <Navbar />
            <main>
                <section>
                   <h1>Horários Agendados</h1>
                   <p>Hoje <span>|</span> Dia 06 <span>|</span> Segunda-feira</p>

                   <div className={styles.now}>
                       <h2>Atendimento a seguir</h2>
                       <div>
                           <div className={styles.profile}>
                            <div className={styles.photo}>
                                <img src="icons/profile-icon.svg" alt="Foto perfil" />
                            </div>
                            <p>Leonardo Minatti</p>

                           </div>
                            <div className={styles.horarioMarcado}>
                                <img src="icons/clock.svg" alt="Horário" />
                                <span>08:00</span>
                            </div>
                            
                       </div>
                       
                   </div>

                   <div className={styles.after}>
                       <div>
                           <h2>
                               Manhã
                               <span className={styles.line} />
                           </h2>
                           <hr />
                          <ClienteMarcado name="Leonardo" hour="08:30" photo="nada" /> 
                          <ClienteMarcado name="Larissa" hour="09:30" photo="nada" /> 
                          <ClienteMarcado name="Pedro" hour="10:30" photo="nada" /> 

                       </div>
                       <div>
                           <h2>
                               Tarde
                               <span className={styles.line} />
                            </h2>
                            <ClienteMarcado name="Leonardo" hour="12:30" photo="nada" /> 
                            <ClienteMarcado name="Larissa" hour="14:30" photo="nada" /> 
                            <ClienteMarcado name="Pedro" hour="16:30" photo="nada" /> 

                       </div>
                   </div>
                </section>
                <Calendario />
            </main>
            
        </div>
    );
}

export default HorarioAgendado;