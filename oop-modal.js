class Modal {
    constructor(openButton, closeButton, modal) {
        this.openButton = document.querySelector(openButton);
        this.closeButton = document.querySelector(closeButton);
        this.modal = document.querySelector(modal);

        this.openButton.addEventListener('click', () => this.openModal());
        this.closeButton.addEventListener('click', () => this.closeModal());
    }

    openModal () {
        this.modal.style.display = "block";
    }

    closeModal () {
        this.modal.style.display = "none";
    }

}

const objectOne = new Modal("#btn-trigger-modal1","#btn-close-modal1","#modal1");
const objectTwo = new Modal("#btn-trigger-modal2", "#btn-close-modal2", "#modal2");
