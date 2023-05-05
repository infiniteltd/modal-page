const modalBtn = document.querySelector('.modal-btn');
const modalContainer = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', function() {
    modalContainer.classList.add('open-modal');
});

closeBtn.addEventListener('click', function() {
    modalContainer.classList.remove('open-modal');
});