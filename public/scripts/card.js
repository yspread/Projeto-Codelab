//Gera Card para exibição de itens no cardápio, caso a flag admin seja true, exibe os botões de ação
import { excluirItem } from "./api.js";
import { adicionarItem } from "./carrinho.js";

export function criarCard(item, admin){
  const card = document.createElement("article");

  card.classList.add("ei_card");

  card.innerHTML = `
    <div class="ei_card_imagem">
      <img src="/uploads/${item.imagem}" alt="${item.nome}">
    </div>

    <div class="ei_card_informacoes">
      <h2>${item.nome}</h2>

      <p class="ei_descricao">${item.descricao}</p>
      
      <p class="ei_categoria">Categoria: ${item.categoria}</p>

      <p class="ei_preco">R$ ${Number(item.preco).toFixed(2)}</p>
    </div>
  `
  const acoes = document.createElement("div");
  acoes.classList.add("ei_card_acoes");

  if(admin === true){
    const editar = document.createElement("a");
    editar.classList.add("ei_editar");
    editar.textContent = "Editar";
    editar.href = `editar-item.html?id=${item.id}`;

    const excluir = document.createElement("button");
    excluir.classList.add("ei_remover");
    excluir.textContent = "Remover";

    excluir.addEventListener("click", async () => {
      const resposta = await excluirItem(item.id);

      if (resposta.ok) {
          card.remove(); 
      } else {
          alert("Erro ao excluir o item.");
      }
    });

    acoes.appendChild(editar);
    acoes.appendChild(excluir);
  } else{
    const carrinho = document.createElement("button");
    carrinho.classList.add("ei_carrinho");
    carrinho.textContent = "Adicionar ao pedido"

    carrinho.addEventListener("click", async () => await adicionarItem(item));
    
    acoes.appendChild(carrinho);
  }
  
  card.appendChild(acoes);
  return card;
}
