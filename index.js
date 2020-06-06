
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

recognition.interimResults = true;

recognition.lang = 'en-US';

var p = document.createElement('p');

var words = document.querySelector('.words');

words.appendChild(p);


recognition.addEventListener('result', function (event) {
  p.textContent = Array
    .from(event.results)
    .map(function (results) {
      return results[0];
    })
    .map(function (results) {
      return results.transcript;
    })
    .join('');


  if(event.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
  }
});


recognition.addEventListener('end', recognition.start);

recognition.start();