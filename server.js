/* Servidor da API do Cardápio 
*
*   routes: define os endpoints e direciona as requisições
*   controllers: Recebe as requisições HTTP e retorna as respostas
*   services: Realiza as operações da aplicação
*   database: Armazena os dados em um JSON local
*/
const cors = require("cors")
const path = require("path");
const express = require("express");
const fileupload = require("express-fileupload");
const menuRoutes = require("./back-end/routes/menu.routes");
const authRoutes = require("./back-end/routes/auth.routes");
const pedidosRoutes = require("./back-end/routes/pedidos.routes")

const app = express();

// Middlewares
app.use(cors()); //Limitar o acesso para o front(futuro)
app.use(express.json());
app.use(fileupload());
app.use("/uploads", express.static("./back-end/uploads"));
app.use("/", express.static("./public"));

//Rotas
app.use("/menu", menuRoutes);
app.use("/auth", authRoutes);
app.use("/pedidos", pedidosRoutes)

app.listen(3000, () => {
  console.log("server rodando port 3000");
})
