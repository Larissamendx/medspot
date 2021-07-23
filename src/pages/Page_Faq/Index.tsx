import * as React from 'react';
import BarraPesquisa from '../../components/BarraPesquisa';
import Faq from "../../components/Faq";
import styles from "./style.module.css";
import Navbar from "../../components/Navbar";

function page_Faq() {
    return(
        <>
            <Navbar/>
            <div className={styles.pesquisa}>
            <BarraPesquisa/>
            </div>
                <div className={styles.containerFaq}>

                   <Faq title="Qual valor da consulta com um cardio?"
                        subtitle = "Resposta: 150 reais vei"
                   />
                   <Faq title="Qual valor da consulta com um Neuro?"
                        subtitle = "Resposta: 150 reais vei"
                   />
                   <Faq title="Qual valor da consulta com um psicologo?"
                        subtitle = "Resposta: 150 reais vei"
                   />
                   <Faq title="Qual valor da consulta com um Radialista?"
                        subtitle = "Resposta: 150 reais vei"
                   />
                   <Faq title="Qual valor da consulta com um cardio?"
                        subtitle = "Resposta: 150 reais vei"
                   />
                   <Faq title="Qual valor da consulta com um cardio?"
                        subtitle = "Resposta: 150 reais vei"
                   />
                   <Faq title="Qual valor da consulta com um cardio?"
                        subtitle = "Resposta: 150 reais vei"
                   />
                   
               </div>
        </>
    );
}
export default page_Faq;