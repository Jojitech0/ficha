function updateBar(idAtual, idMax, barraId) {
  const atual = Number(document.getElementById(idAtual).value || 0);
  const max = Number(document.getElementById(idMax)?.value || 10);
  const barra = document.getElementById(barraId);
  const pct = Math.min((atual / max) * 100, 100);
  barra.style.width = pct + '%';
}

// Atualização das barras (para atributos que usam barra, se quiser)
updateBar('vigor', 'pvMax', 'barraPV');
updateBar('intelecto', 'sanMax', 'barraSan');
