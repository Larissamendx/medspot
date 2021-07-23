import React, { useEffect, useState } from "react";
import DadosUsuario from "../../components/DadosUsuario";
import Link from "next/link";
import styles from "./style.module.css";
import {
  validarCPF,
  validarSenha,
  validarConfirmacaoSenha,
} from "../../models/cadastro";

const validacoes = {
  cpf: validarCPF,
  senha: validarSenha,
  confirmarSenha: validarConfirmacaoSenha,
};

function CreateProfileUser() {
  const [dadosColetados, setDados] = useState({});

  useEffect(() => {
    console.log(dadosColetados);
  });

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados });
  }

  return (
    <div>
      <main className={styles.containerCreateProfileUser}>
        <a href="/Login">
          <img src="icons/back.svg" alt="Voltar" />
        </a>
        <DadosUsuario aoEnviar={coletarDados} validacoes={validacoes} />
      </main>
    </div>
  );
}

export default CreateProfileUser;
