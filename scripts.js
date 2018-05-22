//scripts.js

/*
console.log(window);

function raiseAlarm() {
    alert('I show it once after 2 seconds.');
}
var delayedAlert = setTimeout(raiseAlarm, 2000);


var delayedAlert = setTimeout(raiseAlarm, 2000);
clearTimeout(delayedAlert);

function raiseAlarm() {
    alert('I show myself every two seconds.')
}

var interval = setInterval(raiseAlarm, 2000);

function stop() {
    alert('It took 10 seconds. The following statement interrupts the interval.');
    clearInterval(interval);
}

setTimeout(stop, 10000);


console.log(document); // or window.document

window.onload = function() {
  console.log('The page is fully loaded.');
  // the rest of the script
}

console.log(location);

//window.location = 'http://www.kodilla.pl';

var navigation = document.getElementById('nav');
console.log(navigation);


var withMenuItemsClass = document.getElementsByClassName('menuItem');
console.log(withMenuItemsClass);

var menu = document.getElementById('Menu');
var withMenuItemsClassInNav = menu.getElementsByClassName('menuItem');
console.log(withMenuItemsClassInNav);

var itemsByTagName = document.getElementsByTagName('li');
console.log(itemsByTagName);

var navigation = document.getElementById('nav');
console.log(navigation.nextElementSibling);

var newElem = document.createElement('p');
console.log(newElem);

var newElem = document.createElement('p');
newElem.innerHTML = 'The text inside the p tag, which is under newElem';
console.log(newElem);

var navigation = document.getElementById('nav');
var newElem = document.createElement('p');
newElem.innerHTML = 'The text inside the p tag, which is under newElem';
navigation.appendChild(newElem);
*/

var button = document.getElementsByClassName('button');
for ( var k = 0 ; k < button.length ; k++ ) {
	alert(button[k].innerText);  
}