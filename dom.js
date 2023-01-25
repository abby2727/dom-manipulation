// * Part 4

let form = document.getElementById('addForm');
let parentList = document.getElementById('items');

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