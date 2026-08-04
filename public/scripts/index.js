import { carregarfiltrado } from "./listarItens.js";

const Destaques = document.getElementById("lista-destaques");
console.log(Destaques);
carregarfiltrado(Destaques, false, "destaques");

const Carpaccios = document.getElementById("lista-carpaccios");
console.log(Carpaccios);
carregarfiltrado(Carpaccios, false, "carpaccios");

const Sushis = document.getElementById("lista-sushis");
console.log(Sushis);
carregarfiltrado(Sushis, false, "sushis");

const Sashimis = document.getElementById("lista-sashimis");
console.log(Sashimis);
carregarfiltrado(Sashimis, false, "sashimis");

const Temakis = document.getElementById("lista-temakis");
console.log(Temakis);
carregarfiltrado(Temakis, false, "temakis");

const Fritos = document.getElementById("lista-fritos");
console.log(Fritos);
carregarfiltrado(Fritos, false, "fritos");

const Sobremesas = document.getElementById("lista-sobremesas");
console.log(Sobremesas);
carregarfiltrado(Sobremesas, false, "sobremesas");

const Bebidas = document.getElementById("lista-bebidas");
console.log(Bebidas);
carregarfiltrado(Bebidas, false, "bebidas");