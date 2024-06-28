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

// переход на страницу корзины при клике на корзину
document.getElementById('cartContainer').addEventListener('click', function() {
    // сохранение данных корзины в локальном хранилище в виде строки
    localStorage.setItem("cart", cartConverter());
    window.location.href = './cart.html';
});

// функция для преобразования данных корзины в строку
function cartConverter() {
    let cartConv = ""
    for (elem in cart) {
        cartConv += `$$$ ${cart[elem]}`
    }
    return cartConv
}

// переходы на страницы при кликах на кнопки навигации
btns.addEventListener("click", (e) => {
    let linkLocation = "";
    let time = 0;
    if (e.target.id == "space") {
        linkLocation = "../space.html";
    } else if (e.target.id == "book") {
        linkLocation = "../book.html";
    } else if (e.target.id == "shop") {
        linkLocation = "../shop.html";
    } else if (e.target.id == "record") {
        linkLocation = "../record.html";
    } else if (e.target.id == "events") {
        linkLocation = "../events.html";
    } else if (e.target.id == "about") {
        linkLocation = "../about.html";
    }
    
    // задержка перед переходом на страницу
    setTimeout(() => {fade(linkLocation)}, time)
    
    // функция перехода на новую страницу
    function fade(page) {
        window.location = linkLocation;
      }
    })

    // получение списка товаров и их цен
    const items = {1: ["базовый свитшот с лого", 2999], 
    2:["футболка с принтом", 1999], 
    3: ["шопер с лого", 999], 
    4: ["книга о проекте", 899], 
    5: ["брелоки в ассортименте", 499],
    6: ["кружки в ассортименте", 699]
}
    // пустое содержимое корзины по умолчанию
    let cart = {}; 
    let itemCount = 0;
    const dataFile = "data.txt";

    // получение плюсов
    const pluses = document.querySelectorAll(".plus")
    pluses.forEach((elem) => {
        elem.addEventListener("click", (e) => {
            let n = (elem.className.split(" "))[1].split("").slice(4).join(""); // получение номера элемента из класса
            if (n == 1 || n == 2) {
                let si = sizeComplit(n) // проверка выбранного размера
                 if (si != false) {
                    document.getElementById(`sizes${n}`).style.opacity="1" // установка видимости для выбранного размера
                    document.getElementById(`plus${n}`).style.opacity="1" // установка видимости для плюса
                    cart[n] = [document.getElementById(`name${n}`).textContent,  si, document.getElementById(`price${n}`).textContent] // добавление товара в корзину
                 }

                 else {
                    // если размер не выбран, подсветка красным
                    if (n == 1) {
                        let sizes11 = document.querySelectorAll(".sizeShirt");
                        for (let i = 0; i <= sizes11.length - 1; i++) {
                            sizes11[i].style.backgroundColor="red"
                        }
                        // возвращение исходного цвета после задержки
                         setTimeout(()=> {
                            for (let i = 0; i <= sizes11.length - 1; i++) {
                                sizes11[i].style.backgroundColor="rgba(102, 102, 102, 0.4)"
                            }
                        }, 500);
                    } else {
                        let sizes22 = document.querySelectorAll(".sizeTshirt");
                        for (let i = 0; i <= sizes22.length - 1; i++) {
                            sizes22[i].style.backgroundColor="red"
                        }

                         setTimeout(()=> {
                            for (let i = 0; i <= sizes22.length - 1; i++) {
                                sizes22[i].style.backgroundColor="rgba(102, 102, 102, 0.4)"
                            }
                        }, 500);
                    }
                 }
            } else {
                // если размер не требуется, добавление товара в корзину
                document.getElementById(`plus${n}`).style.opacity="1"
                cart[n] = [document.getElementById(`name${n}`).textContent, document.getElementById(`price${n}`).textContent];
            }
        })
    });

    // обработчик событий для размеров свитшота
    const sizes1 = document.querySelectorAll(".sizeShirt");
    sizes1.forEach((elem) => {
        elem.addEventListener("click", (e) => {
            sizeCheck(elem, 1, sizes1, sizes2)
            elem.classList.add("selectedSize");
            elem.style.backgroundColor="white"
            elem.style.color="black"
            
        })
    });

    // обработчик событий для размеров футболки
    const sizes2 = document.querySelectorAll(".sizeTshirt");
    sizes2.forEach((elem) => {
        elem.addEventListener("click", (e) => {
            sizeCheck(elem, 2)
            elem.classList.add("selectedSize");
            elem.style.backgroundColor="white"
            elem.style.color="black"
        })
    });

    // функция снятия выделения с выбранных размеров
    function sizeCheck(num, gr) {
        if (gr == 1) {
            for (let i = 0; i <= sizes1.length - 1; i++) {
                if (sizes1[i].classList.contains("selectedSize")){
                    sizes1[i].classList.remove("selectedSize")
                    sizes1[i].style.backgroundColor="rgba(102, 102, 102, 0.4)";
                    sizes1[i].style.color="white"
                }
            }
        } else {
            for (let i = 0; i <= sizes2.length - 1; i++) {
                if (sizes2[i].classList.contains("selectedSize")){
                    sizes2[i].classList.remove("selectedSize")
                    sizes2[i].style.backgroundColor="rgba(102, 102, 102, 0.4)";
                    sizes2[i].style.color="white"
                }
            }
        }
    }

    // функция получения выбранного размера
    function sizeComplit(gr) {
        let flag = false;
        if (gr == 1) {
            for (let i = 0; i <= sizes1.length - 1; i++) {
                if (sizes1[i].classList.contains("selectedSize")) {
                    flag = sizes1[i].textContent
                }
            }
        } else {
            for (let i = 0; i <= sizes1.length - 1; i++) {
                if (sizes2[i].classList.contains("selectedSize")) {
                    flag = sizes1[i].textContent
                }
            }
        } 
        return flag
    }    


 const plusButtons = document.querySelectorAll('.plus');
 const allSizes = document.querySelectorAll('.sizes');
 const cartCounter = document.querySelector('.cart-counter');
 
 let counter = 0;

 // обработчик событий для каждого плюса
 plusButtons.forEach((button, index) => {
     button.addEventListener('click', function() {
         const sizes = allSizes[index].querySelectorAll('span');
         let hasSize = false;
         sizes.forEach(size => {
             if (size.classList.contains('selected')) {
                 hasSize = true;
             }
         });
         // если у товара нет размера или был выбран размер, счетчик увеличивается
         if (!sizes.length || hasSize) {
             counter++;
             cartCounter.textContent = counter < 10 ? '0' + counter : counter;
         }
     });
 });
 
 // обработчик событий для выбора размера
 allSizes.forEach(sizes => {
     sizes.addEventListener('click', function(event) {
         sizes.querySelectorAll('span').forEach(size => {
             size.classList.remove('selected');
         });
         if (event.target.tagName === 'SPAN') {
             event.target.classList.add('selected');
         }
     });
 });
 
// обработчик событий для товаров без размеров
 const noSizeCards = document.querySelectorAll('.card:not(:has(.sizes)) .plus');
 noSizeCards.forEach(button => {
     button.addEventListener('click', function() {
         counter++;
         cartCounter.textContent = counter < 10 ? '0' + counter : counter;
     });
 });

// экран загрузки
 window.addEventListener('load', function() {
    let loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
      loadingScreen.classList.add('fade-out');
    }, 100); 

    setTimeout(() => {
      loadingScreen.remove();
    }, 1100); 
  });

   
});
