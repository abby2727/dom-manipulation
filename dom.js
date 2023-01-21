let items = document.getElementsByClassName('list-group-item');
console.log(items);

// items[2].textContent = 'Hi ITEM 3';
items[2].style.fontWeight = 'bold';
items[2].style.color = 'red';
items[0].style.color = 'orange';

// for (let i = 0; i < items.length; i++) {
//     items[i].style.color = 'lightgray';
// }

let myInput = document.querySelector('input');
myInput.style.backgroundColor = '#000';
myInput.value = 'Hello ITEM';
myInput.style.color = '#FFFFFF';

let myButton = document.querySelector('input[type=submit]');
myButton.value = 'Send';

let listItemLast = document.querySelector('.list-group-item:last-child');
listItemLast.style.color = 'yellow';

let listItemSecond = document.querySelector('.list-group-item:nth-child(2)');
listItemSecond.style.color = 'blue';

let odd = document.querySelectorAll('li:nth-child(even)');
for (let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = 'lightGray';
}
