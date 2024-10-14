import { projects } from "./projects.js";

const burger = document.querySelector(".burger-menu");
const mobMenu = document.querySelector(".mobile-bar");
const menuLinks = document.querySelectorAll(".mobile-bar-item a");

burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  mobMenu.classList.toggle("is-hidden");
});
menuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    burger.classList.toggle("active");
    mobMenu.classList.add("is-hidden");
  });
});

const galleryItem = document.querySelectorAll(".gallery-list-item");

let touchStartX = 0;
let touchStartY = 0;

galleryItem.forEach((item) => {
  item.addEventListener("click", handleItemClick);
  item.addEventListener("touchstart", (event) => {
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
  });

  item.addEventListener("touchend", (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const touchEndY = event.changedTouches[0].clientY;

    if (
      Math.abs(touchStartX - touchEndX) < 10 &&
      Math.abs(touchStartY - touchEndY) < 10
    ) {
      handleItemClick(event);
    }
  });
});

function handleItemClick(event) {
  const itemId = event.currentTarget.classList[1];
  const projectData = projects.find((project) => project.id === itemId);

  if (projectData) {
    createModal(projectData);
  } else {
    alert("Not found");
  }
}

function createModal(project) {
  const modal = document.querySelector(".modal");
  const modalContent = document.querySelector(".modal-content");
  document.body.style.overflow = "hidden";
  modalContent.innerHTML = `
    <span class="close-button">&times;</span>
    <h2>${project.title}</h2>
    <div class="modal-info-container">
    <img src="${project.image}" alt="${project.title}">
    <div class="modal-descriptions">
    <a href="${project.link}" >Go to web-site &#8594;</a>
    <p>My role in the team: ${project.role} </p>
    <p>Technology:${project.technology} </p>
    <p>${project.description}</p>
    </div>
    </div>

  `;

  modal.classList.add("show");

  const closeButton = modalContent.querySelector(".close-button");
  closeButton.addEventListener("click", closeModal);
  closeButton.addEventListener("touchend", closeModal);

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("show");
  document.body.style.overflow = "";
}
