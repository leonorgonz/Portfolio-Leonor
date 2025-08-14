function resizeMasonryGrid() {
  const grid = document.querySelector('.galeria');
  const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  const gap = parseInt(window.getComputedStyle(grid).getPropertyValue('gap'));

  grid.querySelectorAll('.foto').forEach(item => {
    const contentHeight =
      item.querySelector('img').getBoundingClientRect().height +
      item.querySelector('.fecha').getBoundingClientRect().height +
      item.querySelector('.titulo').getBoundingClientRect().height;

    const rowSpan = Math.ceil((contentHeight + gap) / (rowHeight + gap));
    item.style.gridRowEnd = `span ${rowSpan}`;
  });
}

// Animación de aparición suave
function revealFotos() {
  const fotos = document.querySelectorAll('.foto');
  fotos.forEach((foto, index) => {
    setTimeout(() => {
      foto.classList.add('visible');
    }, index * 150);
  });
}

// Llamar al cargar y al redimensionar
window.addEventListener('load', () => {
  resizeMasonryGrid();
  revealFotos();
});
window.addEventListener('resize', resizeMasonryGrid);
