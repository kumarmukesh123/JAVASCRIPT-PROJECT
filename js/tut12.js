console.log('welcome to tut12');
let a =document;
 a=document.all;
 console.log(a);
// a=document.body;
// a=document.forms;
// a=document.link;
// console.log(a);
// a.forEach(function(element){
    // console.log(element);
// })
Array.from(a).forEach(function(element){
    console.log(element);
})
 console.log(a);
// Dom is a structral representation of html page . this is a kind of object..Type of "document" is 'OBJECT'!
a=document.links[0];
console.log(a);