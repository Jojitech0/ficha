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
