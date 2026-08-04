//Script para o painel Adm

import { carregarItens } from "./listarItens.js";

const lista = document.getElementById("lista-itens");
carregarItens(lista, true);