console.log('we will abotut  children,parent,traversing the DOM');
console.log('');
let cont=document.querySelector('.no');
console.log(cont);
cont=document.querySelector('.container');
console.log(cont);
console.log(cont.childNodes);
console.log(cont.children);
 let nodeName=cont.childNodes[1].nodeName;
let nodeType=cont.childNodes[0].nodeType;
console.log(nodeName);
console.log(nodeType);
console.log(cont);
// console.log(cont.childNodes); it give all value like text ,div etc
// console.log(cont.children);  if we don't want text . it give only etement value
// -****------//nodetypes---
//1.element
//2.attribute
//3. text node
//4 .comment
// //5. docType
//  let container =document.querySelector('div.cointainer');
// console.log(container.children[1].children[0].children);
// console.log(container.firstChild);
// console.log(container.lastChild);
// console.log(container.lastElementChild);
// console.log(container.childElementCount);
// console.log(container.firstElementChild.parentNode);
// console.log(container.firstElementChild.nextElementSibling);
// console.log(container.firstElementChild.nextElementSibling.nextElementSibling);