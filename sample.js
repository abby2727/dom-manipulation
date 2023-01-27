// * Part 1

// let items = document.getElementsByClassName('list-group-item');  // ? return HTMLCollection
// let items = document.querySelector('list-group-item');           // ? return null
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

// * Part 2
// * Traversing the DOM

// let itemList = document.querySelector('#items');

// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'blue';
// console.log(itemList.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'red';
// console.log(itemList.parentElement.parentElement);

// childNode
// console.log(itemList.childNodes);

// children
// console.log(itemList.children);
// console.log(itemList.children[2]);
// itemList.children[2].style.backgroundColor = 'yellow';

// firstChild
// console.log(itemList.firstChild);

// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'First child';

// lastChild
// console.log(itemList.lastChild);

// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Last child';

// nextSibling
// console.log(itemList.nextSibling);

// nextElementSibling
// console.log(itemList.nextElementSibling);
// itemList.nextElementSibling.textContent = 'Hi!!!';
// itemList.nextElementSibling.innerHTML = `<h1>${'Hello Earth!'}</h1>`;

// previousSibling
// console.log(itemList.previousSibling);

// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.textContent = 'Hello Item';

// * Create Element 

// let div = document.createElement('div');
// div.id = 'myDivId';

// Create text node and append to div
// div.appendChild(document.createTextNode('Hello, world!'));
// console.log(div.textContent);

// let container = document.querySelector('.container #main');
// let h2 = document.querySelector('#main h2');
// let h2 = document.querySelector('#main .test');

// container.insertBefore(div, h2);    // first parameter: the node that you want to insert.
                                    // second parameter: the node before which you want to insert the new node.

// let element = document.getElementById('myDivId');
// console.log(element);
// element.style.color = 'green';

// * Part 3

// let myButton = document.getElementById('myButton');
// myButton.addEventListener('click', myFunction);

// function myFunction(e) {
    // console.log(e.target.id);
    // output.textContent = e.target.id;
// }

// let inputItem = document.getElementById('item');
// inputItem.addEventListener('keydown', myFunction);

// function myFunction(e) {
    // console.log(e.target.value);
    // itemOutput.textContent = e.target.value;
// }

// Experiment

// let listGroupItem = document.getElementsByClassName('list-group-item');  // ? return HTMLCollection
// let listGroupItem = document.querySelectorAll('.list-group-item');       // ? return NodeList
// console.log(listGroupItem);

// for (let i = 0; i < listGroupItem.length; i++) {
//     listGroupItem[i].style.color = 'blue';
// }

// console.log(document.querySelectorAll('div'));

// let div = document.querySelectorAll('div');     // NodeList (Applicable for forEach)
// let div = document.getElementsByTagName('div'); // HTMLCollection (Not applicable for forEach) 

// div.forEach(function(value) {
//     value.style.color = 'green';
// });
// for (let i = 0; i < div.length; i++) {
// div[i].style.color = 'red';
// }