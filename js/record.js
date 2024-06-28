document.addEventListener('DOMContentLoaded', function () {
    // получение элементов навигации
    let sliderContainer = document.getElementById('slider-container');
    let sliderToggle = document.getElementById('slider-toggle');
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

    // получение элементов
    let microoo = document.querySelector('.microoo');
    let counterElement = document.getElementById('counter');
    let isRecording = false;
    let timer = null;
    let mediaRecorder = null;
    let chunks = [];
    let waveImages = document.querySelectorAll('.wave1, .wave2, .wave3, .wave1r, .wave2r, .wave3r');
    let nextButton = document.getElementById('nextbutton2');
    let pageRecord = document.querySelector('.pageRecord');
    let pageListen = document.querySelector('.pageListen');
    let audioPlayer = document.getElementById('audioPlayer');
    let progressBar = document.getElementById('progressBar');
    let playa = document.querySelector('.playa');
    let isPlaying = false;
    
     // линейные волны скрыты по умолчанию
    waveImages.forEach(image => {
      image.style.opacity = '0';
    });
    
    // смена цвета обводки у микрофона при записи
    microoo.addEventListener('click', async function() {
      microoo.style.borderColor = isRecording ? 'white' : '#B61427';
    
      if (!isRecording) {
        try {
          // получение доступа к микрофону
          let stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          
          // создание нового MediaRecorder для записи аудио
          mediaRecorder = new MediaRecorder(stream);
          // сохранение записи в массив chunks
          mediaRecorder.ondataavailable = function(e) {
            chunks.push(e.data);
          };

          mediaRecorder.start();
          let counter = 0;
          let startTime = new Date().getTime();
          // обновление счетчика времени каждую секунду
          timer = setInterval(function() {
            let currentTime = new Date().getTime();
            counter = Math.floor((currentTime - startTime) / 1000);
            let hours = Math.floor(counter / 3600);
            let minutes = Math.floor((counter % 3600) / 60);
            let seconds = counter % 60;
            // обновление текстового содержимого счетчика времени
            counterElement.textContent = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
          }, 1000);
          
          // показ линейных волн во время записи
          waveImages.forEach(image => {
            image.style.opacity = '1';
          });
    
          isRecording = true;
        // обработка ошибки при получении доступа к микрофону
        } catch (err) {
          console.error('Ошибка при получении доступа к микрофону:', err);
        }
      } else {
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
          mediaRecorder.stop();
          mediaRecorder.onstop = function() {
            let blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
            let audioURL = URL.createObjectURL(blob);
            audioPlayer.src = audioURL;
            chunks = [];
    
            if (isPlaying) {
              audioPlayer.play();
              isPlaying = false;
            }
          };
        }
        
        // остановка таймера
        clearInterval(timer);
        timer = null;
        isRecording = false;
        chunks = [];
        
        // возвращение цвета обводки микрофона на белый
        microoo.style.borderColor = 'white';
    
        // скрытие линейных волн
        waveImages.forEach(image => {
          image.style.opacity = '0';
        });
        
        // показ кнопки "далее"
        nextButton.style.display = 'block';
      }
    });
    
    // обработка клика по кнопке "далее", скрытие страницы записи и показ страницы прослушивания записи
    nextButton.addEventListener('click', function() {
      pageRecord.style.display = 'none';
      pageListen.style.display = 'flex';
    });
    
    // обработка клика по кнопке "плей"
    playa.addEventListener('click', function() {
        if (chunks.length === 0 && audioPlayer.src !== '') {
          if (audioPlayer.paused) {
            audioPlayer.play();
          } else {
            audioPlayer.pause();
          }
          // обновление ползунка в зависимости от времени воспроизведения
          audioPlayer.addEventListener('timeupdate', function() {
            let percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            progressBar.style.width = percentage + '%';
            progressBar.classList.add('smooth-transition');
          });
        // смена состояния воспроизведения
        } else {
          isPlaying = !isPlaying;
          if (isPlaying) {
            audioPlayer.play();
          } else {
            audioPlayer.pause();
          }
        }
      });
});
  