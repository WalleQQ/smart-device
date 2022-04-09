import {closeModal} from '../modals/showModal.js';
import {isEscapeKey} from '../../utils.js';
const successForm = document.querySelector('.success');
const successCloseButton = document.querySelector('.success__button');
const errorForm = document.querySelector('.error');
const errorCloseButton = document.querySelector('.error__button');

const onShowResultEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    successForm.classList.remove('success--show');
    errorForm.classList.remove('error--show');
  }
};

export const sendData = () => {
  fetch('https://echo.htmlacademy.ru/', {
    method: 'POST',
  }) .then((response) => {
    if (response.ok) {
      closeModal();
      successForm.classList.add('success--show');
      document.addEventListener('keydown', onShowResultEscKeydown);
    } else {
      errorForm.classList.add('error--show');
      document.addEventListener('keydown', onShowResultEscKeydown);
    }
  })
      .catch(() => {
        errorForm.classList.add('error--show');
        document.addEventListener('keydown', onShowResultEscKeydown);
      });
};


successCloseButton.addEventListener('click', () => {
  successForm.classList.remove('success--show');
  document.removeEventListener('keydown', onShowResultEscKeydown);
});

errorCloseButton.addEventListener('click', () => {
  errorForm.classList.remove('error--show');
  document.removeEventListener('keydown', onShowResultEscKeydown);
});
