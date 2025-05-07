$(document).ready(function(){
    console.log("funciona");


});

// Barra de Navegación

let isOpen = false;

$('#boton').click(function () {
    const dropdown = $(".dropdown");

    if (isOpen) {
        gsap.to(dropdown, {
            y: "-100vh",
            delay: 0.15,
            duration: 0.5,
            ease: "power1.in",
            onComplete: () => {
                dropdown.css("visibility", "hidden");
                isOpen = false;
            }
        }),
        
        gsap.to(".hamburguesa rect", {
            fill: "black",
            duration: 0.35

        })

    }
        
        else {
        dropdown.css("visibility", "visible");
        gsap.to(dropdown, {
            y: "0vh",
            delay: 0.15,
            duration: 0.5,
            ease: "power1.out",
            onStart: () => isOpen = true
        }),

        gsap.to(".hamburguesa rect", {
            fill: "white",
            duration: 0.35

        })
    }
});

//Animaciones botón

const hamburguesa = document.querySelector('.hamburguesa');

hamburguesa.addEventListener('click', () => {
    gsap.fromTo(hamburguesa, 
      { rotation: 0 }, 
      {
        rotation: 360,
        duration: 0.8,
        ease: "power2.inOut"
      }
    );
  });

  hamburguesa.addEventListener('mouseenter', () => {
    floatAnim = gsap.to(hamburguesa, {
      y: -5,              
      duration: 0.5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });
  });

  hamburguesa.addEventListener('mouseleave', () => {
    floatAnim.kill();
    gsap.to(hamburguesa, { y: 0, duration: 0.3 });
  });


//Animaciones enlaces

const links = document.querySelectorAll(".linea_anim");

links.forEach(link => {
  link.addEventListener("mouseenter", () => {
    gsap.to(link, {
      "--underline-scale": 1,
      duration: 0.2,
      ease: "power2.out"
    });
  });

  link.addEventListener("mouseleave", () => {
    gsap.to(link, {
      "--underline-scale": 0,
      duration: 0.2,
      ease: "power2.in"
    });
  });
});


