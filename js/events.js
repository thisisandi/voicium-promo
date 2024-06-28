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
      sliderContainer.classList.toggle('small-slider');
});

    // кастомный список выбора мероприятия при регистрации
    let customSelects = document.querySelectorAll('.customSelectContainer');

    customSelects.forEach(function (customSelect) {
        let select = customSelect.querySelector('.customSelect');
        let selected = customSelect.querySelector('.selectSelected');
        let items = customSelect.querySelector('.select-items');
    
        items.innerHTML = '';

        Array.from(select.options).forEach(function (option, index) {
            if (index > 0) {
                let item = document.createElement('div');
                item.textContent = option.textContent;
                item.addEventListener('click', function () {
                    select.selectedIndex = index;
                    selected.textContent = option.textContent;
                    selected.classList.add('selected-item'); 
                    items.classList.add('select-hide');
                    selected.classList.remove('select-arrow-active');
                    selected.classList.remove('no-arrow'); 
                    selected.classList.add('no-arrow');
                });
                items.appendChild(item);
            }
        });
    
        selected.addEventListener('click', function () {
            items.classList.toggle('select-hide');
            selected.classList.toggle('select-arrow-active');
            if (!items.classList.contains('select-hide')) {
                selected.classList.remove('no-arrow');
            }
        });
        
        // обработчик клика за пределами для закрытия окна регистрации
        document.addEventListener('click', function (e) {
            if (!e.target.matches('.selectSelected')) {
                let selectItems = document.querySelectorAll('.select-items');
                let selectedItems = document.querySelectorAll('.selectSelected');
    
                selectItems.forEach(function (items) {
                    items.classList.add('select-hide');
                });
    
                selectedItems.forEach(function (selected) {
                    selected.classList.remove('select-arrow-active');
                });
            }
        });
    });   

    // получение окна регистрации и его элементов 
    let modal = document.getElementById('registrationModal');
    let button = document.getElementById('registrationButton');
    let closeButton = document.querySelector('.close');

    // функция открытия окна
    function openModal() {
        modal.classList.add('show'); 
    }

    // функция закрытия окна
    function closeModal() {
        modal.classList.remove('show');
    }

    // обработчик клика по кнопке регистрации для открытия окна
    button.addEventListener('click', openModal);

    // обработчик клика для закрытия окна
    closeButton.addEventListener('click', function () {
        modal.classList.remove('show'); 
        setTimeout(closeModal, 500); 
    });

    // обработчик клика за пределами окна для его закрытия
    document.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.classList.remove('show');
            setTimeout(closeModal, 500);
        }
    });

// получение кнопки отправки, содержимого окна регистрации и благодарственного сообщения
let submit = document.getElementById('submit');
let registrationContent = modal.querySelector('.modalContent');
let thankYouMessage = document.createElement('p');
thankYouMessage.innerHTML = 'спасибо за регистрацию!<br>билеты для входа были отправлены на вашу электронную почту.';
thankYouMessage.classList.add('thank-you-message');

// отображение благодарственного сообщения при клике на кнопку отправки
function showThankYouMessage(event) {
    event.preventDefault(); 
    registrationContent.innerHTML = '';
    registrationContent.appendChild(thankYouMessage); 
}

submit.addEventListener('click', showThankYouMessage);
});