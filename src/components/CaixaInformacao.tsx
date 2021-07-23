import Link from "next/link";
import react from "react";
import styles from "../styles/components/Caixainformacao.module.css";

interface boxProps {
  title: string;
  subtitle: string;
  login: string;
  image: string;
}

const Caixainformacao: React.FC<boxProps> = (props) => {
  return (
    <div className={styles.box}>
      <div className={styles.text}>
        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
        <Link href="/Login">
          <h3 className={styles.link}>
            {props.login} <img src="img/Union.png" alt="" />
          </h3>
        </Link>
      </div>
      <div className={styles.image}>
          <img src={props.image} alt="Crie sua conta"/>
      </div>
    </div>
  );
};

export default Caixainformacao;
