
// Animación de aparición de .contenido y h1 al hacer scroll
document.addEventListener("DOMContentLoaded", function() {
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    // Animar .contenido
    gsap.utils.toArray('.contenido').forEach(contenido => {
      gsap.from(contenido, {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contenido,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    });

    // Animar h1 dentro de main
    gsap.utils.toArray('main h1').forEach(h1 => {
      gsap.from(h1, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: h1,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    });

        // Animar fondo 
    gsap.utils.toArray('.fullwidth').forEach(fullwidth => {
      gsap.from(fullwidth, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: fullwidth,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    });


    // Animar h1 dentro de main
    gsap.utils.toArray('section').forEach(section => {
      gsap.from(section, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    });
}
});