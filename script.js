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


    // 2.  Formulario de contacto:  Aquí necesitarías código adicional para manejar
    //     el envío del formulario.  Esto podría ser:
    //     *   Una petición AJAX a un script de servidor (PHP, Node.js, etc.).
    //     *   El uso de un servicio de terceros como Formspree o Netlify Forms.
    //     *  Validación del lado del cliente *antes* de enviar los datos.

     const contactForm = document.getElementById('contact-form'); // Obtén el formulario por su ID
     if (contactForm) {
         contactForm.addEventListener('submit', function(event) {
             event.preventDefault(); // Evita el envío predeterminado

             // Aquí iría la lógica para:
             // 1. Validar los datos del formulario (nombre, correo, mensaje).
             // 2. Si la validación es exitosa, enviar los datos (AJAX o servicio de terceros).
             // 3. Mostrar un mensaje de éxito o error al usuario.
              const name = document.getElementById('name').value;
              const email = document.getElementById('email').value;
              const message = document.getElementById('message').value;
              if (!name || !email || !message) {
               alert('Por favor completa todos los campos.'); // Validación básica
                return;
              }
              if (!email.includes('@')) { // Validación de correo electrónico MUY básica
                alert('Por favor ingresa un correo electrónico válido.');
                return;
              }

            //Ejemplo MUY simple de como se vería un fetch (AJAX)
            /*
              fetch('/ruta-a-tu-script-de-servidor', {  //Reemplaza por la URL correcta
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
              })
              .then(response => response.json()) //Si esperas una respuesta JSON
              .then(data => {
                //Manejar la respuesta del servidor.
                console.log(data);
                if (data.success) {
                    alert('Mensaje enviado con éxito!');
                    contactForm.reset();//Limpia el formulario
                } else {
                    alert('Hubo un error al enviar el mensaje.');
                }
              })
              .catch((error) => {
                console.error('Error:', error);
                alert('Hubo un error al enviar el mensaje.');
              });
              */
         });
     }

});