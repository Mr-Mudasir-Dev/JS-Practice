/*
JavaScript me object aik aisa data structure hota hai jisme hum multiple values ko key : value pairs ki form me store karte hain. Object real-life cheezon ko represent karta hai, jese user, car, product, jahan har cheez ki properties (name, age, price) aur behaviors (functions) hoti hain. Object me value string, number, boolean, array, ya function kuch bhi ho sakti hai. Object {} braces se banta hai aur data ko logically organize karne ke liye use hota hai.
*/

// basic
let user = {
  name: "Ali",
  age: 22
};
console.log(user.name); // Ali


let car = {
  brand: "Honda",
  model: "Civic"
};
car.model = "City"; // Reassign
car.Color = "Blue"; // add hua
console.log(car);



let data = {
  nums: [1,2,3]
};
console.log(data.nums[1]);





// Problem solve

let person = {
  name: "Afaq"
};
console.log(person.age); // kia ayega? q? // Undegign ayga asa kuch declar he nhi kia


let obj = {
  x: 10
};
obj.y = 20;
delete obj.x;
console.log(obj); // y = 20 (Q ke x delet krdia or y declar kr k usko value 20 de d)


let users = {
  name: "Ali",
  greet: function(){
    return "Hello " + this.name;
  }
};
console.log(users.greet()); // hello Ali



// function or method ka difference 
// Function → akela kaam karta hai
// Method → object ke data (this) ke sath kaam karta hai