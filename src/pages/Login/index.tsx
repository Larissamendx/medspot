import React, { useContext, useState } from "react";
import Link from "next/link";
import styles from "./style.module.css";
import { AuthContext } from "../../contexts/authContext";
import { ValidateContext } from "../../contexts/validateContext";

function Login() {
  const {signIn} = useContext(AuthContext);
  const {erros, validarCampos} = useContext(ValidateContext);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function handleSubmit(event) {
    event.preventDefault();
    signIn(email, password);
  }
    
  return (
    <div className={styles.containerLogin}>
      <Link href="/Home1">
        <img src="icons/back.svg" alt="Voltar" className={styles.back} />
      </Link>
      <img src="./img/logo-lg.png" alt="Logo" className={styles.logo} />

      <form>
        <div className={styles.inputWithIcon}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            onBlur={validarCampos}
          />
          <img
            src="./icons/avatar.svg"
            alt="Usuário"
            className={styles.iconLogin}
          />
           {!erros.email.valido && (
            <p className={styles.erro}>{erros.email.texto}</p>
          )}
        </div>
        <div className={styles.inputWithIcon}>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            onBlur={validarCampos}
          />
          <img
            src="./icons/padlock.svg"
            alt="Senha"
            className={styles.iconPassword}
          />
          {!erros.password.valido && (
            <p className={styles.erro}>{erros.password.texto}</p>
          )}
        </div>
        <button type="submit" onClick={handleSubmit}>
          LOGIN
        </button>

        <Link href="/CreateProfileUser">Criar Conta</Link>
        <div className={styles.profissional}>
          <Link href="/LoginPro">Profissional</Link>
        </div>
      </form>
      <Link href="/Login/newPassword">Esqueceu sua senha?</Link>
    </div>
  );
}

export default Login;
