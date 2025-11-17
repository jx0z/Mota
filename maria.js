document.addEventListener("DOMContentLoaded", () => {
  // --- Intro typewriter ---
  const frases = [
    "Bem-vindo!",
    "Fiz isso pra alguns amigos…",
    "E você é a Principal deles.",
  ];

  const introText = document.getElementById("introText");
  let current = 0,
    charIndex = 0;

  function typeWriter() {
    introText.style.opacity = 1;
    if (charIndex < frases[current].length) {
      introText.textContent += frases[current][charIndex];
      charIndex++;
      setTimeout(typeWriter, 80);
    } else setTimeout(nextLine, 1500);
  }

  function nextLine() {
    current++;
    if (current < frases.length) {
      charIndex = 0;
      introText.textContent = "";
      typeWriter();
    } else endIntro();
  }

  function endIntro() {
    const intro = document.getElementById("intro");
    intro.style.transition = "opacity 1s";
    intro.style.opacity = 0;

    setTimeout(() => {
      intro.style.display = "none";
      document.body.style.overflow = "auto";
      startReveal();
    }, 1000);
  }

  typeWriter();

  // ===== Fade-in =====
  function startReveal() {
    const sections = document.querySelectorAll(".fade-in");
    sections.forEach((sec, i) => {
      setTimeout(() => sec.classList.add("visible"), i * 250);
    });
  }
});
