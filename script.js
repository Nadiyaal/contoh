const words = [
"Data Scientist",
"System Analyst"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {

current = words[i];

if (!isDeleting) {
j++;
} else {
j--;
}

document.getElementById("typing").textContent =
current.substring(0, j);

if (!isDeleting && j === current.length) {

isDeleting = true;

setTimeout(type, 1500);

return;
}

if (isDeleting && j === 0) {

isDeleting = false;

i++;

if (i === words.length) {
i = 0;
}
}

setTimeout(type, isDeleting ? 60 : 120);
}

type();

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

glow.style.left = e.clientX + "px";
glow.style.top = e.clientY + "px";

});

window.addEventListener("scroll", () => {

const nav = document.querySelector("nav");
const words = [
  "Data Scientist",
  "System Analyst"
];

// =====================
// TYPEWRITER
// =====================
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
  current = words[i];

  if (!isDeleting) {
    j++;
  } else {
    j--;
  }

  const typingEl = document.getElementById("typing");
  if (typingEl) {
    typingEl.textContent = current.substring(0, j);
  }

  // selesai ngetik
  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(type, 1500);
    return;
  }

  // selesai hapus
  if (isDeleting && j === 0) {
    isDeleting = false;
    i++;

    if (i === words.length) {
      i = 0;
    }

    j = 0; // FIX penting biar tidak glitch
  }

  setTimeout(type, isDeleting ? 60 : 120);
}

type();


// =====================
// CURSOR GLOW (SAFE)
// =====================
const glow = document.querySelector(".cursor-glow");

if (glow) {
  let mouseX = 0, mouseY = 0;
  let currentX = 0, currentY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;

    glow.style.left = currentX + "px";
    glow.style.top = currentY + "px";

    requestAnimationFrame(animate);
  }

  animate();
}


// =====================
// NAVBAR SCROLL (SAFE)
// =====================
const nav = document.querySelector("nav");

if (nav) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      nav.style.background = "rgba(2,6,23,.9)";
      nav.style.backdropFilter = "blur(10px)";
    } else {
      nav.style.background = "transparent";
      nav.style.backdropFilter = "none";
    }
  });
}


// =====================
// SCROLL REVEAL (IMPROVED)
// =====================
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((item) => {
    const elementTop = item.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
if(window.scrollY > 100){

nav.style.background = "rgba(2,6,23,.9)";

}else{

nav.style.background = "transparent";

}

});
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(item => {
        const windowHeight = window.innerHeight;
        const elementTop = item.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            item.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();