import { carregarItens } from "./listarItens.js";

const lista = document.getElementById("lista-itens");
console.log(lista);
carregarItens(lista, true);