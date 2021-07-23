import React from "react";

function validarCPF(cpf) {
  if (cpf.length < 11) {
    return { valido: false, texto: "Deve ter no mínimo 11 digitos" };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarSenha(senha) {
  if (senha.length < 7 || senha.length > 72) {
    return { valido: false, texto: "A senha deve ter entre 7 a 72 digitos" };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarConfirmacaoSenha(confirmarSenha, senha) {
  if (confirmarSenha !== senha) {
    return { valido: false, texto: "As senhas não se coincidem" };
  } else {
    return { valido: true, texto: "" };
  }
}

export { validarCPF, validarSenha, validarConfirmacaoSenha };
