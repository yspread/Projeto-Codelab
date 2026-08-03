import { editarItem } from "./api.js";

const formulario = document.getElementById("form-editar-item");

formulario.addEventListener("submit", editItem);

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

  formData.append(
    "imagem",
    imagem
  );

  console.log(imagem);
}