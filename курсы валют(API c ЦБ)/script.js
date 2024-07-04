let exchangeUSD = document.querySelector('.USD');
let exchangeEUR = document.querySelector('.EUR');
let USD;
let EUR;
exchangeUSD.innerText = 0;
exchangeEUR.innerText = 0;
async function exchangeMoney(){
const response = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
const data = await response.json();
USD = data.Valute.USD.Value;
EUR = data.Valute.EUR.Value;
exchangeUSD.innerText = USD;
exchangeEUR.innerText = EUR;
};

let btnExchange = document.querySelector('.btn');
//btnExchange.onclick = exchangeMoney;

btnExchange.addEventListener('click',exchangeMoney);
btnExchange.addEventListener('click',exchangeMettal);
let exchangeGold = document.querySelector('.Gold');
let exchangeSilver = document.querySelector('.Serebro');
exchangeGold.innerText = 0;
exchangeSilver.innerText = 0;
 async function exchangeMettal(){
   const response = await fetch ("https://api.freegoldprice.org/request.cfm?key=BF11C31624E765B4500F49301D9B660C65014574&action=GSJ")
   const data = await response.json();
   let Gold = data.GSJ.Gold.USD.Ask;
   let Silver = data.GSJ.Silver.USD.Ask;
   const GoldGm = (Gold/31.1034768)*USD;
   const SilverGm = (Silver/31.1034768)*USD;
   exchangeGold.innerText = GoldGm;
   exchangeSilver.innerText = SilverGm;
 };

let image = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg"]
let body = document.querySelector('body');
let source = 1;
body.style.transition = 'background-image 1s';
setInterval(()=>{
  body.style.backgroundImage = "url('img/" + image[source] + "')";
  source++;
  if (source >= image.length){
    source = 0;
  };
},2000);
