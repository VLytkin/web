let numberOne = document.querySelector('.number1');
let numberTwo = document.querySelector('.number2');
let btnAddition = document.querySelector('.addition');
let btnSubtraction = document.querySelector('.subtraction');
let btnMultiplication = document.querySelector('.multiplication');
let btnDivision = document.querySelector('.division');
let btnResult = document.querySelector('.btn_result');
let resultElement =  document.querySelector('.result');
let action = '';

btnAddition.onclick = ()=>{
	action = '+';
};

btnSubtraction.onclick = ()=>{
	action = '-';
};

btnMultiplication.onclick = ()=>{
	action = '*';
};

btnDivision.onclick = ()=>{
	action = '/';
};

 

 btnResult.onclick = ()=>{
	 const resultValue = go(numberOne,numberTwo,action);
	 printResult(resultValue);
 };
 	 	 
 function go(inp1,inp2,actionSymbol){
	 const num1 = Number(inp1.value);
	 const num2 = Number(inp2.value);
	  if(actionSymbol == '+'){ 
		 return num1 + num2;
	 }else if(actionSymbol == '-'){
		return num1 - num2;
		}else if (actionSymbol == '*'){
		  return num1*num2;
			}else if(actionSymbol == '/'){
		     return num1/num2;			
				} 
 }
 
  function printResult(result){
	 if (result<0){
		 resultElement.style.color = 'red';
	 }else if(result>0){
			 resultElement.style.color = 'green';
		 }
		 resultElement.textContent = result;
		  numberOne.value = '';
		  numberTwo.value = '';
	 }
 