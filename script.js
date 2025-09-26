document.addEventListener("DOMContentLoaded", () => {
  const modalLinks = document.querySelectorAll(".link.proximamente");
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("closeModal");

  modalLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "flex";
    });
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
