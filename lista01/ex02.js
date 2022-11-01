function saudacao() {
  var nome = document.getElementById("nome").value;
  var sobrenome = document.getElementById("sobrenome").value;
  alert("Olá, " + nome + " " + sobrenome + "! Javascript é legal ;)");
}

addEventListener("load", function () {
  document.getElementById("sauda").addEventListener("click", saudacao);
});
