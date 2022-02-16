const openModalBtn = document.querySelectorAll("[data-modal-target]");
const overlay = document.querySelector(".modal-overlay");

openModalBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    console.log(modal);
    openModal(modal);
  });
});

function openModal(modal) {
  // if (modal == null) return;
  modal.classList.add("active");
  console.log(modal);
  overlay.classList.add("active");
}

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".active");
  modals.forEach((modal) => {
    modal.classList.remove("active");
    console.log(modal);
    overlay.classList.remove("active");
  });
});
