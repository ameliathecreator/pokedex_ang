const carouselImages = document.querySelector('.slider_images');
const carouselButtons = document.querySelectorAll('.slider_button');
const numberOfImages = document.querySelectorAll('.slider_images img').length;
let imageIndex = 1;
let translateX = 0;

carouselButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'previous') {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX += 300;
      }
    } else {
      if (imageIndex !== numberOfImages) {
        imageIndex++;
        translateX -= 300;
      }
    }
  });
});

//nie dziala hehe