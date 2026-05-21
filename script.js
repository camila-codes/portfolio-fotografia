const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    navbar.style.background = "rgba(20,20,20,0.45)";
    navbar.style.backdropFilter = "blur(18px)";
    navbar.style.border = "1px solid rgba(255,255,255,0.08)";

  } else {

    navbar.style.background = "rgba(255,255,255,0.08)";
    navbar.style.backdropFilter = "blur(12px)";

  }

});

/* SCROLL REVEAL */

const reveals = document.querySelectorAll(
  ".sobre, .galeria, .contato"
);

function revealSections(){

  const trigger = window.innerHeight * 0.85;

  reveals.forEach(section => {

    const top = section.getBoundingClientRect().top;

    if(top < trigger){

      section.classList.add("active");

    }

  });

}

window.addEventListener("scroll", revealSections);

revealSections();