import { buscaItem, editarItem } from "./api.js";

const parametros = new URLSearchParams(window.location.search);
const id = parametros.get("id");
carregarItem();

const formulario = document.getElementById("form-editar-item");
formulario.addEventListener("submit", editItem);

async function carregarItem() {
  console.log("oi");
  const resposta = await buscaItem(id);

  if(!resposta.ok){
    alert("Item não encontrado!");
    window.location.replace("gerenciaritem.html");
  }

  const item = await resposta.json();
  document.getElementById("nome").value = item.nome;
  document.getElementById("descricao").value = item.descricao;
  document.getElementById("preco").value = item.preco;
  document.getElementById("categoria").value = item.categoria;
  document.getElementById("img-atual").src = `../back-end/src/uploads/${item.imagem}`
}

async function editItem(event) {
  event.preventDefault(); // Impede a página de recarregar
  const formData = new FormData();

  formData.append(
   "nome",
    document.getElementById("nome").value
  );

  formData.append(
    "descricao",
    document.getElementById("descricao").value
  );

  formData.append(
    "preco",
    Number(document.getElementById("preco").value)
  );

  formData.append(
    "categoria",
    document.getElementById("categoria").value
  );


  const imagem = document.getElementById("imagem").files[0];
  if(imagem != undefined){
    formData.append(
      "imagem",
      imagem
    );
  }
  
  const resposta = await editarItem(id, formData);

  if(resposta.ok){
    alert("Item editado!");
  } else{
    alert("Erro para editar o item!");
  }
  
  window.location.replace("gerenciaritem.html");
}