import { buscaItem, editarItem } from "./api.js";

const parametros = new URLSearchParams(window.location.search);
const id = parametros.get("id");
carregarItem();

const formulario = document.getElementById("form-editar-item");
formulario.addEventListener("submit", editItem);

async function carregarItem() {
  const resposta = await buscaItem(id);

  if(!resposta.ok){
    await Swal.fire({
      title: "Item não encontrado!",
      text: "O item solicitado não existe ou foi removido.",
      icon: "error",
      confirmButtonText: "Voltar"
    });
    window.location.replace("gerenciaritem.html");
    return;
  }

  const item = await resposta.json();
  document.getElementById("nome").value = item.nome;
  document.getElementById("descricao").value = item.descricao;
  document.getElementById("preco").value = item.preco;
  document.getElementById("categoria").value = item.categoria;
  document.getElementById("img-atual").src = `/uploads/${item.imagem}`
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
    await Swal.fire({
      title: "Sucesso!",
      text: "Item editado com sucesso.",
      icon: "success",
      confirmButtonText: "Ok"
    });
  } else{
      await Swal.fire({
        title: "Erro!",
        text: "Não foi possível editar o item.",
        icon: "error",
        confirmButtonText: "Ok"
    });
  }
  
  window.location.replace("gerenciaritem.html");
}