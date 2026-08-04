const jwt = require("jsonwebtoken");
const { SECRET } = require("../services/auth.service");

function authMiddleware(req, res, next) {
  const authorization = req.headers.authorization; // Recebe o token do Header da request

  if(!authorization){
    return res.status(401).json({
      mensagem: "Token não informado."
    });
  }

  const token = authorization.replace("Bearer ", "");

  try {
    const payload = jwt.verify(token, SECRET);

    req.usuario = payload;

    next();
  } catch{
    return res.status(401).json({
      mensagem: "Token inválido!"
    });
  }
}

module.exports = authMiddleware;