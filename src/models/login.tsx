import React from "react";

function validarEmail(email) {
  if (email == "") {
    return { valido: false, texto: "Digite seu e-mail" };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarSenha(password) {
  if (password == "") {
    return { valido: false, texto: "Digite sua senha" };
  } else {
    return { valido: true, texto: "" };
  }
}


export { validarEmail, validarSenha };
