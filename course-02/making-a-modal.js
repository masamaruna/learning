const openButton = document.querySelector("#openModal");
const closeButton = document.querySelector("#closeModal");
const modal = document.querySelector("#modal");
modal.style.display = "none";

openButton.addEventListener('click', OpenModal);
closeButton.addEventListener('click', CloseModal);

function OpenModal () {
    modal.style.display = "block";
}

function CloseModal () {
    modal.style.display = "none";
}