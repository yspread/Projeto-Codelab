import { buscaItem, finalizaPedido, buscaPedidos } from "./api.js";


const resposta = await buscaPedidos();
const pedidos = await resposta.json();
const lista = document.getElementById("lista-pedidos");
if(pedidos.length === 0){
  const p = document.createElement("p");
  p.textContent = "Não há pedidos!";
  lista.append(p);
} else{
  for(const pedido of pedidos){
    const resposta = await buscaItem(pedido.idItem);
    let item = null;

    if (resposta.ok) {
      item = await resposta.json();
    }

    const card = criarCardPedido(item, pedido.quantidade, pedido.mesa, pedido.id);
    lista.append(card);
  }
}

function criarCardPedido(item, quantidade, mesa, id) {
  const card = document.createElement("article");

  card.classList.add("ei_card");

  if(!item){
    card.innerHTML = `
      <div class="ei_card_informacoes">
      <h2>Item removido do cardápio!</h2>
      </div>
    `
    return card
  }

  card.innerHTML = `
    <div class="ei_card_imagem">
      <img src="/uploads/${item.imagem}" alt="${item.nome}">
    </div>

    <div class="ei_card_informacoes">
      <h2 class="item_pedido">${item.nome}</h2>
      <p class="quantidade_pedido"> Quantidade: ${quantidade} </p>
      <p class="mesa_pedido"> Mesa: ${mesa} </p>
    </div>

    <div class="carrinho_controles">
      <button class="carrinho_remover"> Finalizar pedido</button>
    </div>
  `;

  const botaoRemover = card.querySelector(".carrinho_remover");

  botaoRemover.addEventListener("click", async () => {
    const resultado = await Swal.fire({
      title: "Deseja finalizar o pedido!?",
      text: `Deseja finalizar o pedido "${item.nome}" da mesa "${mesa} ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "finalizar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#d33"
    });

    if (!resultado.isConfirmed) return;

    const resposta = await finalizaPedido(id);

    if(resposta.ok){
      card.remove();

      Swal.fire({
        title: "Finalizado!",
        text: "O pedido foi finalizado com sucesso.",
        icon: "success",
        confirmButtonText: "Ok"
      });
    } else{
      Swal.fire({
        title:"Erro!",
        text: "Não foi possível finalizar o pedido.",
        icon: "error",
        confirmButtonText: "Ok"
      });
    }
    window.location.reload();
  });
  return card;
}
