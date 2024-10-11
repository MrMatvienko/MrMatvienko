const projects = [
  {
    id: "fitness",
    title: "Fitness App",
    description: "Опис Fitness App...",
    image: "./image/fitness.jpg",
    role: "developer",
  },
  {
    id: "vagetables",
    title: "Fitness App",
    description: "Опис Fitness App...",
    image: "./image/vagetables.jpg",
    role: "developer",
  },
  {
    id: "taskpro",
    title: "Fitness App",
    description: "Опис Fitness App...",
    image: "./image/taskpro.jpg",
    role: "developer",
  },
  {
    id: "web-studio",
    title: "Fitness App",
    description: "Опис Fitness App...",
    image: "./image/web-studio.jpg",
    role: "developer",
  },
  {
    id: "rental-camper",
    title: "Fitness App",
    description: "Опис Fitness App...",
    image: "./image/rental-camper.jpg",
    role: "developer",
  },
  {
    id: "slots",
    title: "Fitness App",
    description: "Опис Fitness App...",
    image: "./image/slots.jpg",
    role: "developer",
  },
];

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

galleryItem.forEach((item) => {
  item.addEventListener("click", handleItemClick);
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

  modalContent.innerHTML = `
    <span class="close-button">&times;</span>
    <h2>${project.title}</h2>
    <img src="${project.image}" alt="${project.title}">
    <p>${project.description}</p>
  `;

  modal.classList.add("show");

  const closeButton = modalContent.querySelector(".close-button");
  closeButton.addEventListener("click", closeModal);

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("show");
}