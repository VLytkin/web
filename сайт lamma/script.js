                                            //Фокус на начале страницы

//window.onload = function(){
//	window.scrollTo(0,0);
//};

											//Ссылки

const navLinks = document.querySelectorAll('.menu__item, .navigation_footer', 'menu-burger__item');
navLinks.forEach(link => {
link.addEventListener('click', (event) => {
event.preventDefault();//Отменяем переход по ссылкам
const targetId = link.getAttribute('href');// Получаем значение атрибута "href" ссылок
const targetElement = document.querySelector(targetId);//Находим элемент, к которому нужно прокрутить
targetElement.scrollIntoView({behavior: 'smooth'});//Настраиваем плавную прокрутку к нужному элементу
	});
});



											// Кнопка "Заказать"
function redirectTo(url){
	window.location.href = url;
}

                                            // Слайдер "Услуги"


let itemservice = document.querySelectorAll('.item_service');//созд переменную,в которую вложили все наши слайды
let b = 0;//созд счетчик,изначально равный нулю

//document.querySelector('.slider').onclick = go;//повесели клик на .slider,вызывающий функцию "go"

function service() {
  for (let i =0; i<itemservice.length; i++) {
      itemservice[i].classList.add('opacity_service0');//присваеваем масиива новый класс .opacity0
      }
      itemservice[b].classList.remove('opacity_service0');//удаляем у текущего блока класс opacity0
}

service();

document.querySelector('.btn_item_service_up').onclick = function() {
  if (b - 1 == -1) {
    b = itemservice.length - 1 ;
  }
  else {
    b--;
  }
  service();
};
document.querySelector('.btn_item_service_down').onclick = function() {
  if (b + 1 == itemservice.length) {
    b = 0 ;
  }
  else {
    b++;
  }
  service();
};


									// Слайдер "Портфолио"


let item = document.querySelectorAll('.item');//созд переменную,в которую вложили все наши картинки
let current = 0;//созд счетчик,изначально равный нулю

//document.querySelector('.slider').onclick = go;//повесели клик на .slider,вызывающий функцию "go"

// точки
function updateDots() {
	const dots = document.querySelectorAll('.dot_portfolio');
	for (const dot of dots) {
		dot.classList.remove('active');
	}
	dots[current].classList.add('active');
}

function go() {
  for (let i =0; i<item.length; i++) {
      item[i].classList.add('opacity0');//присваеваем масиива новый класс .opacity0
      }
      item[current].classList.remove('opacity0');//удаляем у текущего блока класс opacity0
	updateDots();
}

go();

document.querySelector('.btn_item_up').onclick = function() {
  if (current - 1 == -1) {
   current = item.length - 1 ;
  }
  else {
    current--;
  }
  go();
};

document.querySelector('.btn_item_down').onclick = function() {
  if (current + 1 == item.length) {
    current = 0 ;
  }
  else {
    current++;
  }
  go();
};

// Добавьте обработчики клика на точки для прокрутки слайдов:
const dotsPortfolio = document.querySelectorAll('.dot_portfolio');
dotsPortfolio.forEach((dot, index) => {
  dot.onclick = function () {
    current = index;
    go();
  };
});

                                                          // Слайдер "Отзывы"


let itemotzivy = document.querySelectorAll('.item_otzivy');//созд переменную,в которую вложили все наши картинки
let a = 0;//созд счетчик,изначально равный нулю

//document.querySelector('.slider').onclick = go;//повесели клик на .slider,вызывающий функцию "go"

function updateDotsOtzivy() {
	const dots = document.querySelectorAll('.dot_otzivy');
	for (const dot of dots) {
		dot.classList.remove('active');
	}
	dots[a].classList.add('active');
}

function comment() {
  for (let i =0; i<itemotzivy.length; i++) {
      itemotzivy[i].classList.add('opacity_otzivy0');//присваеваем масиива новый класс .opacity0
      }
      itemotzivy[a].classList.remove('opacity_otzivy0');//удаляем у текущего блока класс opacity0
updateDotsOtzivy();
};

comment();

document.querySelector('.btn_item_otzivy_up').onclick = function() {
  if (a - 1 == -1) {
    a = itemotzivy.length - 1 ;
  }
  else {
    a--;
  }
  comment();
};
document.querySelector('.btn_item_otzivy_down').onclick = function() {
  if (a + 1 == itemotzivy.length) {
    a = 0 ;
  }
  else {
    a++;
  }
  comment();
};
// Добавьте обработчики клика на точки для прокрутки слайдов:
const dotsOtzivy = document.querySelectorAll('.dot_otzivy');
dotsOtzivy.forEach((dot, index) => {
  dot.onclick = function () {
    a = index;
    comment();
  };
});

												// Отправка данных из формы "Связаться" в телеграмм

let form = document.querySelector("#fora");
let shading = document.querySelector('.shading');
let responseWindow = document.querySelector('.response_window');
let responseWindowSubtitle = document.querySelector('.response_window_subtitle');
let responseWindowBtn = document.querySelector('.response_window_btn');

// Обработчик события отправки формы
form.addEventListener("submit", form1);

async function form1(event){
event.preventDefault(); // Отмена стандартного поведения формы
  // Получение данных из формы
  let name = form.name.value;
  let email = form.email.value;
	let tel = form.tel.value;

  // Отправка данных в Telegram-бота
	try{
		toggleLoader();
		let response = await fetch(`https://api.telegram.org/bot6031574581:AAGq2ecV0LjAn3w2f0x1q262YBpyOC_0h2w/sendMessage?chat_id=-1001923546671&text=Name: ${name}%0AEmail: ${email}%0Atel: ${tel}`);
			if(!response.ok){
				throw new Error("Ошибка при отправке данных")};
		let data = await response.json();
        setTimeout(() => {
            responseWindowSubtitle.innerText = 'Данные успешно отправлены!\nВ ближайшее время с вами\n обязательно свяжутся!';
			shading.style.display = 'block';
			responseWindow.style.display = 'block';
		},300)
		form.reset();
	}catch(error){
		console.error(error.message);
setTimeout(() =>{
		shading.style.display = 'block';
		responseWindow.style.display = 'block';
		responseWindowSubtitle.innerText = 'При  отправке данных произошла ошибка!';
		responseWindow.style.height = '210px';
	}, 300);
		form.reset();
	}finally{
		toggleLoader();
		};


    responseWindowBtn.onclick = () => {
        setTimeout(() => {
            shading.style.display = 'none';
            responseWindow.style.display = 'none';
        }, 300);
    };
function toggleLoader() {
	let form = document.getElementById('loader');
	form.classList.toggle('hidden');
};


function checkValidity(event) { // Функция для проверки валидности формы при вводе данных
  const formNode = event.target.form;
  const isValid = formNode.checkValidity();

  formNode.querySelector('button').disabled = !isValid;
};

form.addEventListener('input', checkValidity); // Обработчик ввода данных в форму

};


											// Отправка данных из формы "Вопросы" на сервер


let questionsShading = document.querySelector('.questions_shading');
let questionsResponseWindow = document.querySelector('.questions_response_window');
let questionsResponseWindowSubtitle = document.querySelector('.questions_response_window_subtitle');
let myForm = document.querySelector('.questions_osnova_form_forma');
let questionsResponseWindowBtn = document.querySelector('.questions_response_window_btn');

myForm.addEventListener('submit', clear);

async function clear(event){
	event.preventDefault();

	let name = myForm.name.value;
	let tel = myForm.tel.value;
	let message = myForm.message.value;

		try{
			let response = await fetch(`https://api.telegram.org/bot6031574581:AAGq2ecV0LjAn3w2f0x1q262YBpyOC_0h2w/sendMessage?chat_id=-1001923546671&text=Name: ${name}%0ATel: ${tel}%0AMessage: ${message}`);
				if (!response.ok){
			throw new Error ("Ошибка при отправки данных");
				}
			let data = await response.json();
			setTimeout(() =>{
				questionsResponseWindowSubtitle.innerText = 'Данные успешно отправлены!\nВ ближайшее время с вами\n обязательно свяжутся!';
				questionsShading.style.display = 'block';
				questionsResponseWindow.style.display = 'block';
				myForm.reset();
			},300);
		}catch(error){
			console.error(error.message);
			setTimeout(()=>{
				questionsShading.style.display = 'block';
				questionsResponseWindow.style.display = 'block';
				questionsResponseWindowSubtitle.innerText = 'При  отправке данных произошла ошибка!';
				questionsresponseWindow.style.height = '210px';
			},300);
    };

		questionsResponseWindowBtn.onclick = () => {
				setTimeout(()=>{
					questionsShading.style.display = 'none';
					questionsResponseWindow.style.display = 'none';
				},300)
		};

		function checkValidityQuestions(event) { // Функция для проверки валидности формы при вводе данных
			const formNodeQuestions = event.target.form;
			const isValidQuestions = formNodeQuestions.checkValidity();
			formNodeQuestions.querySelector('button').disabled = !isValidQuestions;
		};

		myForm.addEventListener('input',checkValidityQuestions);
};


					      			//Кнопка "Заказать" в услугах

let serviceForm = document.querySelector('.service_form');
let but = document.querySelectorAll('.sevice_osnova_packet_price_button');
let serviceShading = document.querySelector('.service_shading');
let serviceResponseWindow = document.querySelector('.service_response_window');
let serviceResponseWindowSubtitle = document.querySelector('.service_response_window_subtitle');
let serviceResponseWindowBtn = document.querySelector('.service_response_window_btn');

but.forEach((item) => {
	item.addEventListener('click',() =>{
		setTimeout(()=>{
			serviceShading.style.display = "block";
			serviceForm.style.display = "block";
		}, 300);
	});
});
						//Отправка данных из формы "Заказать" на сервер


serviceForm.addEventListener('submit',product); // Обработчик ввода данных в форму

async function product (event){
	event.preventDefault();

	let name = serviceForm.name.value;
	let email = serviceForm.email.value;
	let tel = serviceForm.tel.value;
	serviceForm.style.display = 'none';
	try{
	let response = await fetch(`https://api.telegram.org/bot6031574581:AAGq2ecV0LjAn3w2f0x1q262YBpyOC_0h2w/sendMessage?chat_id=-1001923546671&text=Name: ${name}%0AEmail: ${email}%0Atel: ${tel}`);
		if (!response.ok){
				throw new Error("Ошибка при отправке данных")
			};
		let data = response.json();
		setTimeout(()=>{
			serviceResponseWindowSubtitle.innerText = 'Данные успешно отправлены!\nВ ближайшее время с вами\n обязательно свяжутся!'
			serviceResponseWindow.style.display = 'block';
			serviceForm.reset();
		},300);
	}catch{
		console.error(error.message);
		setTimeout(()=>{
			serviceResponseWindowSubtitle.innerText = 'При отправке данных произошла ошибка!';
			serviceResponseWindow.style.display = 'block';
		},300);
	};
	function checkValidityService(event) { // Функция для проверки валидности формы при вводе данных
			const formNodeService = event.target.form;
			const isValidService = formNodeService.checkValidity();
			formNodeService.querySelector('button').disabled = !isValidService;
		};

		serviceForm.addEventListener('input',checkValidityService);
};

	serviceResponseWindowBtn.onclick = () =>{
		setTimeout(()=>{
			serviceShading.style.display = 'none';
			serviceResponseWindow.style.display = 'none';
		},300);
	};

											//Скролл наверх страницы

let Up = document.querySelector('.up_img');
Up.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
});
