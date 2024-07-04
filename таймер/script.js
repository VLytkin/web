let timer = document.querySelector('#timer');
let Start = document.querySelector('.Timer_start');
let Pause = document.querySelector('.Timer_pause');
let Stop = document.querySelector('.Timer_stop');
let count = 0;
let Interval;

Start.onclick = function(){
  Interval = setInterval(function(){
  count++;
  timer.innerText = count;
  },1000);
};

Pause.onclick = function(){
  clearInterval(Interval);
};

Stop.onclick = function() {
  clearInterval(Interval);
  count = 0;
  timer.innerText = count;
};
