import React, { useContext, useState } from "react";
import styles from "./style.module.css";
import Link from "next/link";
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
    <div className={styles.containerLoginPro}>
      <Link href="/Home1" >
        <img src="icons/back.svg" alt="Voltar" className={styles.back}/>
      </Link>
      <img src="./img/logo-pro.png" alt="Logo" className={styles.logo} />

      <form onSubmit={(event) => {
        event.preventDefault();
        console.log({email, password});
      }}>
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
          />
          <img src="./icons/avatar.svg" alt="Usuário" />
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
          />
          <img src="./icons/padlock.svg" alt="Senha" />
        </div>

        <button type="submit" onClick={handleSubmit}>LOGIN</button>
        <Link href="/CreateProfilePro">Criar Conta</Link>
      </form>
      <Link href="/LoginPro/newPassword">Esqueceu sua senha?</Link>
    </div>
  );
}

export default Login;
