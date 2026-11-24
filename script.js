const display = document.getElementById("display");

function adicionar(valor) {
  display.value += valor;
}

function limpar() {
  display.value = "";
}

function calcular() {
  try {
    const expressao = display.value.replace(/[^0-9+\-*/.]/g, "");
    if (!expressao) return;
    const resultado = Function('"use strict"; return (' + expressao + ')')();
    display.value = Number.isFinite(resultado) ? resultado : "Erro";
  } catch {
    display.value = "Erro";
  }
}

