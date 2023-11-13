const yellowBtn = document.querySelector('.btn-warning'),
    greenBtn = document.querySelector('.btn-success');

let header = document.querySelector('.header'),
    blueBlock = document.querySelector('#left'),
    yellowBlock = document.querySelector('#right'),
    modal = document.querySelector('.modal'),
    modalClose = document.querySelector('.modal__close');

// №2.1
yellowBtn.addEventListener('click', function() {
    header.classList.toggle('hide');
});

// №2.2
greenBtn.addEventListener('click', function() {
    if (getComputedStyle(blueBlock).order == 1) {
        blueBlock.style.order = 2;
        yellowBlock.style.order = 1;
    } else {
        blueBlock.style.order = 1;
        yellowBlock.style.order = 2;
    }
});

// №2.3
window.onload = function() {
    setTimeout(function() {
        modal.classList.add('open');
    }, 1000);
};

modalClose.addEventListener('click', function() {
    modal.classList.remove('open');
});

modal.addEventListener('click', function(e) {
    if (e.target == modal || e.target.getAttribute('data-close') == '') {
        modal.classList.remove('open');
    }
});
