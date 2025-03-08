// script.js
document.addEventListener('DOMContentLoaded', function() {
    // 1.  Mejora: Usa querySelectorAll y un bucle para manejar múltiples enlaces,
    //     en lugar de seleccionar elementos por ID.  Esto es más flexible y escalable.
    //     Además, usa delegación de eventos para un mejor rendimiento.

    // Ejemplo (usando delegación de eventos):
    const nav = document.querySelector('.nav'); // Selecciona el elemento <nav>

    if (nav) { // Comprueba si el elemento existe (buena práctica)
        nav.addEventListener('click', function(event) {
            if (event.target.classList.contains('nav__link')) {
                event.preventDefault(); // Evita el comportamiento predeterminado del enlace

                const targetId = event.target.getAttribute('href'); // Obtiene el valor del atributo href
                const targetElement = document.querySelector(targetId); // Selecciona el elemento de destino

                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
                }
            }
        });
    }
});