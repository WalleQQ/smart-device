import { isEscapeKey } from '../../utils.js';

const openModalButton = document.querySelector('.main-nav__button');
const closeModalButton = document.querySelector('.modal__close-button');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const pageBody = document.querySelector('.page-body');

const onShowModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    modal.classList.remove('modal--isOpen');
    overlay.classList.remove('overlay--isShow');
    pageBody.classList.remove('page-body__isOpenMenu');
  }
};

const showModal = () => {
  modal.classList.add('modal--isOpen');
  overlay.classList.add('overlay--isShow');
  pageBody.classList.add('page-body__isOpenMenu');

  document.addEventListener('keydown', onShowModalEscKeydown);
};

const closeModal = () => {
  modal.classList.remove('modal--isOpen');
  overlay.classList.remove('overlay--isShow');
  pageBody.classList.remove('page-body__isOpenMenu');

  document.removeEventListener('keydown', onShowModalEscKeydown);
};

openModalButton.addEventListener('click', () => {
  showModal();
});

closeModalButton.addEventListener('click', () => {
  closeModal();
});

overlay.addEventListener('click', () => {
  closeModal();
});
