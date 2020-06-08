// array and Object
 let marks=[34,67,98,09,89,70];
 const fruits=['apple','banana','guava'];
 const mixed = ['str',98,[8,6]];
 const arr = new Array(23,123,333,'apple');
 console.log(arr);
 console.log(mixed);
 console.log(fruits);
 console.log(arr.length);
 console.log(Array.isArray('shjb'));
 arr[0]='lalbabu';
 arr[4]='attu'
 let value=marks.indexOf(70);
 console.log(value);
//  modify Array
// marks.push(3300);last me ek aue add kr dega
// console.log(marks); first me add kr dega jo value hm denge 
marks.unshift(555);
console.log(marks);
// marks.pop(); ending se ek element hata dega
console.log(marks);
// marks.shift(); remove first element
marks.splice(2,3);
console.log(marks); 
marks.reverse();
console.log(marks);
let marks2=[22,289,20,100];
marks=marks.concat(marks2);
console.log(marks);
//   OBJECT
let Myobject ={ name:'go to hell',
channel:'javaScript',
isPresent:true,
marks:[22,99,09,89]
}
console.log(Myobject.marks);

console.log(Myobject.channel);
console.log(Myobject.name);