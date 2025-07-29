let num = 42;                     
let str = "Hello";               
let bool = true;                 
let nothing = null;             
let notDefined;                 
let obj = { x: 10, y: 20 };    
let sym = Symbol("id");         

console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof nothing);    
console.log(typeof notDefined);
console.log(typeof obj);
console.log(typeof sym);


let stringToNumber = Number("123");
let numberToString = String(456);
let implicit = "10" + 5; 

console.log(stringToNumber);    
console.log(numberToString);    
console.log(implicit);