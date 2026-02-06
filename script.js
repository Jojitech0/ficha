const pvFill = document.getElementById('pv-fill');
const sanFill = document.getElementById('san-fill');
const pvNum = document.getElementById('pv-num');
const pvMax = document.getElementById('pv-max');
const sanNum = document.getElementById('san-num');
const sanMax = document.getElementById('san-max');

function updateBars() {
  pvFill.style.width = Math.min(100, (pvNum.value / pvMax.value) * 100) + '%';
  sanFill.style.width = Math.min(100, (sanNum.value / sanMax.value) * 100) + '%';
}

// Atualiza ao digitar
[pvNum, pvMax, sanNum, sanMax].forEach(el => {
  el.addEventListener('input', updateBars);
});

// Inicializa
updateBars();
