const e = require("cors");

function obterCarrinho(){
  const carrinho = localStorage.getItem("carrinho");

  if(!carrinho){
    return [];
  } else{
    return JSON.parse(carrinho);
  }
}

function salvarCarrinho(carrinho){
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

export function adicionarItem(item){
  const carrinho = obterCarrinho();

  const itemExistente = carrinho.find(item => item.id === item.id);

  if(itemExistente) {
    itemExistente.quantidade += item.quantidade;
  } else{
    carrinho.push({
      ...item
    });
  }

  salvarCarrinho(carrinho);
}

export function aumentarQuantidade(id){
  const carrinho = obterCarrinho();

  const item = carrinho.find(item => item.id === id);
  if(item){
    item.quantidade++;
  }

  salvarCarrinho(carrinho);
}