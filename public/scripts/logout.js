const botaoLogout = document.getElementById("logout");
botaoLogout.addEventListener("click", logout)

function logout(){
  localStorage.removeItem("token");
  window.location.replace("login.html");
}