// Seleccionamos todas las imágenes de la galería
const galleryImages = document.querySelectorAll('.responsive img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');

// Abrir modal al click en cualquier imagen
galleryImages.forEach(img => {
  img.addEventListener('click', (e) => {
    modalImg.src = img.src;
    modal.classList.add('show');
    e.stopPropagation(); // evita que se cierre inmediatamente
  });
});

// Cerrar modal al click en cualquier parte de la pantalla
modal.addEventListener('click', () => {
  modal.classList.remove('show');
});
