// let items = document.getElementsByClassName('list-group-item');
// console.log(items);

// items[2].style.fontWeight = 'bold';
// items[2].style.color = 'red';
// items[0].style.color = 'orange';

// let myInput = document.querySelector('input');
// myInput.style.backgroundColor = '#000';
// myInput.value = 'Hello ITEM';
// myInput.style.color = '#FFFFFF';

// let myButton = document.querySelector('input[type=submit]');
// myButton.value = 'Send';

// let listItemLast = document.querySelector('.list-group-item:last-child');
// listItemLast.style.color = 'yellow';

// let listItemSecond = document.querySelector('.list-group-item:nth-child(2)');
// listItemSecond.style.color = 'blue';

// let odd = document.querySelectorAll('li:nth-child(even)');
// for (let i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = 'lightGray';
// }

// * Traversing the DOM

// let itemList = document.getElementById("items");

// console.log(itemList.lastElementChild);
// itemList.firstElementChild.style.color = 'red';

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'lightGray';

// console.log(itemList.children);
// itemList.children[0].style.backgroundColor = 'blue';
// itemList.children[1].style.backgroundColor = 'blue';
// itemList.children[2].style.backgroundColor = 'blue';
// itemList.children[3].style.backgroundColor = 'blue';
// for (let i = 0; i < itemList.children.length; i++) {
//     itemList.children[i].style.backgroundColor = 'green';
// }
// Array.prototype.forEach.call(itemList.children, function(item) {
//     item.style.backgroundColor = 'green';
// });
// for (const child of itemList.children) {
//     child.style.backgroundColor = 'blue';
// }

// * Create Element 

// let div = document.createElement('div');

// div.id = 'myDivId';

// Create text node
// let divTxt = document.createTextNode('Hello, world!');
// div.appendChild(divTxt);

// let container = document.querySelector('.container #main');
// let h2 = document.querySelector('#main h2');

// console.log(div);
// container.insertBefore(div, h2);

// let changeMe = document.getElementById('myDivId');
// console.log(changeMe);
// changeMe.style.backgroundColor = 'blue';

// * Part 3

// let myButton = document.getElementById('myButton');
// myButton.addEventListener('click', myFunction);

// function myFunction(e) {
    // console.log(e.target.id);
    // output.textContent = e.target.id;
// }


let inputItem = document.getElementById('item');
inputItem.addEventListener('keydown', myFunction);

// function myFunction(e) {
    // console.log(e.target.value);
    // itemOutput.textContent = e.target.value;
// }