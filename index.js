const projects = [
  {
    id: "fitness",
    title: "Fitness App",
    description:
      "Fitness App - this is a web application for those who wish to have access to a database of exercises, with a detailed analysis of the execution technique.",
    image: "./image/fitness.jpg",
    role: "developer",
    link: "https://mykyta-ushakow.github.io/Gym-squad/index.html",
    technology: "HTML, CSS, JS",
  },
  {
    id: "vagetables",
    title: "Vagetables Store",
    description:
      "An organic products and fresh vegetables store for those who want to live a healthy lifestyle.",
    image: "./image/vagetables.jpg",
    role: "developer",
    link: "https://iame1off.github.io/project-wonderful-nine/",
    technology: "HTML, CSS, JS",
  },
  {
    id: "taskpro",
    title: "Task Manager",
    description:
      "A task manager for team collaboration, as well as for individuals who enjoy tracking task progress.",
    image: "./image/taskpro.jpg",
    role: "developer",
    link: "https://annanadvor.github.io/taskPro_project-group-6/",
    technology: "HTML, CSS, REACT JS",
  },
  {
    id: "web-studio",
    title: "Web-Studio",
    description:
      "Web-Studio - pet project focused on improving static layout development as well as general HTML and CSS concepts. It features responsive design with three breakpoints: 320px, 768px, and 1158px. Adaptive images were used for monitors with different pixel densities.",
    image: "./image/web-studio.jpg",
    role: "developer",
    link: "https://mrmatvienko.github.io/web-studio/",
    technology: "HTML, CSS, JS",
  },
  {
    id: "rental-camper",
    title: "Rental Camper",
    description:
      "Rental Camper - pet project utilizing Redux. A mock API service was used as the backend. The project was developed in a web format.",
    image: "./image/rental-camper.jpg",
    role: "developer",
    link: "https://mrmatvienko.github.io/rental-campers/",
    technology: "HTML, CSS, REACT JS, REDUX",
  },
  {
    id: "slots",
    title: "Slots playing",
    description:
      " Slots playing - pet project implemented with vanilla JavaScript, aimed at developing the ability to use asynchronous functions like setTimeout().",
    image: "./image/slots.jpg",
    role: "developer",
    link: "https://mrmatvienko.github.io/SimpleSlot/",
    technology: "HTML, CSS, JS",
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
