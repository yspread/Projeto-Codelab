//Conexão com os endpoints

const API_URL = "http://localhost:3000";

export async function criarItem(item) {
  const token = localStorage.getItem("token");
  
  const resposta = await fetch(`${API_URL}/menu`,{
    method: "POST",

    headers:{
      "Authorization": `Bearer ${token}`
    },
    
    body: item
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

export async function buscaItem(id) {
  return fetch(`${API_URL}/menu/${id}`);
}

export async function excluirItem(id) {
  const token = localStorage.getItem("token");

  const resposta = await fetch(`${API_URL}/menu/${id}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${token}`
    },
  });

  return resposta;
}

export async function editarItem(id, dados) {
  const token = localStorage.getItem("token");

  const resposta = await fetch(`${API_URL}/menu/${id}`,{
    method: "PUT",

    headers:{
      "Authorization": `Bearer ${token}`
    },
    
    body: dados
  });
  return resposta;
}

export async function enviaPedido(item) {
  const resposta = await fetch(`${API_URL}/pedidos`, {
    method: "POST",

    headers:{
      "Content-Type":"application/json",
    },
    
    body: JSON.stringify(item)
  });

  return resposta;
}

export async function buscaPedidos() {
  const token = localStorage.getItem("token");

  return fetch(`${API_URL}/pedidos`,{
    headers:{
      "Content-Type":"application/json",
      "Authorization": `Bearer ${token}`
    },
  });
}

export async function finalizaPedido(id) {
  const token = localStorage.getItem("token");

  const resposta = await fetch(`${API_URL}/pedidos/${id}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${token}`
    },
  });

  return resposta;
}