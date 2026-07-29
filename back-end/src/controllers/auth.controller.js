const authService = require("../services/auth.service")

async function login(req, res) {
  const {usuario, senha} = req.body;

  const token = authService.autenticar(usuario, senha);

  if(!token){
    return res.status(401).json({
      mensagem:"Usuário ou senha inválidos."
    });
  }

  return res.json({
    token
  });
}

module.exports = {
  login
};