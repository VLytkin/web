let numberOne = document.querySelector('.number1');
let numberTwo = document.querySelector('.number2');
let btnAddition = document.querySelector('.addition');
let btnSubtraction = document.querySelector('.subtraction');
let btnMultiplication = document.querySelector('.multiplication');
let btnDivision = document.querySelector('.division');
let btnResult = document.querySelector('.btn_result');
let resultElement =  document.querySelector('.result');
let action = '';

btnAddition.onclick=()=>action='+';
btnSubtraction.onclick=()=>action='-';
btnMultiplication.onclick=()=>action='*';
btnDivision.onclick=()=>action='/';

btnResult.onclick=()=>{
	const num1 = Number(numberOne.value);
	const num2 = Number(numberTwo.value);

	if(action == '+'){
		resultElement.textContent = num1+num2;
	}else if(action == '-'){
		resultElement.textContent = num1-num2;
	}else if(action == '*'){
		resultElement.textContent = num1*num2;
	}else if(action == "/"){
		resultElement.textContent = num1/num2;
	}
}
