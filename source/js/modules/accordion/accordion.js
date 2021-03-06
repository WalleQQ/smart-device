const accordionDetails = document.querySelectorAll('details');


/** @this handleClickOnDetails */
function handleClickOnDetails() {
  let detailsOpened = document.querySelectorAll('details[open]');

  for (const item of detailsOpened) {
    if (this !== item) {
      item.removeAttribute('open');
    }
  }
}

accordionDetails.forEach(function (item) {
  item.addEventListener('click', handleClickOnDetails);
});
