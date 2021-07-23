import * as React from "react";
import BarraPesquisa from "../../components/BarraPesquisa";
import Faq from "../../components/Faq";
import styles from "./style.module.css";
import Navbar from "../../components/Navbar";
import PerfilMedico from "../../components/PerfilMedico";

function PerfilPro() {
  return (
    <>
      <div className={styles.Form}>
        <PerfilMedico />
      </div>
    </>
  );
}
export default PerfilPro;
