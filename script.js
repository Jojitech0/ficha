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
// PV e Sanidade - ajuste da barra
const pvInput = document.getElementById('max-pv');
const pvBar = document.getElementById('pv-bar');
pvInput.addEventListener('input', () => {
    const val = pvInput.value;
    pvBar.style.width = Math.min(val, 100) + "%";
});

const sanInput = document.getElementById('max-san');
const sanBar = document.getElementById('san-bar');
sanInput.addEventListener('input', () => {
    const val = sanInput.value;
    sanBar.style.width = Math.min(val, 100) + "%";
});

