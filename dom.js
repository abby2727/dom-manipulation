let form = document.getElementById('addForm');
let parentList = document.getElementById('items');
let search = document.getElementById('filter');

form.addEventListener('submit', addItem);
parentList.addEventListener('click', removeItem);
search.addEventListener('keyup', searchItem);

function addItem(e) {
    e.preventDefault();
    let inputList = document.querySelector('#item');
    let message = document.querySelector('#message');

    if (inputList.value !== '') {   // if not empty string
        // Create element
        let li = document.createElement('li');
        let deleteBtn = document.createElement('deleteBtn');

        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(inputList.value));

        deleteBtn.className = 'btn btn-sm btn-danger float-end delete';
        deleteBtn.appendChild(document.createTextNode('X'));

        // Append button to li
        li.appendChild(deleteBtn);

        // Append li to parentList (ul)
        parentList.appendChild(li);

        message.style.display = 'none';
    } else {
        message.style.display = 'block';
    }
}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this?')) {
            let li = e.target.parentElement;
            parentList.removeChild(li);
        }
    }
}

function searchItem(e) {
    let text = e.target.value.toLowerCase();
    let items = parentList.getElementsByTagName('li');
    let emptyLabel = document.getElementById('emptyLabel');

    let noResult = true;

    Array.from(items).forEach(function (item) {
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {   // if found
            item.style.display = 'block';
            emptyLabel.style.display = 'none';
            noResult = false;
        } else {
            item.style.display = 'none';
        }
    });

    if (noResult) {
        emptyLabel.style.display = 'block';
    } else {
        emptyLabel.style.display = 'none';
    }
}