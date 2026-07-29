import { login } from "./api.js";

const formulario = document.getElementById("form-login");

formulario.addEventListener("submit", realizarLogin);

async function realizarLogin(event) {
  event.preventDefault();

  const usuario = document.getElementById("usuario").value;

  const senha = document.getElementById("senha").value;

  const resposta = await login(usuario, senha);
  if(!resposta.ok){
    alert("Usuário ou senha inválidos.")
    return;
  }

  const dados = await resposta.json();

  localStorage.setItem("token", dados.token);

  window.location.href = "paineladm.html";
}