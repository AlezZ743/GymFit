// Barra de Navegación

/* let isOpen = false;

$('#boton').click(function () {
    const dropdown = $(".dropdown");

    console.log("esto funciona");

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
            fill: "#ebb235",
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
console.log(links);

links.forEach(link => {
  link.addEventListener("mouseenter", () => {
    gsap.to(link, {
      "--underline-scale": 1,
      duration: 0.2,
      ease: "power2.out",
    });
  });
});




links.forEach(link => {
  link.addEventListener("mouseleave", () => {
    gsap.to(link, {
      "--underline-scale": 0,
      duration: 0.2,
      ease: "power2.in"
    });
  });
});

const iconos = document.querySelectorAll(".icon");

  iconos.forEach(icono => {
    icono.addEventListener("mouseenter", () => {
      gsap.to(icono, {
        scale: 1.2,
        duration: 0.3,
        ease: "power2.out"
        });
      });
    });

  iconos.forEach(icono => {
    icono.addEventListener("mouseleave", () => {
      gsap.to(icono, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
        });
      });
    });


     */
// c:\laragon\www\navegacion_alec\nav.js

document.addEventListener("DOMContentLoaded", () => {
  // Barra de Navegación
  let isOpen = false;

  $('#boton').click(function () {
    const dropdown = $(".dropdown");

    console.log("esto funciona");

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
      });

      gsap.to(".hamburguesa rect", {
        fill: "#ebb235",
        duration: 0.35
      });
    }

      else {
        dropdown.css("visibility", "visible");

        gsap.to(dropdown, {
          y: "0vh",
          delay: 0.15,
          duration: 0.5,
          ease: "power1.out",
          onStart: () => isOpen = true,
          onComplete: () => {
            gsap.fromTo(".logo_text",
              { y: 40, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                stagger: 0.05
              }
            );
          }
  });

  gsap.to(".hamburguesa rect", {
    fill: "white",
    duration: 0.35
  });
}
  });

  // Animaciones botón
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

  // Animaciones enlaces
  const links = document.querySelectorAll(".linea_anim");
  console.log(links);

  links.forEach(link => {
    link.addEventListener("mouseenter", () => {
      gsap.to(link, {
        "--underline-scale": 1,
        duration: 0.2,
        ease: "power2.out",
      });

      // Aumenta el tamaño del icono dentro del enlace actual
      const icono = link.parentElement.querySelector(".icon");
      console.log(icono);
      if (icono) {
        gsap.to(icono, {
          scale: 1.2,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    });

    link.addEventListener("mouseleave", () => {
      gsap.to(link, {
        "--underline-scale": 0,
        duration: 0.2,
        ease: "power2.out",
      });

      // Restaura el tamaño del icono dentro del enlace actual
      const icono = link.parentElement.querySelector(".icon");
      if (icono) {
        gsap.to(icono, {
          scale: 1,
          duration: 0.3,
          ease: "power2.in"
        });
      }
    });
  });

  // Animaciones iconos
  const iconos = document.querySelectorAll(".icon");
  console.log(iconos);
});


  // Animaciones logo

  document.querySelector(".logo").addEventListener("mouseenter", () => {
  gsap.to(".logo", { filter: "drop-shadow(0 0 10px #ff9900)", duration: 0.15 });
});

document.querySelector(".logo").addEventListener("mouseleave", () => {
  gsap.to(".logo", { filter: "drop-shadow(0 0 0 #000)", duration: 0.3 });
});

const logo = document.querySelector(".logo");

logo.addEventListener("mouseenter", () => {
  logo.classList.add("hovered");
});

logo.addEventListener("mouseleave", () => {
  logo.classList.remove("hovered");
});


// Animación de entrada desde abajo, con stagger
gsap.to(".logo_text", {
  y: 0,
  duration: 1,
  ease: "power3.out",
  stagger: 0.05,
  delay: 0.3,
});

// Glow en hover individual por letra
document.querySelectorAll(".logo_text").forEach(letter => {
  letter.addEventListener("mouseenter", () => {
    letter.style.filter = "drop-shadow(0 0 10px #ffbb00)";
  });

  letter.addEventListener("mouseleave", () => {
    letter.style.filter = "drop-shadow(0 0 0 transparent)";
  });
});
