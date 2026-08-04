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

  const itemExistente = carrinho.find(itemCarrinho => itemCarrinho.id === item.id);

  if(itemExistente) {
    itemExistente.quantidade++;
  } else{
    carrinho.push({
      ...item,
      quantidade: 1
    });
  }

  salvarCarrinho(carrinho);
}

export function removerItem(id){
  const carrinho = obterCarrinho();

  const novoCarrinho = carrinho.filter(item => item.id !== id);
  salvarCarrinho(novoCarrinho);
}

export function aumentarQuantidade(id){
  const carrinho = obterCarrinho();

  const item = carrinho.find(item => item.id === id);
  if(item){
    item.quantidade++;
  }

  salvarCarrinho(carrinho);
}

export function diminuirQuantidade(id){
  const carrinho = obterCarrinho();

  const item = carrinho.find(item => item.id === id);

  if(item){
    item.quantidade--;
  }

  if(item.quantidade <= 0){
    removerItem(id);
  }

  salvarCarrinho(carrinho);
}