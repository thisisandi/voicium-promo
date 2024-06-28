document.addEventListener('DOMContentLoaded', function () {
    // получение элементов навигации
    let sliderContainer = document.getElementById('sliderContainer');
    let sliderToggle = document.getElementById('sliderToggle');
    let btns = document.getElementById('buttons');

// переход на главную страницу при клике на кнопку "домой"
document.getElementById('home').addEventListener('click', function() {
    window.location.href = '../index.html';
});

// переход на страницу магазина при клике на кнопку "назад"
document.getElementById('back').addEventListener('click', function() {
    window.location.href = '../shop.html';
});

// переключение слайдера и видимости кнопок навигации
sliderToggle.addEventListener('click', function (event) {
    event.stopPropagation();
    buttons.classList.toggle('hidden');
    sliderToggle.classList.toggle('moved');
    sliderContainer.classList.toggle('small-slider');
});

// получение данных корзины из локального хранилища и разбивка их на массивы
let cart = localStorage.getItem('cart').split("$$$");
    let cartFinal = [];
    for (let i = 1; i < cart.length; i++) {
        cartFinal.push(cart[i].split(","));
    }

    // получение контейнера для вывода товаров
    let cartContainer = document.querySelector('.cart-items');

    // создание элемента для каждого товара и добавление в контейнер
    for (let j = 0; j < cartFinal.length; j++) {
        const div = document.createElement('div');
        div.classList.add('cartItem'); 
        cartContainer.append(div);

        // добавление текста о каждом товаре в элемент
        for (let u = 0; u < cartFinal[j].length; u++) {
            const p = document.createElement('p');
            p.textContent = `${cartFinal[j][u]}`;
            p.classList.add('item');
            div.append(p);
        }
    }

    // получение элемента для отображения общей суммы заказа
    const total = document.querySelector('.total');
    total.textContent = `${sumPrice(cartFinal)} ₽`;

    // функция для подсчета общей суммы заказа
    function sumPrice(aaa) {
        let count = 0;
        for (let j = 0; j < aaa.length; j++) {
            let lastItem = aaa[j][aaa[j].length - 1];
            count += parseInt(lastItem);
        }
        return count;
    }
});
