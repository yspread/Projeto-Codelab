//Proteção das paginas administrativas

import { verificarToken } from "./api.js";
console.log("auth carregado");
const token = localStorage.getItem("token");
if (!token) {
    window.location.replace("login.html");
} else{
    const resposta = await verificarToken(token);

    if(!resposta.ok){
        localStorage.removeItem("token");
        window.location.replace("login.html");
    }
}