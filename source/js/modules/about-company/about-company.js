const aboutCompanySection = document.querySelector('.about-company');
const aboutCompanyButton = aboutCompanySection.querySelector(
  '.about-company__button'
);
const aboutCompanyHiddenContent = aboutCompanySection.querySelector(
  '.about-company__hidden-content'
);

aboutCompanyButton.addEventListener('click', () => {
  aboutCompanyHiddenContent.classList.toggle(
    'about-company__hidden-content--isShow'
  );
  if (
    aboutCompanyHiddenContent.classList.contains(
      'about-company__hidden-content--isShow'
    )
  ) {
    aboutCompanyButton.textContent = 'Свернуть';
  } else {
    aboutCompanyButton.textContent = 'Подробнее';
  }
});
