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
  return res.json(menu);
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
    return res.status(404).json({
      erro: "Item não encontrado."
    });
  }

  return res.json(item);
}

async function criar(req, res) {
  const imagem = req.files.imagem;

  const nomeImagem = Date.now() + "-" + imagem.name;

  await imagem.mv(`./src/uploads/${nomeImagem}`);

  const novoItem = {
    ...req.body,
    imagem: nomeImagem
  };

  const itemCriado = await menuService.criarItem(novoItem);

  return res.status(201).json(itemCriado);
}

async function deletar(req, res) {
  const id = Number(req.params.id);

  if(await menuService.deletarItem(id)){
    return res.status(204).send();
  } else{
    return res.status(404).json({
      erro: "Item não encontrado."
    })
  }
}

async function editar(req, res) {
  const id = Number(req.params.id);
  const novosDados = req.body;
  
  const itemEditado = await menuService.editarItem(id, novosDados);

  if(!itemEditado){
    return res.status(404).json({
      erro: "Item não encontrado."
    });
  }

  return res.status(200).json(itemEditado);
}

module.exports = {
  listarCardapio,
  buscarPorId,
  criar,
  deletar,
  editar
};