const yellowBtn = document.querySelector('.btn-warning'),
    greenBtn = document.querySelector('.btn-success');

let header = document.querySelector('.header'),
    blueBlock = document.querySelector('#left'),
    yellowBlock = document.querySelector('#right'),
    modal = document.querySelector('.modal'),
    modalClose = document.querySelector('.modal__close'),
    leftCol = document.querySelector('.left'),
    rightCol = document.querySelector('.right'),
    newBlueBlock = document.querySelector('#left').cloneNode(),
    newYellowBlock = document.querySelector('#right').cloneNode();

// №2.1
yellowBtn.addEventListener('click', function() {
    header.classList.toggle('hide');
});

// №2.2
// 1
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

// 2
greenBtn.addEventListener('click', function() {
    if(leftCol.firstElementChild.classList == 'colored blue') {
        leftCol.insertAdjacentElement('afterbegin', yellowBlock);
        rightCol.insertAdjacentElement('afterbegin', blueBlock);
    } else {
        leftCol.insertAdjacentElement('afterbegin', blueBlock);
        rightCol.insertAdjacentElement('afterbegin', yellowBlock);
    }
});

// 3
greenBtn.addEventListener('click', function() {
    if(leftCol.firstElementChild.classList == 'colored blue') {
        blueBlock.replaceWith(newYellowBlock);
        yellowBlock.replaceWith(newBlueBlock);
    } 
    else {
        newBlueBlock.replaceWith(yellowBlock);
        newYellowBlock.replaceWith(blueBlock);
    }
});

// 4
$(function(){
    jQuery.fn.swap = function(b) {
      b = jQuery(b)[0];
      let a = this[0],
          a2 = a.cloneNode(true),
          b2 = b.cloneNode(true),
          stack = this;
  
      a.parentNode.replaceChild(b2, a);
      b.parentNode.replaceChild(a2, b);
  
      stack[0] = a2;
      return this.pushStack( stack );
  };

  $('.btn-success').on('click', function(){
    $('#right').swap('#left');
  });
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
