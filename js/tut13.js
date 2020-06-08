console.log('welcome in element selectors'); 
// there are two types of element selector 1. single element selector ;2.multiple element selector
// *single element selector

// let element=document.getElementById('myfirst');
// element=element.className;
// element=element.childNodes;
//element.style.color='blue';
// element.style.background='skyblue';
// element.innerText='Hii i am gaurav';
// element.innerHTML='he is agood boy';
//  console.log(element.innerHTML);
// QUERY SELECTOR....
// let sel=document.querySelector('#myfirst');
// let sel=document.querySelector('.child');
// let sel=document.querySelector('div');
// console.log(sel);


// multielement selector

let elem= document.getElementsByClassName('child');
elem=document.getElementsByClassName('container');
// console.log(elem[0].getElementsByClassName('child'));
element=document.getElementsByTagName('div');
console.log(element);
// Array.from(element).forEach(element={
    // console.log(element);

//});


// console.log(element
// )
// }
for (let index = 0; index < elem.length; index++) {
    const elem = element[index];
    console.log(elem);
    element.style.color='blue';
    
}