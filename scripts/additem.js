import { criarItem } from "./api.js";

const formulario = document.getElementById("form-adicionar-item");

formulario.addEventListener("submit", cadastrarItem);

async function cadastrarItem(event) {
  event.preventDefault(); // Impede a página de recarregar
  const item = {
    nome: document.getElementById("nome").value,
    descricao: document.getElementById("descricao").value,
    preco: Number(document.getElementById("preco").value),
    categoria: document.getElementById("categoria").value,
  }

  const resposta = await criarItem(item);

  if(!resposta.ok){
    alert("Erro ao cadastrar item.");
    return;
  }
  alert("Item cadastrado com sucesso!");
  formulario.reset();

}