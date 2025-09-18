// Animación de entrada
function revealFotos() {
  const fotos = document.querySelectorAll('.foto');
  fotos.forEach((foto, index) => {
    setTimeout(() => {
      foto.classList.add('visible');
    }, index * 150);
  });
}

window.addEventListener('load', () => {
  revealFotos();
});
