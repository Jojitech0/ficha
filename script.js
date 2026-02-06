// FOTO
const uploadInput = document.getElementById('uploadFoto');
const imgPersonagem = document.getElementById('fotoPersonagem');

uploadInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      imgPersonagem.src = e.target.result;
    }
    reader.readAsDataURL(file);
  }
});

// BARRAS DE ATRIBUTO
const atributos = ['vigor','intelecto','forca','agilidade','carisma'];
atributos.forEach(attr => {
  const input = document.getElementById(attr);
  input.addEventListener('input', function() {
    const value = parseInt(this.value) || 0;
    const fill = this.nextElementSibling.querySelector('.fill');
    fill.style.width = (value * 10) + '%'; // max 10 pontos = 100%
  });
});
