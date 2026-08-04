import { buscaItem, enviaPedido } from "./api.js";

export function obterCarrinho() {
  const carrinho = localStorage.getItem("carrinho");

  if (!carrinho) {
    return [];
  }

  return JSON.parse(carrinho);
}

function salvarCarrinho(carrinho) {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

export function adicionarItem(item) {
  const carrinho = obterCarrinho();

  const itemExistente = carrinho.find(
    itemCarrinho => itemCarrinho.idItem === item.id
  );

  if (itemExistente) {
    itemExistente.quantidade++;
  } else {
    carrinho.push({
      idItem: item.id,
      quantidade: 1
    });
  }

  salvarCarrinho(carrinho);
}

export function removerItem(id) {
  const carrinho = obterCarrinho();

  const novoCarrinho = carrinho.filter(
    item => item.idItem !== id
  );

  salvarCarrinho(novoCarrinho);
}

export function aumentarQuantidade(id) {
  const carrinho = obterCarrinho();

  const item = carrinho.find(
    item => item.idItem === id
  );

  if (item) {
    item.quantidade++;
    salvarCarrinho(carrinho);
  }
}

export function diminuirQuantidade(id) {
  const carrinho = obterCarrinho();

  const item = carrinho.find(
    item => item.idItem === id
  );

  if (!item) {
    return;
  }

  item.quantidade--;

  if (item.quantidade <= 0) {
    removerItem(id);
    return;
  }

  salvarCarrinho(carrinho);
}

export async function finalizarCarrinho(mesa) {
  const carrinho = obterCarrinho();

  if (carrinho.length === 0) {
    alert("O carrinho está vazio!");
    return;
  }

  for (const item of carrinho) {
    const pedido = {
      idItem: item.idItem,
      quantidade: item.quantidade,
      mesa: mesa
    };

    const resposta = await enviaPedido(pedido);

    if (!resposta.ok) {
      alert("Erro ao enviar o pedido.");
      return;
    }
  }

  localStorage.removeItem("carrinho");
  alert("Pedido realizado com sucesso!");
}