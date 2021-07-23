import React, { useContext, useState } from "react";
import Link from "next/link";
import styles from "./style.module.css";
import { validarConfirmacaoSenha, validarSenha } from "../../models/cadastro";
import { ValidateContext } from "../../contexts/validateContext";

const validacoes = {
  confirmarSenha: validarConfirmacaoSenha,
  senha: validarSenha,
};

function newPassword() {
  //Pegar os dados de senha e confirmação
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {erros, validarCampos, valido, possoEnviar} = useContext(ValidateContext);

  return (
    <div className={styles.containerLoginPro}>
      <Link href="/LoginPro">
        <img src="/icons/back.svg" alt="Voltar" className={styles.back} />
      </Link>
      <img src="../img/logo-pro.png" alt="Logo" className={styles.logo} />

      <form onSubmit={(event) => {
        event.preventDefault();
        if(valido) {
          console.log(password);
        }
      }}>
        <div className={styles.inputWithIcon}>
          <input
            type="password"
            name="senha"
            placeholder="Senha nova"
            value={password}
            required
            onBlur={validarCampos}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <img
            src="../icons/padlock.svg"
            alt="Senha"
            className={styles.iconPassword}
          />
        {!erros.senha.valido && <p className={styles.erro}>{erros.senha.texto}</p>}

        </div>
        <div className={styles.inputWithIcon}>
          <input
            type="password"
            name="confirmarSenha"
            placeholder="Confirme senha nova"
            required
            onBlur={validarCampos}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <img
            src="../icons/padlock.svg"
            alt="Senha"
            className={styles.iconPassword}
          />
        {!erros.confirmarSenha.valido && <p className={styles.erro}>{erros.confirmarSenha.texto}</p>}

        </div>

        <button type="submit" className={styles.confirm} onClick={possoEnviar}>
          Confirmar
        </button>
      </form>
    </div>
  );
}

export default newPassword;
