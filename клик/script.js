let btn = document.querySelector('.btn');
let message = document.querySelector('.message');

btn.addEventListener('click', () => {
  if(message.classList.toggle('hidden')){
    btn.innerText = "Открыть";
  }else{
      btn.innerText = "Закрыть";
  }
});
