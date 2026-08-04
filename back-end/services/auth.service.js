const jwt = require("jsonwebtoken");

const ADM_USER = "admin";
const ADM_SENHA = "123456";

const SECRET = "projeto-codelab"; //SENHA DO JWT

function autenticar(user, senha) {
  if(user !== ADM_USER || senha != ADM_SENHA){
    return false;
  }

  const token = jwt.sign(
    {
    usuario: ADM_USER
    },
    SECRET,
    {
      expiresIn:"2h"
    }
  );
  return token;
}

module.exports = {
  autenticar,
  SECRET
};