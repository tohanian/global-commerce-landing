import '../styles/styles.scss';
import 'zenscroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

(function() {
  selectItem(0)();
  AOS.init({
    duration: 900,
    once: true,
    mirror: false
  });
})();

// Event handlers

const carouselSelectors = document
  .querySelector('.carousel-selectors')
  .getElementsByTagName('li');
for (let i = 0; i < carouselSelectors.length; i++) {
  carouselSelectors[i].addEventListener('click', selectItem(i));
}

function selectItem(selectedItem) {
  return function() {
    ['.carousel-image', '.carousel-text'].forEach(item => {
      const items = document.querySelector(item).getElementsByTagName('li');
      for (let i = 0; i < items.length; i++) {
        if (i !== selectedItem) {
          items[i].style.display = 'none';
        } else {
          items[i].style.display = 'block';
        }
      }
    });

    const selectors = document
      .querySelector('.carousel-selectors')
      .getElementsByTagName('li');
    for (let i = 0; i < selectors.length; i++) {
      if (i !== selectedItem) {
        selectors[i].classList.remove('active');
      } else {
        selectors[i].classList.add('active');
      }
    }
  };
}

// Scroll Events
window.addEventListener('scroll', changeHeaderBackground);

function changeHeaderBackground() {
  if (window.scrollY !== 0) {
    document.querySelector('.page-header').classList.add('dark');
  } else {
    document.querySelector('.page-header').classList.remove('dark');
  }
}

// Hamburger menu
const hamburgerIcon = document.querySelector('.hamburger');
hamburgerIcon.addEventListener('click', function(e) {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  if (hamburgerIcon.classList.contains('is-active')) {
    hamburgerIcon.classList.remove('is-active');
    hamburgerMenu.classList.add('hidden');
  } else {
    hamburgerIcon.classList.add('is-active');
    hamburgerMenu.classList.remove('hidden');
  }
});
