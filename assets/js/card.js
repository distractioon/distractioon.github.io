document.addEventListener("DOMContentLoaded", function () {
  const clickableDivs = document.querySelectorAll(".clickable-div");
  const closeButton = document.querySelectorAll(".btn-secondary");
  closeButton.forEach((button) => {
    button.addEventListener("click", closeCard);
  });

  clickableDivs.forEach((clickable) => {
    clickable.addEventListener("click", function () {
      const target = clickable.dataset.target;
      showCard(target);
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

function closeCard(event) {
  event.preventDefault();
  const cardContainer = event.target.closest(".card-container");
  cardContainer.classList.add("d-none");
}

