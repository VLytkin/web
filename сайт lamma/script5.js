                                // �������� ������ �� ����� "���������" �� ������



const form = document.querySelector('#fora'); // ����� ����� �� ��������������

form.addEventListener('submit', async (event) => { // ���������� �������� �����
  event.preventDefault(); // ���������� �������� �� ���������

  const formData = new FormData(form); // �������� ������� FormData ��� ������ �����

  async function sendData() { // �������� ������ �� ������
    return await fetch('http://kdenisb.ru:23000/form', {
      mode: 'cors',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(formData)) // �������������� FormData � JS-������
    })
  }

  function toggleLoader() { // ��������/������ ��������� ��������
    const loader = document.getElementById('loader');
    loader.classList.toggle('hidden');
  }

  function onSuccess(formNode) { // ��������� �������� �������� ������
    alert('���� ������ ����������!');
	formNode.querySelectorAll('.input_tell').forEach(element => element.value = '');
    formNode.classList.toggle('hidden');
  }

  function onError(error) { // ��������� ������ ��� �������� ������
    alert(error.message);
  }

  toggleLoader(); // �������� ��������� ��������

  const { status } = await sendData(); // �������� ������ � �������� ������ �� �������
  toggleLoader(); // ������ ��������� ��������

  if (status === 200) { // ���� ����� ������� - ��������
    onSuccess(form); // ����� ����������� �������� �������� ������
  } else {
    onError(error); // ����� ����������� ������ ��� �������� ������
  }
});

function serializeForm(formNode) {                                    //function serializeForm(formNode) { - ���������� ������� serializeForm � ���������� formNode.
  const elements = formNode.elements;								//const elements = formNode.elements; - ��������� �������� elements �� ����������� ������� formNode � ����������� ��� � ���������� elements.
  const data = Array.from(elements).filter(function(item) {			//const data = Array.from(elements) - ������� ����� ������ �� ������� elements � ������� ������������ ������ Array.from � ����������� ��� � ���������� data.
    return !!item.name;												//.filter(function(item) { - ��������� ������ � ��������� ������ ��������, � ������� ���� �������� name. �������� �������� �� ������������� ������� ������� ������ ���������� �������.
  }).map(function(element) {										//return !!item.name; - ������� ���������� true, ���� � �������� ���� �������� name, � false � ��������� ������.
    const name = element.name;										//}).map(function(element) { - ��������� ����� map � ���������������� ������� � ������� ����� ������ ��������. �������� �������� �� ������������� ������� ������� ������ ���������� �������.
    const value = element.value;									//const name = element.name; - ��������� �������� name �� ������� element � ����������� ��� � ���������� name.																//const value = element.value; - ��������� �������� value �� ������� element � ����������� ��� � ���������� value.																//return { name: name, value: value }; - ���������� ����� ������ � ������ name � value.										                        //}); - ��������� ����� ������ map.																//console.log(data); - ������� ������ �������� data � �������.
    return { name: name, value: value };
  });
  console.log(data);
}

function checkValidity(event) { // ������� ��� �������� ���������� ����� ��� ����� ������
    const formNode = event.target.form;
    const isValid = formNode.checkValidity();

    formNode.querySelector('button').disabled = !isValid;
}

form.addEventListener('input', checkValidity); // ���������� ����� ������ � �����




                                        //�������� ������ �� ����� "�������" �� ������

 const myForm = document.querySelector('#myForm'); // ����� ����� �� ��������������
 myForm.addEventListener('input', checkValidityQuestions); // ���������� ����� ������ � �����

 myForm.addEventListener('submit', async (event) => { // ���������� �������� �����
   event.preventDefault(); // ���������� �������� �� ���������

   const formDataMyForm = new FormData(myForm); // �������� ������� FormDataMyForm ��� ������ �����

   async function sendDataMyForm() { // �������� ������ �� ������
     return await fetch('http://kdenisb.ru:23000/form2', {
       mode: 'cors',
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(Object.fromEntries(formDataMyForm)) // �������������� FormDataMyFrom � JS-������
     })
   }

   function toggleLoaderMyForm() { // ��������/������ ��������� ��������
     const loader = document.getElementById('loadermyForm');
     loader.classList.toggle('hiddenmyForm');
   }
   function onSuccessMyForm(formNode) { // ��������� �������� �������� ������
     alert('���� ��������� ����������!');
 	formNode.querySelectorAll('.form_questions').forEach(element => element.value = '');
 	formNode.classList.toggle('hiddenmyForm');
   }

   function onErrorMyForm(error) { // ��������� ������ ��� �������� ������
     alert(error.message);
   }

   toggleLoaderMyForm(); // �������� ��������� ��������

   const { status } = await sendDataMyForm(); // �������� ������ � �������� ������ �� �������
   toggleLoaderMyForm(); // ������ ��������� ��������

   if (status === 200) { // ���� ����� ������� - ��������

 	onSuccessMyForm(myForm); // ����� ����������� �������� �������� ������
   } else {
     onErrorMyForm(error); // ����� ����������� ������ ��� �������� ������
   }
 });

 function serializeForma(formNode) {                                    //function serializeForm(formNode) { - ���������� ������� serializeForm � ���������� formNode.
   const elements = formNode.elements;								//const elements = formNode.elements; - ��������� �������� elements �� ����������� ������� formNode � ����������� ��� � ���������� elements.
   const data = Array.from(elements).filter(function(item) {			//const data = Array.from(elements) - ������� ����� ������ �� ������� elements � ������� ������������ ������ Array.from � ����������� ��� � ���������� data.
     return !!item.name;												//.filter(function(item) { - ��������� ������ � ��������� ������ ��������, � ������� ���� �������� name. �������� �������� �� ������������� ������� ������� ������ ���������� �������.
   }).map(function(element) {										//return !!item.name; - ������� ���������� true, ���� � �������� ���� �������� name, � false � ��������� ������.
     const name = element.name;										//}).map(function(element) { - ��������� ����� map � ���������������� ������� � ������� ����� ������ ��������. �������� �������� �� ������������� ������� ������� ������ ���������� �������.
     const value = element.value;									//const name = element.name; - ��������� �������� name �� ������� element � ����������� ��� � ���������� name.																//const value = element.value; - ��������� �������� value �� ������� element � ����������� ��� � ���������� value.																//return { name: name, value: value }; - ���������� ����� ������ � ������ name � value.										                        //}); - ��������� ����� ������ map.																//console.log(data); - ������� ������ �������� data � �������.
     return { name: name, value: value };
   });
   console.log(data);
 }

function checkValidityQuestions(event) { // ������� ��� �������� ���������� ����� ��� ����� ������
    const formNodeQuestions = event.target.form;
    const isValidQuestions = formNodeQuestions.checkValidity();

    formNodeQuestions.querySelector('button').disabled = !isValidQuestions;



                                                        //�������� ������ �� ����� "�������" �� ������

    let serviceFormButton = document.querySelector('.service_form_button');
    let serviceOsnova = document.querySelector('.service_osnova');
    let serviceTitle = document.querySelector('.service_title');
    let SliderService = document.querySelector('.slider_wrapper_service');
    let sale = document.querySelector('.service_form');
    let but = document.querySelectorAll('.sevice_osnova_packet_price_button');
    const labelService = document.querySelectorAll('.label_service');
    const inputService = document.querySelectorAll('.input_service');
    but.forEach((item) => {
        item.addEventListener('click', () => {
            serviceOsnova.classList.add('hide');
            serviceTitle.classList.add('hide');
            SliderService.classList.add('hide');

            setTimeout(() => { //����� ������������ ������ hide ���������� ������� ��������, ������ ���������� 1 �������

                sale.style.display = 'block';
                sale.classList.add('formDive');
            }, 1000);
        });
    });
    //�������� ������ �� ����� "��������" �� ������



    sale.addEventListener('input', checkValidityService); // ���������� ����� ������ � �����

    let messageBlock;

    const ServiceFormData = new FormData(ServiceForm); // �������� ������� FormDataMyForm ��� ������ �����
    if (serviceFormButton.innerText === '���������') {
    async function sendDataServieFormData() { // �������� ������ �� ������
    return await fetch('http://kdenisb.ru:23000/form3', {
    mode: 'cors',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(Object.fromEntries(ServiceFormData)) // �������������� FormDataMyFrom � JS-������
    });
    };

    toggleLoaderServiceForm(); //�������� ��������� ��������

    const { status } = await sendDataServieFormData(); // �������� ������ � �������� ������ �� �������

    toggleLoaderServiceForm(); // ������ ��������� ��������

    if (status === 200) { // ���� ����� ������� - ��������
    onSuccessServiceForm(form); // ����� ����������� �������� �������� ������
    } else {
    onErrorServiceForm(error); // ����� ����������� ������ ��� �������� ������
    };

    function toggleLoaderServiceForm() { // ��������/������ ��������� ��������
    const loader = document.getElementById('Service_loader');
    loader.classList.toggle('Service_hidden');
    };
    function onErrorServiceForm(error){//��������� ������ ��� �������� ������
    alert(error.message);
    };

    function onSuccessServiceForm(formNode) {  // ��������� �������� �������� ������
    formNode.classList.toggle('Service_hidden');
    setTimeout(()=>{
    labelService.forEach(label=>label.remove());
    inputService.forEach(input=>input.remove());
    messageBlock = document.createElement('div');
    messageBlock.classList.add('message');
    messageBlock.innerText = '������� �� �����!� ��������� ����� � ���� ����������� ���������!';
    sale.insertAdjacentElement('afterbegin',messageBlock);
    serviceFormButton.style.marginTop = '300px';
    serviceFormButton.innerText = '�������';
    serviceFormButton.style.marginTop = '300px';
    }, 500);
    };
    };
    });
    serviceFormButton.addEventListener('click',() =>{ // ���������� �������� �����
    if (serviceFormButton.innerText === '�������') {
    setTimeout(()=>{
    sale.classList.remove('formDive');
    sale.style.opacity = 1;
    sale.classList.add('Close_form_Servise');
    sale.style.display = 'none';
    setTimeout(() => {
    serviceOsnova.classList.remove('hide');
    serviceTitle.classList.remove('hide');
    SliderService.classList.remove('hide');
    serviceOsnova.classList.add('formDive');
    serviceTitle.classList.add('formDive');
    SliderService.classList.add('formDive');
    //messageBlock.remove();
    serviceFormButton.style.marginTop = '0px';
    serviceFormButton.style.position = 'absolute';
    serviceFormButton.style.top = '370px';
    serviceFormButton.style.left = '6%';
    serviceFormButton.style.width = '86%';
    //labelService.forEach(label=>sale.appendChild(label));
    //inputService.forEach(input=> {
    //input.style.marginTop = '14px';
    //input.value = '';
    //sale.appendChild(input)});
    //serviceFormButton.innerText = '���������';
    },500);
    },1000);
    };
    });

    function serializeForma(formNode) { //function serializeForm(formNode) { - ���������� ������� serializeForm � ���������� formNode.
    const elements = formNode.elements;//const elements = formNode.elements; - ��������� �������� elements �� ����������� ������� formNode � ����������� ��� � ���������� elements.
    const data = Array.from(elements).filter(function(item) {			//const data = Array.from(elements) - ������� ����� ������ �� ������� elements � ������� ������������ ������ Array.from � ����������� ��� � ���������� data.
    return !!item.name;	//.filter(function(item) { - ��������� ������ � ��������� ������ ��������, � ������� ���� �������� name. �������� �������� �� ������������� ������� ������� ������ ���������� �������.
    }).map(function(element) {	//return !!item.name; - ������� ���������� true, ���� � �������� ���� �������� name, � false � ��������� ������.
    const name = element.name;//}).map(function(element) { - ��������� ����� map � ���������������� ������� � ������� ����� ������ ��������. �������� �������� �� ������������� ������� ������� ������ ���������� �������.
    const value = element.value;//const name = element.name; - ��������� �������� name �� ������� element � ����������� ��� � ���������� name.
    return { name: name, value: value };
    });
    console.log(data);
}

    function checkValidityService(event) { // ������� ��� �������� ���������� ����� ��� ����� ������
        const formNodeService = event.target.form;
        const isValidService = formNodeService.checkValidity();
        formNodeService.querySelector('button').disabled = !isValidService;
    };
