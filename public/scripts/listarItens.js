//Função para carregar itens

import { buscaMenu } from "./api.js"
import { criarCard } from "./card.js";
export async function carregarItens(lista, admin) {
  const resposta = await buscaMenu();
  
  const itens = await resposta.json();
  lista.innerHTML = "";

  for(const item of itens){
    const card = criarCard(item, admin);

    lista.appendChild(card);
  }
}

export async function carregarfiltrado(lista, admin, categoria) {
  const resposta = await buscaMenu();
  const menu = await resposta.json();
  const itens = await menu.filter(item => item.categoria === categoria);
  
  lista.innerHTML = "";

  for(const item of itens){
    const card = criarCard(item, admin);

    lista.appendChild(card);
  }
}