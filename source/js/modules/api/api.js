import { closeModal } from '../modals/showModal.js';

export const sendData = () => {
  fetch('https://echo.htmlacademy.ru/', {
    method: 'POST',
  })
    .then((response) => {
      if (response.ok) {
        closeModal();
        alert('Форма успешно отправлена');
      } else {
        alert('Произошла ошибка отправки');
      }
    })
    .catch(() => {
      alert('Произошла ошибка отправки');
    });
};
