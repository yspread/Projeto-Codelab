const express = require("express");
const router = express.Router();

const pedidosController = require("../controllers/pedidos.controller");
const authMiddleware = require("../middlewares/auth.middleware");


router.post("/", pedidosController.criar);
router.get("/", authMiddleware, pedidosController.listar);
router.delete("/:id", authMiddleware, pedidosController.deletar);
module.exports = router;