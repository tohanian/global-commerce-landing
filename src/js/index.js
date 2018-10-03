import '../styles/styles.scss';

// Event handlers

const carouselSelectors = document
  .querySelector('.carousel-selectors')
  .getElementsByTagName('li');
for (let i = 0; i < carouselSelectors.length; i++) {
  carouselSelectors[i].addEventListener('click', selectItem(i));
}

function selectItem(selectedItem) {
  return function() {
    const images = document
      .querySelector('.carousel-image')
      .getElementsByTagName('li');
    for (let i = 0; i < images.length; i++) {
      if (i !== selectedItem) {
        images[i].style.display = 'none';
      } else {
        images[i].style.display = 'block';
      }
    }
  };
}
