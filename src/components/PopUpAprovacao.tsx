import React from 'react';
import styles from '../styles/components/PopUpAprovacao.module.css'
import Link from 'next/link';

function Aprovacao() {
    return(
        <div className={styles.overlay}>
            <div className={styles.containerAprovacao}>
                <h2>Cadastro Completo</h2>
                <p>Você será aprovado em torno de 24 horas. Fique de olho em seu e-mail.</p>
                <Link href="/Home_1">Confirmar</Link>
            </div>
        </div>
    );
}

export default Aprovacao;