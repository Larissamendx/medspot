import React, { createContext, ReactNode, useState } from "react";
import { validarSenha, validarEmail } from "../models/login";
import {
  validarSenha as validarNovaSenha,
  validarConfirmacaoSenha as confirmacaoSenha,
} from "../models/cadastro";

type ValidateContextData = {
  validarCampos: (event) => void;
  erros: {
    email: { valido: boolean; texto: string };
    password: { valido: boolean; texto: string };
    confirmarSenha: { valido: boolean; texto: string };
    senha: { valido: boolean; texto: string };
  };
  possoEnviar: () => void;
  valido: boolean;
  validarConfirmacaoSenha: (event, confirmarSenha, senha) => void;
};

type ValidateContextProviderProps = {
  children: ReactNode;
};

export const ValidateContext = createContext({} as ValidateContextData);

export function ValidateContextProvider({
  children,
}: ValidateContextProviderProps) {
  const validacoes = {
    email: validarEmail,
    password: validarSenha,
    confirmarSenha: validarConfirmacaoSenha,
    senha: validarNovaSenha,
  };

  const [valido, setValido] = useState(false);
  const [erros, setErros] = useState({
    email: { valido: true, texto: "" },
    password: { valido: true, texto: "" },
    confirmarSenha: { valido: true, texto: "" },
    senha: { valido: true, texto: "" },
  });

  // let campos = (confirmarSenha, senha) => {
  //   console.log("nada")
  //   if (confirmarSenha != senha) {
  //     return { valido: false, texto: "As senhas não se coincidem" };
  //   } else {
  //     return { valido: true, texto: "" };
  //   }
  // }

  function validarCampos(event) {
    const novoErro = { ...erros };
    const { name, value } = event.target;
    novoErro[name] = validacoes[name](value);
    setErros(novoErro);
  }

  function validarConfirmacaoSenha(event, confirmarSenha, password) {
    const novoErro = { ...erros };
    const { name } = event.target;
    novoErro[name] = confirmacaoSenha(confirmarSenha, password);
    setErros(novoErro);
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
    <ValidateContext.Provider
      value={{
        validarCampos,
        erros,
        possoEnviar,
        valido,
        validarConfirmacaoSenha,
      }}
    >
      {children}
    </ValidateContext.Provider>
  );
}
