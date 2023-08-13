document.addEventListener("DOMContentLoaded", function () {
    const titles = document.querySelectorAll(".changing-title");
    let currentIndex = 0;
  
    function fadeIn(element, duration) {
      let opacity = 0;
      const interval = 30; // Intervalo de tiempo entre cada cambio de opacidad
      const steps = duration / interval;
      const increment = 1 / steps;
  
      element.style.opacity = "0"; // Comienza con opacidad 0
      element.style.display = "block"; // Asegura que el elemento esté visible
  
      const fadeInInterval = setInterval(() => {
        if (opacity >= 1) {
          clearInterval(fadeInInterval);
        } else {
          opacity += increment;
          element.style.opacity = opacity.toString();
        }
      }, interval);
    }
  
    function fadeOut(element, duration) {
      let opacity = 1;
      const interval = 30;
      const steps = duration / interval;
      const decrement = 1 / steps;
  
      const fadeOutInterval = setInterval(() => {
        if (opacity <= 0) {
          clearInterval(fadeOutInterval);
          element.style.display = "none"; // Oculta el elemento una vez que la opacidad llega a 0
        } else {
          opacity -= decrement;
          element.style.opacity = opacity.toString();
        }
      }, interval);
    }
  
    function showNextTitle() {
      const fadeInDuration = 2000; // 2 segundos para aparecer gradualmente
      const visibleDuration = 5000; // 3 segundos de visibilidad
      const fadeOutDuration = 2000; // 2 segundos para desaparecer gradualmente
  
      fadeIn(titles[currentIndex], fadeInDuration);
      setTimeout(() => {
        fadeOut(titles[currentIndex], fadeOutDuration);
        currentIndex = (currentIndex + 1) % titles.length;
        setTimeout(showNextTitle, fadeInDuration + visibleDuration + fadeOutDuration);
      }, fadeInDuration + visibleDuration);
    }
  
    showNextTitle();
  });
  