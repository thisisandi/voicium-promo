document.addEventListener('DOMContentLoaded', function () {
  // получение элементов навигации
  let sliderContainer = document.getElementById('sliderContainer');
  let sliderToggle = document.getElementById('sliderToggle');
  let btns = document.getElementById('buttons');

// переход на главную страницу при клике на кнопку "домой"
document.getElementById('home').addEventListener('click', function() {
  window.location.href = '../index.html';
});

// переключение слайдера и видимости кнопок навигации
sliderToggle.addEventListener('click', function (event) {
  event.stopPropagation();
  buttons.classList.toggle('hidden');
  sliderToggle.classList.toggle('moved');
  sliderContainer.classList.toggle('smallSlider');
});

  // получение размытого текста
  let blurredEndParagraphs = document.querySelectorAll('.blurredend');
  let blurredParagraphs = document.querySelectorAll('.blurred');
  
  // обработчик прокрутки окна
  window.addEventListener('scroll', () => {
    handleBlurredEnd(blurredEndParagraphs);
    handleBlurred(blurredParagraphs);
  });

// функция для обработки текста в конце
function handleBlurredEnd(elements) {
  let windowHeight = window.innerHeight;
  let scrollPosition = window.scrollY + windowHeight;
  
  elements.forEach(paragraph => {
    let paragraphPosition = paragraph.offsetTop + paragraph.offsetHeight;
  
    // переключение классов текста в зависимости от позиции прокрутки
    if (scrollPosition >= paragraphPosition) {
      paragraph.classList.remove('blurred');
      paragraph.classList.add('visible');
    } else {
      paragraph.classList.add('blurred');
      paragraph.classList.remove('visible');
    }
  });
}

// функция для обработки текста
function handleBlurred(elements) {
  let windowHeight = window.innerHeight;
  let scrollPosition = window.scrollY + windowHeight / 2;
  
  elements.forEach(paragraph => {
    let paragraphPosition = paragraph.offsetTop;
    let distanceFromMiddle = Math.abs(paragraphPosition - scrollPosition);
    
    // переключение классов текста в зависимости от расстояния до середины окна
    if (distanceFromMiddle < windowHeight / 4) {
      paragraph.classList.remove('blurred');
      paragraph.classList.add('visible');
    } else {
      paragraph.classList.add('blurred');
      paragraph.classList.remove('visible');
    }
  });
  }
});