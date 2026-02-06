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
// exemplo de atualização de barra de atributo (você pode expandir)
const fillBars = document.querySelectorAll('.attribute-bar .fill');

fillBars.forEach(bar => {
  // aqui você pode ajustar dinamicamente pelo valor do atributo
  // Ex: 50% = metade, 80% = 80%, etc.
  // Para testes está fixo no HTML inline
});
