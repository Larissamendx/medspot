import React from 'react';
import styles from '../styles/components/PopUpCodigoCadastro.module.css'

function CodigoCadastro() {
    return(
        <div className={styles.overlay}>
            <div className={styles.containerCodigoCadastro}>
                <h2>Cadastro Completo</h2>
                <p>Digite o código que foi enviado para o seu E-mail</p>
                <form>
                    <input type="text" placeholder="Digite o Código"/>
                    <button type="submit">Confirmar</button>
                </form>
            </div>
        </div>
    );
}

export default CodigoCadastro;