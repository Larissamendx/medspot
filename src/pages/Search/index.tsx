import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";
import BarraPesquisa from "../../components/BarraPesquisa";
import Navbar from "../../components/Navbar";
import ProItem from "../../components/ProItem";
import styles from "./style.module.css";
import {api} from '../../services/api';

export default function Search() {
  return (
    <div className={styles.containerSearch}>
      <div className={styles.nav}>
        <Navbar />
        <BarraPesquisa />
      </div>
      <div className={styles.containerItem}>
        <div className={styles.filter}>
          <div id="search" className={styles.localization}>
            <input type="text" id="txtBusca" placeholder="Localização" />
            <img
              src="/icons/localization-white.svg"
              id="btnBusca"
              alt="Buscar"
            />
          </div>
          <div className={styles.filter1}>
            <button className={styles.btnLeft}>Particular</button>
            <button className={styles.btnRight}>Plano de Saúde</button>
          </div>
          <div className={styles.filter2}>
            <button type="button">Cardiologista</button>
            <button type="button">Dentista</button>
            <button type="button">Endocrinologia</button>
            <button type="button">Ginecologista</button>
            <button type="button">Neurologista</button>
            <button type="button">Nutricionista</button>
            <button type="button">Psicólogo</button>
            <button type="button">Mais opções...</button>
          </div>
        </div>
        <a href="/ProfilePro">
          <ProItem />
        </a  >
        <Link href="/ProfilePro">
          <ProItem />
        </Link>
        <Link href="/ProfilePro">
          <ProItem />
        </Link>
        <Link href="/ProfilePro">
          <ProItem />
        </Link>
      </div>
    </div>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const { data } = await api.get("/providers");
  
//   const doctors = data.map((doctor) => {
//     return {

//     };
//   });
  
//   return {
//     props: {
  
//     },

//   };
// }
