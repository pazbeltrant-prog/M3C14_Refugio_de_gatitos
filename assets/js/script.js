document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    /* =========================
       🔤 VALIDACIÓN SOLO LETRAS
    ========================== */
    const soloLetrasInputs = ['nombre', 'ciudad'];

    soloLetrasInputs.forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('input', function () {
                // Elimina números y caracteres especiales en tiempo real
                this.value = this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
            });
        }
    });

    /* =========================
       1. CONFIGURACIÓN DEL CARRUSEL
    ========================== */
    const myCarousel = document.querySelector('#michiSlider');
    if (myCarousel && typeof bootstrap !== "undefined") {
        new bootstrap.Carousel(myCarousel, {
            interval: 3000,
            ride: 'carousel',
            pause: 'hover'
        });
    }

    /* =========================
       2. BOTÓN SCROLL TO TOP Y EFECTO FOOTER
    ========================== */
    const scrollBtn = document.getElementById("scrollToTopBtn");
    const footer = document.querySelector("footer");

    if (scrollBtn && footer) {
        window.addEventListener("scroll", () => {
            const footerTop = footer.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Mostrar/Ocultar botón según el scroll
            if (window.scrollY > 300) {
                scrollBtn.style.display = "block";
            } else {
                scrollBtn.style.display = "none";
            }

            // Evita que el botón tape el footer
            if (footerTop < windowHeight) {
                document.body.classList.add("footer-visible");
            } else {
                document.body.classList.remove("footer-visible");
            }
        });

        // Scroll suave hacia arriba
        scrollBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* =========================
       3. VALIDACIÓN DE FORMULARIOS + TOAST (ARREGLADO)
    ========================== */
    const forms = document.querySelectorAll('.needs-validation');
    const toastEl = document.getElementById('michiToast');

    let michiToast = null;

    // Inicialización segura del Toast (evita bugs si Bootstrap no carga)
    if (toastEl && typeof bootstrap !== "undefined") {
        michiToast = new bootstrap.Toast(toastEl, {
            animation: true,
            autohide: true,
            delay: 4000 // dura 4 segundos
        });
    } else {
        console.warn("Toast o Bootstrap no detectado");
    }

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            event.stopPropagation();

            // Validación Bootstrap
            if (form.checkValidity()) {

                // Mensaje de éxito kawaii
                if (michiToast && toastEl) {
                    const body = toastEl.querySelector('.toast-body');
                    if (body) {
                        body.textContent = "💌 Gracias por elegirme, me contactaré pronto contigo miau 🐾💖";
                    }
                    michiToast.show();
                }

                // Reset bonito del formulario
                form.reset();
                form.classList.remove('was-validated');

            } else {
                form.classList.add('was-validated');
            }
        }, false);
    });

    /* =========================
       🐱 BOTONES "ADOPTARME" DEL CARRUSEL
    ========================== */
    const botonesAdoptar = document.querySelectorAll('.card-michi .custom-btn');

    botonesAdoptar.forEach(boton => {
        boton.addEventListener('click', function () {

            // Toast inmediato al elegir un michi
            if (michiToast && toastEl) {
                const body = toastEl.querySelector('.toast-body');
                if (body) {
                    body.textContent = "¡Excelente elección! 💕 Completa el formulario abajo miau 🐾";
                }
                michiToast.show();
            }

            // Scroll suave hacia el formulario de adopción
            const formulario = document.getElementById('adopcion-container');
            if (formulario) {
                formulario.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

});
