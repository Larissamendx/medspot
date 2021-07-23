import React from "react";
import styles from "../styles/components/BarraPesquisa.module.css"
function barraPesquisa () {
    return (
         
        <div id="search" className={styles.Busca}>
            <input type="text" id="txtBusca" placeholder="Encontre especialistas e clinicas"/>
            <img src="img/LupaPesquisa.png" id="btnBusca" alt="Buscar"/>
         </div>
    );
}

export default barraPesquisa;