const likes = document.querySelector(".likes");
const view = document.querySelector(".view");
const star = document.querySelector(".star");
let counter = 0;
window.addEventListener("load", openModal);

const modal = document.querySelector(".modal");
console.log(modal.textContent);
function openModal() {
  modal.style.display = "block";
}

closemodal = document.querySelector(".closemodal");
closemodal.addEventListener("click", function () {
  modal.style.display = "none";
});
