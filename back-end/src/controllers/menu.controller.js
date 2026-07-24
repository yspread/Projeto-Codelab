/*
* Controller do Cardápio
* 
* Responsável por:
*   - Receber as requisições HTTP vindas das rotas
*   - Extrair os dados enviador (body, params)
*   - Chamar os serviços resposáveis pela lógica da aplicação
*   - Retorna respostas HTTP ao cliente
* 
*/

const menuService = require("../services/menu.service");

async function listarCardapio (req, res){
  const menu = await menuService.lerMenu();
  res.json(menu);
};

async function buscarPorId (req, res){
  const id = Number(req.params.id);
  if(Number.isNaN(id)){
    return res.status(404).json({
      erro: "ID inválido!"
    })
  }
  const item = await menuService.buscarPorId(id);
  if(!item){
    res.status(404).json({
      erro: "Item não encontrado"
    });
  }

  return res.json(item);
}

async function criar(req, res) {
  const novoItem = req.body;

  const itemCriado = await menuService.criarItem(novoItem);

  return res.status(201).json(itemCriado);
}

module.exports = {
  listarCardapio,
  buscarPorId,
  criar
};