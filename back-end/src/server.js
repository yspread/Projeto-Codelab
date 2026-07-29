/* Servidor da API do Cardápio 
*
*   routes: define os endpoints e direciona as requisições
*   controllers: Recebe as requisições HTTP e retorna as respostas
*   services: Realiza as operações da aplicação
*   database: Armazena os dados em um JSON local
*/
const cors = require("cors")
const express = require("express");
const menuRoutes = require("./routes/menu.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();

// Middlewares
app.use(cors()); //Limitar o acesso para o front(futuro)
app.use(express.json());

//Rotas
app.use("/menu", menuRoutes);
app.use("/auth", authRoutes);

app.listen(3000, () => {
  console.log("server rodando port 3000");
})
