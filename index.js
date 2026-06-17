const likes = document.querySelector(".likes");
const view = document.querySelector(".view");
const star = document.querySelector(".star");
const form = document.querySelector(".contact-form");
const closeForm = document.querySelector(".close-form");
const share = document.querySelector(".share");

let counter = 0;
window.addEventListener("load", openModal);

const modal = document.querySelector(".modal");
console.log(modal.textContent);
function openModal() {
  modal.style.display = "block";
}

closeModal = document.querySelector(".close-modal");
closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});

share.addEventListener("click", function () {
  form.style.display = "block";
});

closeForm.addEventListener("click", function () {
  form.style.display = "none";
  console.log("form clicked");
});
