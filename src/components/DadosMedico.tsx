import React, { useState } from "react";
import InputMask from "react-input-mask";
import styles from "../styles/components/DadosMedico.module.css";
import { validarConfirmacaoSenha } from "../models/cadastro";

export default function DadosMedico({ aoEnviar, validacoes }) {
  const [foto, setFoto] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCPF] = useState("");
  const [localization, setLocalization] = useState("");
  const [valido, setValido] = useState(false);
  const [erros, setErros] = useState({
    cpf: { valido: true, texto: "" },
    senha: { valido: true, texto: "" },
    confirmarSenha: { valido: true, texto: "" },
  });

  function validarCampos(event) {
    const novoErro = { ...erros };
    const { name, value } = event.target;
    if (name == "confirmarSenha") {
      novoErro[name] = validarConfirmacaoSenha(confirmPassword, password);
      setErros(novoErro);
    } else {
      novoErro[name] = validacoes[name](value);
      setErros(novoErro);
    }
  }

  function possoEnviar() {
    for (let i in erros) {
      if (!erros[i].valido) {
        setValido(false);
        break;
      } else {
        setValido(true);
      }
    }
  }

  return (
    <div className={styles.containerDadosMedico}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (valido) {
            aoEnviar({ foto, name, email, password, phone, localization });
          }
        }}
      >
        <div>
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
                setFoto(e.target.value);
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
            type="number"
            name="cpf"
            id="cpf"
            placeholder="CPF/RG"
            value={cpf}
            required
            onChange={(e) => {
              setCPF(e.target.value);
            }}
            onBlur={validarCampos}
          />
          <img src="./icons/avatar.svg" alt="CPF/RG" />
          {!erros.cpf.valido && (
            <p className={styles.erro}>{erros.cpf.texto}</p>
          )}
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
          <img src="./icons/phone.svg" alt="Telefone" />
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
            placeholder="Confirme sua Senha"
            value={confirmPassword}
            required
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            onBlur={validarCampos}
          />
          <img src="./icons/padlock.svg" alt="Senha" />
          {!erros.confirmarSenha.valido && (
            <p className={styles.erro}>{erros.confirmarSenha.texto}</p>
          )}
        </div>
        <div className={styles.inputWithIcon}>
          <input
            type="text"
            name="localization"
            id="localization"
            placeholder="Localização"
            value={localization}
            required
            onChange={(e) => {
              setLocalization(e.target.value);
            }}
          />
          <img src="./icons/localization.svg" alt="Localização" />
        </div>
        <button type="submit" onClick={possoEnviar}>
          CONTINUAR
        </button>
      </form>
    </div>
  );
}
