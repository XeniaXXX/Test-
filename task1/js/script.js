const yellowBtn = document.querySelector('.btn-warning'),
    greenBtn = document.querySelector('.btn-success'),
    header = document.querySelector('.header'),
    blueBlock = document.querySelector('.blue'),
    yellowBlock = document.querySelector('.yellow'),
    modal = document.querySelector('.modal'),
    modalClose = document.querySelector('.modal__close');

// №2.1
function toggleElem(elem, selector) {
    elem.classList.toggle(selector);
}

yellowBtn.addEventListener('click', function() {
    toggleElem(header, 'hide');
});

// №2.2
greenBtn.addEventListener('click', function() {
    toggleElem(yellowBlock, 'first__block');
});

// №2.3
window.onload = function() {
    setTimeout(function() {
        toggleElem(modal, 'open');
    }, 1000);
};

modalClose.addEventListener('click', function() {
    toggleElem(modal, 'open');
});

modal.addEventListener('click', function(e) {
    if (e.target == modal) {
        toggleElem(modal, 'open');
    }
});