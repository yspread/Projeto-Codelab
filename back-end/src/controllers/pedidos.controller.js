const pedidosServices = require("../services/pedidos.service");

async function criar(req, res) {
  const pedido = req.body;

  const pedidoCriado = await pedidosServices.criarPedido(pedido);

  return res.status(201).json(pedidoCriado);
}

async function deletar(req, res) {
  const id = Number(req.params.id);

  if(await pedidosServices.deletarPedido(id)){
    return res.status(204).send();
  } else{
    return res.status(404).json({
      erro: "Pedido não encontrado."
    })
  }
}

async function listar(req, res) {
  const listaPedidos = await pedidosServices.lerPedidos();
  return res.json(listaPedidos);
}

module.exports = {
  criar,
  deletar,
  listar
}