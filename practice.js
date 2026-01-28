// function plus(x, y){
//     return (x + y);
// }

// let a = 1;
// let b = 2;
// console.log(plus(a, b));


// for (a; a <= 10; a++){
//     console.log(a);  
// }
// while (++a < 20) {
//     console.log(a);
//     a++    
// }

// let x = 5;
// function add(y) {
//   return x + y;
// }
// console.log(add(3)); // output 8


// const name = "Ali"; // fix error
// // name = "Ali";

// const arr = [10, 20, 30];
// for (let i in arr) {
//   console.log(i);
// } // output 0,1,2

// const arrey = [10, 20, 30];
// for (let val of arr) {
//   console.log(val);
// } // output 10,20,30

// let a = 1;
// do {
//   console.log(a);
//   a++;
// } while (a <= 3); // output 1,2,3,3


// const numbers = [1, 2, 3, 4, 5];



// numbers.forEach(number => {
//   console.log(number * number);
// })

// function squarnumber(x){
//   console.log(x * x);  
// }
// numbers.forEach(squarnumber)


// const fruits = ["Apple", "Banana", "Mango"];

// function printFruit(fruit){
//   console.log("i Like " + fruit);
// }
// fruits.forEach(printFruit);



// const colors = ["red", "green", "blue"];

// function showColor(value, index){
//   let firstletter = value.charAt(0).toUpperCase() + value.slice(1);
//   console.log("color " + index + ": " + firstletter);
// }

// colors.forEach(showColor);


const colors = ["red", "green", "blue"];

function showColor(value, index) {
  let newWord = "";
  let i = 0;

  for (i; i < value.length; i++) {
    if (i % 2 === 0) {
      newWord += value.charAt(i);
    } else {
      newWord += value.charAt(i).toUpperCase(); 
    }
  }

  console.log("Color " + index + ": " + newWord + i);
}

colors.forEach(showColor);

