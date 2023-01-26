// * Part 4

let form = document.getElementById('addForm');
let parentList = document.getElementById('items');
// console.log(form);

form.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();
    let childList = document.querySelector('#item');
    let message = document.querySelector('#message');

    if (childList.value !== '') {
        let li = document.createElement('li');
        let button = document.createElement('button');

        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(childList.value));
        li.appendChild(button);
        button.className = 'btn btn-sm btn-danger float-end delete';
        button.appendChild(document.createTextNode('X'));
        parentList.appendChild(li);

        message.style.display = 'none';
    } else {
        message.style.display = 'block';
    }
}

let buttons = document.querySelectorAll('button');
// console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
    // buttons[i].addEventListener('click', deleteItem);
    buttons[i].addEventListener('click', deleteItem.bind(null, i));
}

function deleteItem(index) {
    alert(index);
}
