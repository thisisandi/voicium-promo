document.addEventListener('DOMContentLoaded', function () {
    // получение элементов навигации
    let sliderContainer = document.getElementById('sliderContainer');
    let sliderToggle = document.getElementById('sliderToggle');
    let buttons = document.getElementById('buttons');

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

    // получение номеров комнат на плане
    let placeOne = document.getElementById('placeOne');
    let placeTwo = document.getElementById('placeTwo');
    let placeThree = document.getElementById('placeThree');
    let placeFour = document.getElementById('placeFour');
    
    // функция сброса цветов у номеров комнат на белый
    function resetColors() {
        placeOne.style.color = 'white';
        placeTwo.style.color = 'white';
        placeThree.style.color = 'white';
        placeFour.style.color = 'white';
    }
    
    // функция установки желтого цвета при выборе номера
    function setColor(element) {
        resetColors();
        element.style.transition = 'color 0.5s';
        element.style.color = '#FFBE0B';
    }

    // установка событий клика на номера комнат
    placeOne.addEventListener('click', function() {
        setColor(this);
    });
    
    placeTwo.addEventListener('click', function() {
        setColor(this);
    });
    
    placeThree.addEventListener('click', function() {
        setColor(this);
    });
    
    placeFour.addEventListener('click', function() {
        setColor(this);
    });

    // смена прозрачности при переключении этажей и показ других номеров комнат
    document.getElementById('floorName2').addEventListener('click', function() {
        document.getElementById('floorName1').style.opacity = '0.3';
        document.getElementById('floorName2').style.opacity = '1';

        document.getElementById('placeOne').style.display = 'none';
        document.getElementById('placeTwo').style.display = 'none';
        document.getElementById('placeThree').style.display = 'block';
        document.getElementById('placeFour').style.display = 'block';

        document.querySelector('.firstfloor').style.display = 'none';
        document.querySelector('.secondfloor').style.display = 'block';
    });

    document.getElementById('floorName1').addEventListener('click', function() {
        document.getElementById('floorName1').style.opacity = '1';
        document.getElementById('floorName2').style.opacity = '0.3';

        document.getElementById('placeOne').style.display = 'block';
        document.getElementById('placeTwo').style.display = 'block';
        document.getElementById('placeThree').style.display = 'none';
        document.getElementById('placeFour').style.display = 'none';
        
        document.querySelector('.firstfloor').style.display = 'block';
        document.querySelector('.secondfloor').style.display = 'none';
    });

    // показ рендеров при кликах на соответствующие номера на плане
    document.getElementById('placeOne').addEventListener('click', function() {
        showRoom(1);
    });

    document.getElementById('placeTwo').addEventListener('click', function() {
        showRoom(2);
    });

    document.getElementById('placeThree').addEventListener('click', function() {
        showRoom(3);
    });

    document.getElementById('placeFour').addEventListener('click', function() {
        showRoom(4);
    });

    // функция отображения выбранной комнаты
    function showRoom(roomNumber) {
        // скрытие всех комнат и номеров по умолчанию
        document.querySelectorAll('.room2, .room3, .room4').forEach(room => {
            room.style.display = 'none';
            room.style.zIndex = '1000';
        });
        document.querySelectorAll('.roomName1, .roomName2, .roomName3, .roomName4').forEach(name => name.style.display = 'none');

        // показ выбранной комнаты и ее названия
        if (roomNumber === 2) {
            document.getElementById('room2').style.display = 'block';
            document.getElementById('room2').style.zIndex = '9999';
            document.getElementById('roomName2').style.display = 'block';
        } else if (roomNumber === 1) {
            document.getElementById('room2').style.display = 'none';
            document.getElementById('room3').style.display = 'none';
            document.getElementById('room4').style.display = 'none';
            document.getElementById('overlayBuild').style.display = 'block';
            document.getElementById('overlayBuild').style.zIndex = '9999';
            document.getElementById('roomName1').style.display = 'block';
        } else if (roomNumber === 3) {
            document.getElementById('room2').style.display = 'none';
            document.getElementById('room3').style.display = 'block';
            document.getElementById('room3').style.zIndex = '9999';
            document.getElementById('roomName3').style.display = 'block';
          }  else if (roomNumber === 4) {
            document.getElementById('room3').style.display = 'none';
            document.getElementById('room4').style.display = 'block';
            document.getElementById('room4').style.zIndex = '9999';
            document.getElementById('roomName4').style.display = 'block';
        }
    }
});
