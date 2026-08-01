const fs = require("fs/promises");


async function lerPedidos() {
  const dados = await fs.readFile("./src/database/pedidos.json", "utf-8");
  return JSON.parse(dados);
}

async function salvarPedidos(pedidos) {
  await fs.writeFile("./src/database/pedidos.json", JSON.stringify(pedidos, null, 2));
}

async function buscarPorId(id) {
  const listaPedidos = await lerPedidos();

  const item = listaPedidos.find(pedido => pedido.id === id);

  return item;
}

async function criarPedido(pedido) {
  const listaPedidos = await lerPedidos();
  const novoId = Math.max(-1, ...listaPedidos.map(item => item.id)) + 1;
  const novoPedido = {
    id: novoId,
    ...pedido
  };

  listaPedidos.push(novoPedido);

  await salvarPedidos(listaPedidos);

  return novoPedido;
}

async function deletarPedido(id) {
  const listaPedidos = await lerPedidos();
  const pedido = await buscarPorId(id);

  if(!pedido){
    return false;
  }

  const novaLista = listaPedidos.filter(item => item.id !== id);
  await salvarPedidos(novaLista);

  return true
}
module.exports = {
  criarPedido,
  deletarPedido,
  lerPedidos
};