let btn = document.querySelectorAll('.btn');

btn.forEach((item) => {
  item.addEventListener('click',function () {

    console.log(this.nextElementSibling);

    if(this.nextElementSibling.classList.toggle("hidden")){
      item.innerText = "Открыть";
    }else{
      item.innerText = "Закрыть";
    };
  });
});
