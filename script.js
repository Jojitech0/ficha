function updateBar(idAtual, idMax, barraId) {
  const atual = Number(document.getElementById(idAtual).value);
  const max = Number(document.getElementById(idMax).value);
  const barra = document.getElementById(barraId);
  const pct = Math.min((atual / max) * 100, 100);
  barra.style.width = pct + '%';
}

function modPV(valor) {
  const pvAtual = document.getElementById('pvAtual');
  pvAtual.value = Math.max(0, Number(pvAtual.value) + valor);
  updateBar('pvAtual', 'pvMax', 'barraPV');
}

function modSan(valor) {
  const sanAtual = document.getElementById('sanAtual');
  sanAtual.value = Math.max(0, Number(sanAtual.value) + valor);
  updateBar('sanAtual', 'sanMax', 'barraSan');
}

// Inicializa as barras
updateBar('pvAtual', 'pvMax', 'barraPV');
updateBar('sanAtual', 'sanMax', 'barraSan');
