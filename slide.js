//slide para transicion de las fotos del menu principal
let contador = 0;
const slides = document.querySelectorAll('.slide');
function fotoSiguiente() {
    slides[contador].classList.remove('active');
    contador = (contador + 1) % slides.length;
    slides[contador].classList.add('active');
}
setInterval(fotoSiguiente, 5000); 
