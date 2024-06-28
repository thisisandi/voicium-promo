document.addEventListener('DOMContentLoaded', function() {
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
    sliderContainer.classList.toggle('small-slider');
    });
    
    // получение страниц книги
    let pages = document.querySelectorAll('.page');
    let currentIndex = 0;
  
    // функция показа следующей страницы
    function showNextPage() {
        if (currentIndex < pages.length - 1) {
            currentIndex++;
            pages[currentIndex].style.display = 'block'; 

        // добавление поворота для страниц
        if (currentIndex % 3 === 1) {
            pages[currentIndex].classList.add('rotate20');
        } else if (currentIndex % 3 === 2) {
            pages[currentIndex].classList.add('rotateNeg20');
        }
        }
    }
    // обработчик клика для страниц
    pages.forEach(function(page, index) {
    page.addEventListener('click', function() {
        showNextPage();
    });
    });

    //показ первой страницы
    pages[currentIndex].style.display = 'block';
    
});
