import {sendData} from '../api/api.js';
import IMask from 'imask';

const phoneMask = IMask;
const forms = document.querySelectorAll('form');
export const nameInputs = document.querySelectorAll('input[name=name]');
const telInputs = document.querySelectorAll('input[type=tel]');

const maskOptions = {
  mask: '+{7}(000)000-00-00',
};

nameInputs.forEach((nameInput) => {
  nameInput.addEventListener('input', () => {
    const value = nameInput.value;
    const nameRegExp = /^[a-zA-Zа-яА-Я]+/g;
    if (nameRegExp.test(value) === false) {
      nameInput.setCustomValidity(
          'Введите имя русскими или английскими буквами'
      );
    } else {
      nameInput.setCustomValidity('');
    }
    nameInput.reportValidity();
  });
});

telInputs.forEach((telInput) => {
  phoneMask(telInput, maskOptions);
  telInput.addEventListener('input', () => {
    if (telInput.value.length < 16) {
      telInput.setCustomValidity('Введите номера телефона');
    } else {
      telInput.setCustomValidity('');
    }
    telInput.reportValidity();
  });
});

forms.forEach((form) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData();
    evt.target.reset();
  });
});

const focusableElements = 'button, input, textarea, [tabindex]:not([tabindex="-1"])';
const modal = document.querySelector('.modal');
const firstFocusableElement = modal.querySelectorAll(focusableElements)[0];
const focusableContent = modal.querySelectorAll(focusableElements);
const lastFocusableElement = focusableContent[focusableContent.length - 1];

document.addEventListener('keydown', function (e) {

  if (document.activeElement === lastFocusableElement) {
    firstFocusableElement.focus();
    e.preventDefault();
  }

});

firstFocusableElement.focus();
