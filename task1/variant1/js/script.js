const yellowBtn = document.querySelector('.btn-warning'),
    greenBtn = document.querySelector('.btn-success'),
    header = document.querySelector('.header'),
    blueBlock = document.querySelector('.blue'),
    yellowBlock = document.querySelector('.yellow'),
    modal = document.querySelector('.modal'),
    modalClose = document.querySelector('.modal__close');

// №2.1 
function toggleElem() {
    header.classList.toggle('hide');
}

yellowBtn.addEventListener('click', toggleElem);

// №2.2
function reorderElems() {
    blueBlock.classList.toggle('first__block');
}

greenBtn.addEventListener('click', reorderElems);

// №2.3
function openModal() {
    modal.classList.toggle('open');
}

window.onload = function() {
    setTimeout(function() {
        openModal();
    }, 1000);
};

modalClose.addEventListener('click', openModal);

modal.addEventListener('click', function(e) {
    if (e.target == modal) {
        openModal();
    }
});
