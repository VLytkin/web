let todoForm = document.querySelector('.todo');
let btn = document.querySelector('.btn');
let input = document.querySelector('.todo_input');
let todoList = document.querySelector('.todo_list');
let btnDelete = document.querySelector('.btn_delete');
let listItem = document.querySelectorAll('.list_item');
let btnRemove = document.querySelector('.btn_remove');

todoForm.addEventListener('input', () => {
	console.log(input.value);
});

todoList.addEventListener('click', (event)=>{
	if(event.target.tagName==="LI"){
		event.target.classList.toggle('selected');
		
		let newSpan = document.createElement("span");
		newSpan.innerText="✓";
		newSpan.style.paddingLeft = '3px';
		if(event.target.classList.contains('selected')){
			event.target.append(newSpan);
		}else{
			let span = event.target.querySelector('span');
			if(span){
			event.target.removeChild(span);
			}
		}
	}
});

todoForm.addEventListener('submit',(event) => {
	event.preventDefault();
	let text=input.value;
	let li = `<li class = "list_item">${text}</li>`;
	if(text != ""){
	todoList.insertAdjacentHTML('beforeEnd',li);
	input.value = "";
	todoForm.focus();
	};
});

btnDelete.addEventListener('click', () => {
	console.log("click");
	let run = todoList.querySelectorAll('.list_item');
	run.forEach((item)=>{
		if(item.classList.contains('selected')){
			item.remove();
		}
	})
});

btnRemove.addEventListener('click', ()=>{
	todoList.innerHTML = '';
})

let body = document.body;
let image = ["1.jpg","2.jpg","3.jpg","4.jpg"];
let source = 1;

body.style.transition='background-image 1s ease-in-out';

setInterval(()=>{
body.style.backgroundImage='url("img/' + image[source] + '")';
source++;
if(source>=image.length){
	source=0;
	};
},2000);