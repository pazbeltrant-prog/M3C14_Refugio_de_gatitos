document.addEventListener('DOMContentLoaded', function () {
    const myCarousel = document.querySelector('#michiSlider');
    
    const carousel = new bootstrap.Carousel(myCarousel, {
        interval: 3000, // Se mueve cada 3 segundos
        ride: 'carousel',
        pause: 'hover'  // ESTO es lo que hace que se detenga al pasar el mouse
    });
});


const scrollBtn = document.getElementById("scrollToTopBtn");
const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Mostrar botón después de hacer scroll
    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }

    // Si el footer entra en pantalla
    if (footerTop < windowHeight) {
        document.body.classList.add("footer-visible");
    } else {
        document.body.classList.remove("footer-visible");
    }
});
