// console.log('welcome =in this lacture we will learn about  Function today');
// let name='Lovely';
// let name2 = 'rohan';
// console.log(`happy birthday ${name}  to my closest and oldest friend! I feel blessed, because our friendship is a true gift of life.`);
// console.log(`${name2}Happy birthday to my closest and oldest friend! I feel blessed, because our friendship is a true gift of life.`);


function greet(name,thanks)
{
console.log('welcome =in this lacture we will learn about  Function today');
console.log(`happy birthday ${name}  to my closest and oldest friend! I feel blessed, because our friendship is a true gift of life.${thanks}`);
return 6;
}
let name='Lovely';
let name2='mukesh';

greet(name,'thanks a lot');
let val=greet(name,'thanks a lot');
console.log(val); 
// other way to define function
const myobj ={
    name:'mk', 
    game:function()
    {
        return "GTA"
    }
}
// array in function
console.log(myobj.game());
arr=['fruits','vegetable' ,'furniture'];
arr.forEach(function(element, index, array) {
    console.log(element, index,array)
});
// scope
// let/const has block level scope ! var has function level scope! 
// we can understand it by below example:
// var i=444;
// console.log(i);
// function ui(name){
    //  i=9; yaha agar var = i kr de toh output 9 aayega  nhi toh output 444 aayega
    // return `this is ${name} ui`;

// }
// console.log(ui("harry"), i);
// ex2
let i=444;
console.log(i);
function ui(name)
{
    let i=9;
    console.log(i);
    return `this is ${name} ui`;

}
console.log(ui("harry"), i);