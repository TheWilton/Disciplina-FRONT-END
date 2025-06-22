 //alert("Hello world!");
 //console.log("Olá, mundo.");

 var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");

  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  var pesoEhValido = true;
  var alturaEhValida = true;
  if (peso <= 0 || peso > 650) {
    console.log("Peso inválido.");
    pesoEhValido = false;
  }

  if (altura <= 0 || altura >= 3) {
    console.log("Altura inválida.");
    alturaEhValida = false;
  }

  var tdImc = paciente.querySelector(".info-imc");
  if (pesoEhValido && alturaEhValida) {
    // var imc = peso / (altura * altura);
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;

  } else {
    tdImc.textContent = "Altura e/ou peso inválidos.";
  }
}

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();
  var form = document.querySelector("#form-adiciona");

  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  var pacienteTr = document.createElement("tr");

  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");

  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;
//   imcTd.textContent = (peso / (altura * altura)).toFixed(2);
  imcTd.textContent = calculaImc(peso, altura);

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

  form.reset();
});