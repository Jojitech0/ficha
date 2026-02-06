// ===== PV e Sanidade =====
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

[pvNum, pvMax, sanNum, sanMax].forEach(el => el.addEventListener('input', updateBars));
updateBars();

// ===== Atributos =====
const attrInputs = document.querySelectorAll('.attr-num');

attrInputs.forEach(input => {
  const fill = input.parentElement.querySelector('.attr-fill');
  input.addEventListener('input', () => {
    let val = parseInt(input.value);
    if(val < 1) input.value = 1;
    if(val > 20) input.value = 20;
    fill.style.width = (input.value / 20 * 100) + '%';
  });
  fill.style.width = (input.value / 20 * 100) + '%';
});

// ===== Perícias =====
const skillSelects = document.querySelectorAll('.skill-select');
skillSelects.forEach(select => {
  select.addEventListener('change', () => {
    console.log(`${select.previousElementSibling.textContent}: ${select.value}`);
  });
});
