// Upload de foto
const photoInput = document.getElementById('upload-photo');
const charPhoto = document.getElementById('char-photo');

photoInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        charPhoto.src = e.target.result;
    };
    reader.readAsDataURL(file);
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

