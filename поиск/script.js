let search = document.querySelector('.search');
let btnSearch = document.querySelector('.submit');
let btnDelete = document.querySelector('.btn');
let divElements = document.querySelectorAll('div');

searchFunction = (text) => {
  divElements.forEach((element) => {
    let message = element.textContent;
    let highlightedMessage = '';

    for (const char of message) {
      if (text.includes(char)) {
        highlightedMessage += `<span class="highlight">${char}</span>`;
      } else {
        highlightedMessage += char;
      }
    }

    element.innerHTML = highlightedMessage;
  });
};

search.addEventListener('input', () => {
  let searchText = search.value.trim();
  searchFunction(searchText);
});

btnSearch.addEventListener('click', (e) => {
  e.preventDefault();
  let searchText = search.value.trim();
  searchFunction(searchText);
});

btnDelete.addEventListener('click', () => {
  search.value = '';
  divElements.forEach((element) => {
    element.innerHTML = element.textContent;
  });
});
