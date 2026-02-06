// FOTO DO PERSONAGEM
const photoInput = document.getElementById('photoInput');
const photo = document.getElementById('photo');

photoInput.addEventListener('change', function() {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      photo.src = e.target.result;
    }
    reader.readAsDataURL(file);
  }
});

// BARRAS DE PV E SANIDADE
const pvNum = document.getElementById('pvNum');
const sanNum = document.getElementById('sanNum');
const pvBar = document.getElementById('pvBar');
const sanBar = document.getElementById('sanBar');

function updateBars() {
  pvBar.style.width = Math.min(100, pvNum.value) + '%';
  sanBar.style.width = Math.min(100, sanNum.value) + '%';
}

pvNum.addEventListener('input', updateBars);
sanNum.addEventListener('input', updateBars);

// Inicializa barras
updateBars();
