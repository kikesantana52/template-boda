document.addEventListener("DOMContentLoaded", function () {
  const fadeInSections = document.querySelectorAll(".fade-in-section");
  const fadeInOnScroll = () => {
    fadeInSections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const triggerBottom = window.innerHeight * 0.7;

      if (sectionTop < triggerBottom) {
        section.classList.add("visible");
      }
    });
  };
  window.addEventListener("scroll", fadeInOnScroll);

  const targetDate = new Date("2025-02-08T00:00:00").getTime(); // Fecha objetivo

  const updateCountdown = () => {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft >= 0) {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      document.getElementById("days").textContent = days;
      document.getElementById("hours").textContent = hours
        .toString()
        .padStart(2, "0");
      document.getElementById("minutes").textContent = minutes
        .toString()
        .padStart(2, "0");
      document.getElementById("seconds").textContent = seconds
        .toString()
        .padStart(2, "0");
    } else {
      // Si la fecha ya pasó, puedes mostrar un mensaje o detener el contador
      document.getElementById("contador").innerHTML =
        "<p>¡El evento ha comenzado!</p>";
    }
  };

  // Actualizar cada segundo
  setInterval(updateCountdown, 1000);
  updateCountdown();
  // Para que se verifique también cuando la página se carga.
  fadeInOnScroll();
});
