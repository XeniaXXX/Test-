let yellowBtn = document.querySelector('.btn-warning'),
    header = document.querySelector('.header'),
    greenBtn = document.querySelector('.btn-success'),
    blueBlock = document.querySelector('#left'),
    yellowBlock = document.querySelector('#right'),
    wrapperBlock = document.querySelector('.wrapper'),
    modal = document.querySelector('.modal'),
    modalClose = document.querySelector('.modal__close');


// №2.1
yellowBtn.addEventListener('click', function() {
    if (header.classList.contains('show')) {
        header.classList.remove('show');
        header.classList.add('hide');
    } else {
        header.classList.remove('hide');
        header.classList.add('show');
    }
});

// №2.2
greenBtn.addEventListener('click', function() {
    if (blueBlock.classList.contains('blue') && yellowBlock.classList.contains('yellow')) {
        blueBlock.classList.remove('blue');
        blueBlock.classList.add('yellow');
        yellowBlock.classList.remove('yellow');
        yellowBlock.classList.add('blue');
    } else {
        blueBlock.classList.remove('yellow');
        blueBlock.classList.add('blue');
        yellowBlock.classList.remove('blue');
        yellowBlock.classList.add('yellow');
    }
});

// №2.3
function showPopup() {
    setTimeout(function() {
        modal.classList.add('open');
    }, 1000);
}
window.onload = showPopup();

function closeModal() {
    modal.classList.remove('open');
}
modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', function(e) {
    if (e.target == modal || e.target.getAttribute('data-close') == '') {
        closeModal();
    }
});
