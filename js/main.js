document.addEventListener('DOMContentLoaded', function () {
    // получение элементов навигации
    let btns = document.getElementById('buttons');
    let sliderContainer = document.getElementById('sliderContainer');
    let sliderToggle = document.getElementById('sliderToggle');

// переход на главную страницу при клике на кнопку "домой"
document.getElementById('home').addEventListener('click', function() {
    window.location.href = '../index.html';
  });
  

        // Обработка кликов на кнопках навигации
        document.getElementById('buttons').addEventListener('click', (e) => {
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                e.preventDefault(); // предотвращаем стандартный переход по ссылке

                let target = e.target.tagName === 'A' ? e.target : e.target.closest('a');
                let linkLocation = target.href;
                let time = 0;

                if (target.id === 'space') {
                    time = 2000;
                    document.getElementById('overlayBuild').classList.add('active');
                    document.getElementById('overlayBuild2').classList.add('active');
                } else if (target.id === 'book') {
                    time = 3000;
                    document.getElementById('overlayBook').classList.add('active');
                } else if (target.id === 'about') {
                    time = 2000;
                    document.getElementById('overlay').classList.add('active');
                }

                // Задержка перед переходом на страницу
                setTimeout(() => {
                    window.location.href = linkLocation;
                }, time);
            }
        });

// переключение слайдера и видимости кнопок навигации
sliderToggle.addEventListener('click', function (event) {
    event.stopPropagation();
    buttons.classList.toggle('hidden');
    sliderToggle.classList.toggle('moved');
    sliderContainer.classList.toggle('smallSlider');
});
});