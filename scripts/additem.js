import { criarItem } from "./api.js";

const formulario = document.getElementById("form-adicionar-item");

formulario.addEventListener("submit", cadastrarItem);

async function cadastrarItem(event) {
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

    formData.append(
      "imagem",
      imagem
    );

  const resposta = await criarItem(formData);

  if(!resposta.ok){
    alert("Erro ao cadastrar item.");
    return;
  }
  alert("Item cadastrado com sucesso!");
  formulario.reset();

}