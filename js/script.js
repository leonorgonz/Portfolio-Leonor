// ===== JS Masonry Grid =====
function resizeMasonryGrid() {
  const grid = document.querySelector('.galeria');
  if (!grid) return;

  const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  const gap = parseInt(window.getComputedStyle(grid).getPropertyValue('gap'));

  const computedStyle = window.getComputedStyle(grid);
  const gridTemplateColumns = computedStyle.getPropertyValue('grid-template-columns');
  const numColumns = gridTemplateColumns.split(' ').length;

  grid.querySelectorAll('.foto').forEach(item => {
    const img = item.querySelector('img');
    const fecha = item.querySelector('.fecha');
    const titulo = item.querySelector('.titulo');

    // Márgenes aleatorios más pequeños para rango intermedio
    let marginTop = 0;
    let marginBottom = 0;
    if (numColumns > 1 && numColumns <= 5) {
      marginTop = 15 + Math.floor(Math.random() * 25);   // 15 a 40px
      marginBottom = 15 + Math.floor(Math.random() * 25); // 15 a 40px
    }

    item.style.marginTop = `${marginTop}px`;
    item.style.marginBottom = `${marginBottom}px`;

    const contentHeight =
      img.getBoundingClientRect().height +
      (fecha ? fecha.getBoundingClientRect().height : 0) +
      (titulo ? titulo.getBoundingClientRect().height : 0) +
      marginTop +
      marginBottom +
      5; // pequeño margen adicional

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

// Llamadas en carga y resize
window.addEventListener('load', () => {
  resizeMasonryGrid();
  revealFotos();
});

window.addEventListener('resize', resizeMasonryGrid);
