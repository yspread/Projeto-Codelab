import {
    obterCarrinho,
    aumentarQuantidade,
    diminuirQuantidade,
    removerItem,
    finalizarCarrinho
} from "./carrinho.js";

import { buscaItem } from "./api.js";


const carrinho = obterCarrinho();
const lista = document.getElementById("lista-carrinho");
let total = 0;
if(carrinho.length === 0){
  const p = document.createElement("p");
  p.textContent = "O carrinho está vazio!";
  lista.append(p);
} else{
  for(const itemCarrinho of carrinho){
    const resposta = await buscaItem(itemCarrinho.idItem);
    const item = await resposta.json();
    const card = criarCardCarrinho(item, itemCarrinho.quantidade);
    lista.append(card);
    total += itemCarrinho.quantidade * item.preco
  }
  document.getElementById("total").textContent = `R$ ${total.toFixed(2)}`;

  const botaoEnviar = document.getElementById("enviar");
  botaoEnviar.addEventListener("click", async ()  =>{
    finalizarCarrinho();
    window.location.reload();
  })
} 

function criarCardCarrinho(item, quantidade) {
  const card = document.createElement("article");

  card.classList.add("ei_card");

  card.innerHTML = `
    <div class="ei_card_imagem">
      <img src="/uploads/${item.imagem}" alt="${item.nome}">
    </div>

    <div class="ei_card_informacoes">
      <h2>${item.nome}</h2>
      <p class="ei_preco">R$ ${Number(item.preco).toFixed(2)}</p>
    </div>

    <div class="carrinho_controles">
      <p>Quantidade</p>

      <div class="carrinho_quantidade">
        <button class="menos">−</button>
        <span>${quantidade}</span>
        <button class="mais">+</button>
      </div>

      <button class="carrinho_remover">Remover</button>
    </div>

    <div class="carrinho_subtotal">
      <p>Subtotal</p>
      <strong>R$ ${(item.preco * quantidade).toFixed(2)}</strong>
    </div>
  `;
  const botaoMais = card.querySelector(".mais");
  const botaoMenos = card.querySelector(".menos");
  const botaoRemover = card.querySelector(".carrinho_remover");

  botaoMais.addEventListener("click", () => {
    aumentarQuantidade(item.id);
    window.location.reload();
  })

  botaoMenos.addEventListener("click", () => {
    diminuirQuantidade(item.id);
    window.location.reload();
  });

  botaoRemover.addEventListener("click", () => {
    removerItem(item.id);
    window.location.reload();
  })
  return card;
}