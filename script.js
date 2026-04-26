
/* ============================= */
/* ===== SCROLL REVEAL ===== */
/* ============================= */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


/* ============================= */
/* ===== RIPPLE BUTTON ===== */
/* ============================= */

const buttons = document.querySelectorAll(".neon-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", function(e) {

    const rect = this.getBoundingClientRect();

    const circle = document.createElement("span");
    const diameter = Math.max(this.clientWidth, this.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = diameter + "px";
    circle.style.left = (e.clientX - rect.left - radius) + "px";
    circle.style.top = (e.clientY - rect.top - radius) + "px";

    circle.classList.add("ripple");

    this.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 600);
  });
});


/* ============================= */
/* ===== 3D CARD EFFECT ===== */
/* ============================= */

const cards = document.querySelectorAll(".service-card");

cards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 10;
    const rotateY = (x - centerX) / 10;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = `
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  });
});

/* ============================= */
/* ===== ULTRA CYBER LOADER ==== */
/* ============================= */

const statusSteps = [
  "BOOTING CORE...",
  "LOADING MODULES...",
  "INITIALIZING UI...",
  "SYNCING COMPONENTS...",
  "ACCESS GRANTED"
];

const statusEl = document.getElementById("statusText");
const barEl = document.getElementById("progressBar");
const percentEl = document.getElementById("percentText");

let progress = 0;
let stepIndex = 0;

/* update status berkala */
const statusTimer = setInterval(() => {
  statusEl.textContent = statusSteps[stepIndex];
  stepIndex = (stepIndex + 1) % statusSteps.length;
}, 450);

/* progress smooth (fake but feels real) */
const progTimer = setInterval(() => {
  progress += Math.random() * 8; // variasi biar natural
  if (progress > 100) progress = 100;

  barEl.style.width = progress + "%";
  percentEl.textContent = Math.floor(progress) + "%";

  if (progress >= 100) {
    clearInterval(progTimer);
    clearInterval(statusTimer);

    statusEl.textContent = "READY";

    // delay sedikit lalu hide
    setTimeout(() => {
      const loader = document.getElementById("loader");
      loader.classList.add("hide");

      setTimeout(() => {
        loader.style.display = "none";
      }, 800);
    }, 1000);
  }
}, 120);

/* fallback kalau window load lebih cepat */
window.addEventListener("load", () => {
  // biar gak terlalu cepat hilang, biarin progress finish dulu
});
/* ===== MODAL CERTIFICATE ===== */
function openModal(src) {
  document.getElementById("certModal").style.display = "block";
  document.getElementById("modalImg").src = src;
}

function closeModal() {
  document.getElementById("certModal").style.display = "none";
}
const contactCards = document.querySelectorAll(".contact-card");

contactCards.forEach(card => {
  card.addEventListener("click", function(e) {
    const rect = this.getBoundingClientRect();

    const circle = document.createElement("span");
    const diameter = Math.max(this.clientWidth, this.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = diameter + "px";
    circle.style.left = (e.clientX - rect.left - radius) + "px";
    circle.style.top = (e.clientY - rect.top - radius) + "px";

    circle.classList.add("ripple");

    this.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 600);
  });
});