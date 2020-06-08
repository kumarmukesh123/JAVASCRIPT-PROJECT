console.log('we will learn about Creating, Removing,Replacing Element');
let element = document.createElement('li');
let text = document.createTextNode('i am a node');
element.appendChild(text);
//add a class name to the li element  this lacture is not fully covered..
//   console.log(element);
element.className='children1';
element.id='myfirst'; 
 element.setAttribute('title','mytytle');
//  element.innerText='<b>this is created by me</b>';

//  element.innerHTML='<b>this is created by me</b>';
// let ul =document.querySelector('ul.this');
//  ul.appendChild(element);
// console.log(element); 
// how to replace a element
let elem2=document.createElement('h3');
elem2.id='elem2';
elem2.className = 'elem2';
let tnode=document.createTextNode('this a node 2 element');
elem2.appendChild(tnode);
element.replaceWith(elem2);
let myul=document.getElementById('myul');
myul.replaceChild(element, document.getElementById('myul'));
myul.removeChild(document.getElementById('myul'));
