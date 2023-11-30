const CACHE_KEY = 'items';
const itemsString = localStorage.getItem(CACHE_KEY);
let items = JSON.parse(itemsString) || [];

const form = document.querySelector('form');
const input = document.querySelector('input');
const list = document.getElementById('todo-list');

renderItems(items);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (input.value == '') {
        alert('Будь-ласка введіть щось в інпут');
        return;
    }
    const item = {
        id: items.length,
        text: input.value,
        isDone: false
    };

    appendListItem(item.id, input.value);
    
    items.push(item);
    localStorage.setItem(CACHE_KEY, JSON.stringify(items));

    input.value = '';
})

function handleListItemClick(event) {
    if (event.currentTarget.classList.contains('done')) {
        event.currentTarget.classList.remove('done')
    } else {
        event.currentTarget.classList.add('done');
    }
}

function handleListItemRightClick(event) {
    event.preventDefault();

    const li = event.currentTarget;
    li.remove();

    items = items.filter(i => i.id != li.id)
    localStorage.setItem(CACHE_KEY, JSON.stringify(items));
}

function appendListItem(id, text) {
    const li = document.createElement('li');
    li.id = id;
    li.innerText = text;
    li.addEventListener('click', handleListItemClick);
    li.addEventListener('contextmenu', handleListItemRightClick);
    list.appendChild(li);
}

function renderItems(items) {
    items.forEach(i => {
        appendListItem(i.id, i.text);
    });
}