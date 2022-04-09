import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import './modules/modals/showModal.js';
import './modules/form/form.js';
import './modules/about-company/about-company.js';
import './modules/accordion/accordion.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  window.addEventListener('load', () => {
    initModals();
  });
});
