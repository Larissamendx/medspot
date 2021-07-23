import React, { useContext, useEffect, useState } from "react";
import DadosPessoaisMedico from "../../components/DadosPessoaisMedico";
import DadosMedico from "../../components/DadosMedico";
import styles from "./style.module.css";
import {
  validarCPF,
  validarSenha,
  validarConfirmacaoSenha,
} from "../../models/cadastro";
import Aprovacao from "../../components/PopUpAprovacao";
import EsseDaquiLeo from "../../components/EsseDaquiLeo";


function CreateProfilePro() {
  const [formPro, setFormPro] = useState(0);
  const [dadosColetados, setDados] = useState({});


  useEffect(() => {
    if (formPro == formulario.length) {
      console.log(dadosColetados);
    }
  });

  const validacoes = {
    cpf: validarCPF,
    senha: validarSenha,
    confirmarSenha: validarConfirmacaoSenha,
  };

  const formulario = [
    <DadosMedico aoEnviar={coletarDados}  validacoes={validacoes}/>,
    <EsseDaquiLeo aoEnviar={coletarDados}/>,
    <Aprovacao />
  ];

  function nextForm() {
    setFormPro(formPro + 1);
  }

  function backForm(e) {
    if (formPro == 1) {
      setFormPro(0);
    } else {
      e.nativeEvent.path[1].href = "/LoginPro";
    }
  }

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados });
    nextForm();
  }

  return (
      <div>
        <main className={styles.containerCreateProfilePro}>
          <a href="">
            <img
              src="icons/back.svg"
              alt="Voltar"
              className={styles.back}
              onClick={backForm}
            />
          </a>
          {formulario[formPro]}
        </main>
      </div>
  );
}

export default CreateProfilePro;
