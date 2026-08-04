/*
* Service do Cardápio
* 
* Responsável por:
*   -Implementar as regras do negócio do cardápio
*   -Realizar operações de leitura e escrita no BD
*   -Manipular e processar os dados dos itens do cardápio
* 
*/

const fs = require("fs/promises");

async function lerMenu() {
  const dados = await fs.readFile("./back-end/database/menu.json", "utf-8");
  return JSON.parse(dados);
}

async function salvarMenu(menu){
  await fs.writeFile("./back-end/database/menu.json", JSON.stringify(menu, null, 2))
}

async function buscarPorId(id) {
  const menu = await lerMenu();

  const item = menu.find(produto => produto.id === id);
  
  return item;
}

async function criarItem(item) {
  const menu = await lerMenu();
  const novoId = Math.max(-1, ...menu.map(item => item.id)) + 1; // Caso o menu esteja vazio -1 + 1 = 0(primeiro ID)
  const novoItem = {
    id: novoId,
    ...item
  };

  menu.push(novoItem);

  await salvarMenu(menu);

  return novoItem;
}

async function deletarItem(id){
  const menu = await lerMenu();
  const item = await buscarPorId(id);  
  if(!item){
    return false;
  }

  await fs.unlink(`./back-end/uploads/${item.imagem}`);
  const novoMenu = menu.filter(item => item.id !== id);
  await salvarMenu(novoMenu);

  return true;
}

async function editarItem(id, novosDados){
  const menu = await lerMenu();
  const indice = menu.findIndex(item => item.id === id)

  if(indice === -1) {
    return 0; // item nao encontrado
  }

  const novoItem = {
    ...menu[indice],
    ...novosDados //Substitui somente os dados a serem modificados.
  }

  menu[indice] = novoItem;

  await salvarMenu(menu);
  return novoItem;
}
module.exports = {
  lerMenu,
  buscarPorId,
  criarItem,
  deletarItem,
  editarItem
};