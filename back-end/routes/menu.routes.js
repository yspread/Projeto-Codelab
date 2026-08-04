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
const authMiddleware = require("../middlewares/auth.middleware");
const menuController = require("../controllers/menu.controller");

router.get("/", menuController.listarCardapio);
router.get("/:id", menuController.buscarPorId);

router.post("/", authMiddleware, menuController.criar);

router.delete("/:id", authMiddleware, menuController.deletar);

router.put("/:id", authMiddleware, menuController.editar);
module.exports = router;