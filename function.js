/*

Defination Function

Function ek reusable code block hota hai jo specific kaam karta hai.
Isko hum call karke bar bar use kar sakte hain.


Sentext

function functionName(parameters){
    // code
    return value; // optional
}


Types of Functions in JavaScript (total 5 main types):


1: Function Declaration
function greet() {
    console.log("Hello!");
}


2: Function Expression
const greet = function() {
    console.log("Hello!");
};


3: Arrow Function (ES6)
const greet = () => {
    console.log("Hello!");
};




4: Immediately Invoked Function Expression (IIFE)
Declare hote hi execute ho jata hai
(function(){
    console.log("IIFE run!");
})();

*/






/*

// 1: Function Declaration

function greet() {
    console.log("Hello!");
}
greet() // call krna zaruri h warna kabi chalyga he nhi


function greetUser(uname){
    console.log("Hello " + uname + "!");
}
greetUser("Kamran"); // Hello Ali!    parameter wala



let result = add(5, 3);
console.log(result); // 8   Work karyga function bad m liko hn bhaly
function add(a, b){
    return a + b;
}

*/



/*
// 2: Function Expression

let fun = function(x, y){
    return x + y
}
console.log(fun(3,4));



err(); // error dega Q ke ya Function Declaration ki tarha phely he use nhi kr sakty  
const err = function(){
    console.log("hi world");
}


const nfe = function seyhi(){
    console.log("name function expression");
}
nfe(); // ya chalyga
seyhi(); // ya error dega q k ya nam function k ander he use hota h
*/



/*
// 3: Arrow Function (ES6)

let greet = () => {
    console.log("Hello!");
}
greet(); // Hello!




const res = (uname) => {
    console.log("Wellcome " + uname);
}
res("Ali");




let mult = (a, b) => a * b;
console.log(mult(2,3)); // 6
*/


/*
// 4: Immediately Invoked Function Expression (IIFE)
(function(){
    console.log("Wellcome to my web!");
})(); // ya likty he execute hojata h


(function(uname){
    console.log(uname + " Wellcome to my web!");
})("Kamran"); // Kamran Wellcome to my web!

// ya declayre hoty he run ho jata h 
*/