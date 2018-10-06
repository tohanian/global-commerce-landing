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
  };
}
