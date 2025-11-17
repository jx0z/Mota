// ===== INTRO TEXT =====
document.addEventListener("DOMContentLoaded", () => {
  const frases = [
    "Bem-vindo!",
    "To fazendo isso pra alguns amigos...",
    "E você é um deles.",
  ];

  const introText = document.getElementById("introText");
  let current = 0;
  let charIndex = 0;

  function typeWriter() {
    introText.style.opacity = 1;

    if (charIndex < frases[current].length) {
      introText.textContent += frases[current][charIndex];
      charIndex++;
      setTimeout(typeWriter, 80);
    } else {
      setTimeout(nextLine, 1200);
    }
  }

  function nextLine() {
    current++;
    if (current < frases.length) {
      introText.textContent = "";
      charIndex = 0;
      typeWriter();
    } else {
      endIntro();
    }
  }

  function endIntro() {
    const intro = document.getElementById("intro");
    intro.style.transition = "1s";
    intro.style.opacity = 0;

    setTimeout(() => {
      intro.remove();
      document.body.style.overflow = "auto";
    }, 1000);
  }

  typeWriter();
});

// ===== ANIMAÇÃO DE APARECER =====
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 },
);

document
  .querySelectorAll("section, header")
  .forEach((el) => observer.observe(el));
