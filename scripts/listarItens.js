import { buscaMenu } from "./api.js"

function criarCard(item, admin){
  const card = document.createElement("article");

  card.classList.add("ei_card");

  card.innerHTML = `
    <div class="ei_card_imagem">
      <img src="${item.imagem}" alt="${item.nome}">
    </div>

    <div class="ei_card_informacoes">
      <h2>${item.nome}</h2>

      <p class="ei_descricao">${item.descricao}</p>
      
      <p class="ei_categoria">Categoria: ${item.categoria}</p>

      <p class="ei_preco">R$ ${Number(item.preco).toFixed(2)}</p>
    </div>
  `

  if(admin === true){
    const acoes = document.createElement("div");
    acoes.classList.add("ei_card_acoes");

    const editar = document.createElement("a");
    editar.classList.add("ei_editar");
    editar.textContent = "Editar"

    const excluir = document.createElement("button");
    excluir.classList.add("ei_remover");
    excluir.textContent = "Remover";
    editar.href = "editar-item.html"

    acoes.appendChild(editar);
    acoes.appendChild(excluir);

    card.appendChild(acoes);
  }

  return card;
}

export async function carregarItens(lista, admin) {
  const resposta = await buscaMenu();
  
  const itens = await resposta.json();
  lista.innerHTML = "";

  for(const item of itens){
    const card = criarCard(item, admin);

    lista.appendChild(card);
  }
}