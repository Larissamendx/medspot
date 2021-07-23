import React, { useContext, useState } from "react";
import Link from "next/link";
import styles from "./style.module.css";
import { ValidateContext } from "../../contexts/validateContext";
import { api } from "../../services/api";
import { validarEmail } from "../../models/login";

function newPassword() {
  //Pegar os dados de Senha
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { erros, validarCampos, valido, possoEnviar, validarConfirmacaoSenha } =
    useContext(ValidateContext);

  async function handleReset() {
    const token = localStorage.getItem("token-access");
    console.log(token);

    try {
      const response = await api.post("/password/reset", { password, token });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.containerLogin}>
      <Link href="/Login">
        <img src="/icons/back.svg" alt="Voltar" className={styles.back} />
      </Link>
      <img src="../img/logo-lg.png" alt="Logo" className={styles.logo} />

      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (valido) {
            console.log("Senha trocada");
            handleReset();
          }
        }}
      >
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
          {!erros.senha.valido && (
            <p className={styles.erro}>{erros.senha.texto}</p>
          )}
        </div>
        <div className={styles.inputWithIcon}>
          <input
            type="password"
            name="confirmarSenha"
            placeholder="Confirme senha nova"
            required
            onBlur={(e) => {
              validarConfirmacaoSenha(e, confirmPassword, password)
            }}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <img
            src="../icons/padlock.svg"
            alt="Senha"
            className={styles.iconPassword}
          />
          {!erros.confirmarSenha.valido && (
            <p className={styles.erro}>{erros.confirmarSenha.texto}</p>
          )}
        </div>

        <button type="submit" className={styles.confirm} onClick={possoEnviar}>
          Confirmar
        </button>
      </form>
    </div>
  );
}

export default newPassword;
