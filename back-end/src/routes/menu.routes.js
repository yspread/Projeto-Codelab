/*
* Rotas do Cardápio
*
* Endpoints disponíveis:
*
* GET /
*   - Retorna todos os itens cadastrados no cardápio
*
* POST /
*   - Cria um novo item no cardápio
*
* GET /:id
*   - Retorna um item específico através do seu ID
*
*/

const express = require("express");
const router = express.Router();

const menuController = require("../controllers/menu.controller");

router.get("/", menuController.listarCardapio);
router.get("/:id", menuController.buscarPorId);

router.post("/", menuController.criar);
module.exports = router;