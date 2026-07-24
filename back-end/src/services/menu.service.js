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
  const dados = await fs.readFile("./src/database/menu.json", "utf-8");
  return JSON.parse(dados);
}

async function salvarMenu(menu){
  await fs.writeFile("./src/database/menu.json", JSON.stringify(menu, null, 2))
}

async function buscarPorId(id) {
  const menu = await lerMenu();

  const item = menu.find(produto => produto.id === id);
  
  return item;
}

async function criarItem(item) {
  const menu = await lerMenu();
  const novoId = Math.max(...menu.map(item => item.id)) + 1;

  const novoItem = {
    id: novoId,
    ...item
  };

  menu.push(novoItem);

  await salvarMenu(menu);

  return novoItem;
}
module.exports = {
  lerMenu,
  buscarPorId,
  criarItem
};