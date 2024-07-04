let btn = document.querySelector('.btn');
let img = document.querySelector("img");
let imgArray = ["img2.jpg","img3.jpg","img4.jpg"];
let source = 1;


btn.onclick = ()=>{
  img.setAttribute("src","img/" + imgArray[source]);
  source++;
    btn.innerText = "Давай далее!"
  if(source >= imgArray.length){
    btn.innerText = "Сменить картинку";
    source=0;
  }else {
    btn.innerText = "Давай далее!"
  };
};
