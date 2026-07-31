const API_URL = "http://localhost:3000";

export async function criarItem(item) {
  const token = localStorage.getItem("token");
  
  const resposta = await fetch(`${API_URL}/menu`,{
    method: "POST",

    headers:{
      "Content-Type":"application/json",
      "Authorization": `Bearer ${token}`
    },
    
    body: JSON.stringify(item)
  });
  return resposta;
}

export async function login(usuario, senha) {
  return fetch(`${API_URL}/auth/login`, {
    method: "POST",

    headers:{
      "Content-Type":"application/json"
    },
  
    body: JSON.stringify({
      usuario,
      senha
    })
  });
}

export async function verificarToken(token) {
  return fetch(`${API_URL}/auth/verificar`,{
    headers:{
      "Content-Type":"application/json",
      "Authorization": `Bearer ${token}`
    },
  });
}

export async function buscaMenu() {
  return fetch(`${API_URL}/menu`);
}