import * as React from "react";
import Caixainformacao from "../../components/CaixaInformacao";
import styles from "./style.module.css";

function Home1() {
  return (
    <>
      <div className={styles.container_logo}>
        <img src="./img/logomarca.png" alt="" />
      </div>
      <div className={styles.content}>
        <h6>Olá</h6>
        <p>Como podemos te ajudar hoje?</p>

        <div className={styles.description}>
          <p>
            Quem somos?
            <br /> A Medspot é um caminho para você se relacionar de forma
            prática e moderna com a sua saúde. É uma plataforma totalmente
            gratuita para o paciente que permite o agendamento de consultas
            online ou presenciais com uma variedade ampla de profissionais da
            saúde. Pelo aplicativo ou pelo site, o paciente pode marcar online
            suas consultas, ter acesso as informações de curriculo, avaliações
            de outros pacientes sobre o medico e se comunicar em um chat direto
            com o profissional.{" "}
          </p>

          <p>
            Nossa visão é que o paciente consiga centralizar toda vida médica
            dele na plataforma buscando facilitar e trazer praticidade na
            experiência de cuidar da saúde.
          </p>
        </div>
      </div>
      <div className={styles.box}>
        <Caixainformacao
          title="Faça sua conta e marque a consulta com os especialistas mais proximos de você"
          subtitle="Marque suas teleconsultas ou consultas presenciais sem precisar sair de casa"
          login="CRIE SUA CONTA"
          image="img/Medicine-bro.png"
        />
      </div>
    </>
  );
}

export default Home1;
