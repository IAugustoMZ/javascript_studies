// select the objects we want to manipulate
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// define the functions needed
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

// function to open the modal
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// function to close the modal
btnCloseModal.addEventListener('click', closeModal);

// function to close the modal when clicking outside the modal
overlay.addEventListener('click', closeModal);

// function to close the modal when pressing the escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});