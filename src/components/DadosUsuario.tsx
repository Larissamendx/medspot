import React, { useContext, useState } from "react";
import InputMask from "react-input-mask";
import styles from "../styles/components/DadosUsuario.module.css";
import CodigoCadastro from "./PopUpCodigoCadastro";
import Aprovacao from "./PopUpAprovacao";
import { ValidateContext } from "../contexts/validateContext";

function DadosUsuario({ aoEnviar }) {
  const {valido, erros, possoEnviar, validarCampos, validarConfirmacaoSenha} = useContext(ValidateContext);
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  return (
    <div className={styles.containerDadosUsuario}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (valido) {
            aoEnviar({ photo, name, email, password, phone });
          }
        }}
      >
        <div>
          {valido && <CodigoCadastro />}

          <img src="icons/profile-icon.svg" alt="Foto do Perfil" />
          <span>
            <label htmlFor="flProfile" className={styles.photo}>
              <img src="icons/plus.svg" alt="Plus" id="ftProfile" />
            </label>
            <input
              type="file"
              name=""
              id="flProfile"
              accept="image/*"
              onChange={(e) => {
               setPhoto(e.target.value);
              }}
            />
          </span>
        </div>
        <div className={styles.inputWithIcon}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome completo"
            value={name}
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <img src="./icons/avatar.svg" alt="Usuário" />
        </div>
        <div className={styles.inputWithIcon}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <img src="./icons/envelope.svg" alt="E-mail" />
        </div>
        <div className={styles.inputWithIcon}>
          <InputMask
            mask="(99) 99999-9999"
            maskChar=" "
            placeholder="Telefone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          ></InputMask>
          <img src="./icons/phone.svg" alt="Usuário" />
        </div>
        <div className={styles.inputWithIcon}>
          <input
            type="password"
            name="senha"
            id="password"
            placeholder="Senha"
            value={password}
            required
            onBlur={validarCampos}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <img src="./icons/padlock.svg" alt="Senha" />
          {!erros.senha.valido && (
            <p className={styles.erro}>{erros.senha.texto}</p>
          )}
        </div>
        <div className={styles.inputWithIcon}>
          <input
            type="password"
            name="confirmarSenha"
            id="confirmPassword"
            placeholder="Confirme sua Senha"
            value={confirmPassword}
            required
            onBlur={(e) => {
              validarConfirmacaoSenha(e, confirmPassword, password)
            }}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <img src="./icons/padlock.svg" alt="Senha" />
          {!erros.confirmarSenha.valido && (
            <p className={styles.erro}>{erros.confirmarSenha.texto}</p>
          )}
        </div>
        <button type="submit" onClick={possoEnviar}>
          CONTINUAR
        </button>
      </form>
    </div>
  );
}

export default DadosUsuario;
