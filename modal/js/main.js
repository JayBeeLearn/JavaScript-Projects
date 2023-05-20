const modalBtn = document.querySelector(".modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const modalContainer = document.querySelector(".modal-container");

const closeModalBtn = document.querySelector(".close-btn");

modalBtn.onclick = () => {
  modalOverlay.classList.add("open-modal");
  //   modalOverlay.classList.toggle("open-modal");
};

closeModalBtn.onclick = () => {
  modalOverlay.classList.remove("open-modal");
};

modalOverlay.onclick = () => {
  modalOverlay.classList.remove("open-modal");
};

// modalContainer.onclick = () => {
//     alert('hi')
// }