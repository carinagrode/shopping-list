const input = document.getElementById('userInput');
const enterButton = document.getElementById('enter');
const list = document.querySelector('ul');
const item = document.getElementsByTagName('li');

enterButton.addEventListener('click', addListItem);
input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addListItem();
    }
});


function addListItem() {
    const newListItem = document.createElement('li');
    newListItem.appendChild(document.createTextNode(input.value));
    list.appendChild(newListItem);
    input.value = '';

    newListItem.addEventListener('click', setItemToDone);
    function setItemToDone() {
        newListItem.classList.toggle('done');
    }
}

