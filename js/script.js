document.addEventListener('DOMContentLoaded', function () {

    // Inicializar AOS (animaciones)
    AOS.init();

    // Manejo del menú
    const menuButton = document.getElementById('menuButton');
    const bar = document.getElementById('bar');
    const overlay = document.getElementById('overlay');
    let menuVisible = false;

    menuButton.addEventListener('click', function () {
        if (!menuVisible) {
            bar.style.width = '200px';
            menuButton.style.transform = 'translateX(200px)';
            overlay.style.opacity = '1';
            overlay.style.visibility = 'visible';
            document.body.style.overflow = 'hidden';
            menuVisible = true;
        } else {
            bar.style.width = '0';
            menuButton.style.transform = 'translateX(0)';
            overlay.style.opacity = '0';
            overlay.style.visibility = 'hidden';
            document.body.style.overflow = 'auto';
            menuVisible = false;
        }
    });

    // Función de vibración en el botón de menú
    function vibrateButton() {
        if (!menuVisible) {
            menuButton.classList.add('vibrate');
            setTimeout(() => menuButton.classList.remove('vibrate'), 300);
        }
    }
    setInterval(vibrateButton, 2000);

    // **Formulario y Modal**

    // Función de envío del formulario y mostrar el modal
    function enviarCorreo() {
        // Obtener los valores de los campos
        const nombre = document.getElementById('nombreInput').value;
        const correo = document.getElementById('correoInput').value;
        const asunto = document.getElementById('asuntoInput').value;

        // Validar si todos los campos están completos
        if (nombre === '' || correo === '' || asunto === '') {
            alert('Por favor, completa todos los campos antes de contactarnos.');
            return; // No continuar si los campos están vacíos
        }

        // Mostrar los datos en el modal
        document.getElementById('nom').textContent = nombre;
        document.getElementById('c').textContent = correo;
        document.getElementById('a').textContent = asunto;

        // Mostrar el modal
        const modal = document.getElementById('modal');
        modal.style.display = 'flex';

        // Limpiar el formulario
        document.getElementById('contactForm').reset();
    }

    // Función para cerrar el modal
    function cerrarVentana() {
        const modal = document.getElementById('modal');
        modal.style.display = 'none';
    }

    // Asignamos el evento al botón de "Enviar mensaje"
    document.querySelector("button[type='button']").addEventListener("click", enviarCorreo);

    // Asignamos el evento para cerrar el modal
    const closeModalButton = document.getElementById("closeModalButton");
    if (closeModalButton) {
        closeModalButton.addEventListener("click", cerrarVentana);
    }

});
const thumbnails = document.querySelectorAll('.carousel-thumbnails img');
    const carouselItems = document.querySelectorAll('#productCarousel .carousel-item');

    // Función para cambiar la imagen activa y opacidad de las miniaturas
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function () {
            // Cambiar imagen del carrusel al hacer clic en la miniatura
            const carousel = document.getElementById('productCarousel');
            const carouselInstance = new bootstrap.Carousel(carousel);
            carouselInstance.to(index); // Cambiar la imagen activa en el carrusel

            // Actualizar la opacidad de las miniaturas
            thumbnails.forEach((thumb, i) => {
                if (i === index) {
                    thumb.classList.add('active-thumbnail');
                } else {
                    thumb.classList.remove('active-thumbnail');
                }
            });
        });
    });


    document.addEventListener('DOMContentLoaded', function () {
        // Fecha final para la cuenta regresiva (puedes cambiarla por la fecha que desees)
        const countdownDate = new Date("2024-12-31T23:59:59").getTime();
    
        // Actualización de la cuenta regresiva
        const countdownFunction = setInterval(function() {
            // Obtén la fecha y hora actual
            const now = new Date().getTime();
    
            // Calcula la diferencia entre la fecha final y la fecha actual
            const distance = countdownDate - now;
    
            // Calcula los días, horas, minutos y segundos restantes
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
            // Muestra el resultado en los elementos correspondientes
            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;
    
            // Si la cuenta regresiva ha terminado
            if (distance < 0) {
                clearInterval(countdownFunction);
                document.querySelector(".p-countdown").innerHTML = "¡La cuenta regresiva ha terminado!";
            }
        }, 1000); // Actualiza cada segundo
    });