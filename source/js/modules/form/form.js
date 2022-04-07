import { sendData } from '../api/api.js';
import IMask from 'imask';

const forms = document.querySelectorAll('form');
const nameInputs = document.querySelectorAll('input[name=name]');
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
  IMask(telInput, maskOptions);
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
