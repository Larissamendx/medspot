import * as React from 'react';
import BarraPesquisa from '../../components/BarraPesquisa';
import Faq from "../../components/Faq";
import styles from "./style.module.css";
import PerfilCliente from '../../components/PerfilCliente';
import Navbar from '../../components/Navbar';

function PerfilPro() {
    return(
        <>
        <div className={styles.Form}>
        <div className={styles.nav}>
        <Navbar />
        <BarraPesquisa />
      </div>
        <PerfilCliente/>
        </div>
        </>
    );
}
export default PerfilPro;