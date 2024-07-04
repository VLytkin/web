let image = ["img1.png", "img2.png", "img3.png"];
let source = 0;
let background = document.querySelector('.img_slider');

background.style.transition = 'background-image 1s';

setInterval(()=>{
  background.style.backgroundImage = "url('img/" + image[source] + "')";
  source++;
  if (source >= image.length) {
    source = 0;
  };
},2000);
