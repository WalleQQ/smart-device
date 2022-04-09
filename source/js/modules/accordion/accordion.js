const accordionDetails = document.querySelectorAll('details');

function handleClickOnDetails(evt) {
  let detailsOpened = document.querySelectorAll('details[open]');

  for (const item of detailsOpened) {
    if (evt.target.current !== item) {
      item.removeAttribute('open');
    }
  }
}

accordionDetails.forEach(function (item) {
  item.addEventListener('click', handleClickOnDetails);
});
