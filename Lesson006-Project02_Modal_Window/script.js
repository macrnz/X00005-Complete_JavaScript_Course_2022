'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

//ADDING CLASS TYPES
const closemodal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//REMOVING CLASS TYPES
const openmodal = function () {
  //console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openmodal);
  btnCloseModal.addEventListener('click', closemodal);
  overlay.addEventListener('click', closemodal);

  //DETERMINING WHAT KEY WAS PRESSED
  /*document.addEventListener('keydown', function (e) {
    console.log(e.key);
  });*/
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closemodal();
    }
  });
}
