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
      const resultado = await Swal.fire({
        title: "Excluir item?",
        text: `Deseja realmente excluir "${item.nome}"?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sim, excluir",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#d33",
        cancelButtonColor: "#6c757d"
      });

      if (!resultado.isConfirmed) {
        return;
      }

      const resposta = await excluirItem(item.id);

      if (resposta.ok) {
        card.remove();

        Swal.fire({
          title: "Excluído!",
          text: "O item foi removido com sucesso.",
          icon: "success",
          confirmButtonText: "Ok"
        });
  } else {
      Swal.fire({
        title: "Erro!",
        text: "Não foi possível excluir o item.",
        icon: "error",
        confirmButtonText: "Ok"
      });
  }
});

    acoes.appendChild(editar);
    acoes.appendChild(excluir);
  } else{
    const carrinho = document.createElement("button");
    carrinho.classList.add("ei_carrinho");
    carrinho.textContent = "Adicionar ao pedido"

    carrinho.addEventListener("click", async () => {
      await adicionarItem(item);

      Swal.fire({
        title: "Adicionado!",
        text: `${item.nome} foi adicionado ao pedido.`,
        icon: "success",
        timer: 1200,
        showConfirmButton: false,
        toast: true,
        position: "top-end"
      });
});
    
    acoes.appendChild(carrinho);
  }
  
  card.appendChild(acoes);
  return card;
}
