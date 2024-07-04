let image = document.querySelector('.image');

async function randomCat(){
let response = await fetch("https://cataas.com/cat?json=true");
let data = await response.json();
let imageURL = data.url;
let fullURL = "https://cataas.com" + imageURL;
image.src = fullURL;
};
image.addEventListener('click', randomCat);

//подключение карты
var map = L.map('map').setView([58.00758, 56.26208], 17); //создание объекта карты map при помощи метода L.map и заддание начальных координат карты при помощи метода SetView

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
  maxZoom: 19
}).addTo(map); //Добавление слоя карты к созданному объекту map при помощи метода addTo

var marker = L.marker([58.00758, 56.26208]).addTo(map); //Создание объекта marker и задание его координат при помощи метода L.marker и добавление его на объект map при помощи метода addTo
var popupContent = '<div class="name_organization">Lamma Creative Studio</div>' +
                   '<div class="adress_organisation">Пермь,Революции 13к.1,ТРК "Семья"</div>' +
                   '<a class="tel_organisation" href="tel:+79065890386">+7(906)589-03-86</a>'
marker.bindPopup(popupContent).openPopup(); //Создание всплывающего меню объекту marker при помощи метода BindPopup (задает содержимое всплывающего окна) и метода OpenPopup(вызывается после метода BindPopup b вызывает всплывающее окно)
