
  document.addEventListener("DOMContentLoaded", function () {
    const clickableDivs = document.querySelectorAll(".clickable-div");
    const closeButtons = document.querySelectorAll(".close-card-button");

    clickableDivs.forEach((clickable) => {
      clickable.addEventListener("click", function (event) {
        event.preventDefault(); // Prevenir comportamiento predeterminado
        const target = clickable.dataset.target;
        showCard(target);
      });
    });

    closeButtons.forEach((button) => {
      button.addEventListener("click", function (event) {
        event.preventDefault(); // Prevenir comportamiento predeterminado
        closeCard(button);
      });
    });
  });

  function showCard(target) {
    const cardContainers = document.querySelectorAll(".card-container");
    cardContainers.forEach((container) => {
      if (container.id === target) {
        container.classList.remove("d-none");
      } else {
        container.classList.add("d-none");
      }
    });
  }

  function closeCard(button) {
    const cardContainer = button.closest(".card-container");
    cardContainer.classList.add("d-none");
  }

