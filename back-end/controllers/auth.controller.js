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

function verificar(req, res) {
    return res.status(200).json({
        mensagem: "Token válido."
    });
}

module.exports = {
  login,
  verificar
};