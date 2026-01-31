/*  

Sirf 3 variable hoty hn Var, Let, Const

(Var)
var JavaScript ka purana variable keyword hai jo data store karne ke kaam aata hai. Is se m numbers, strings, arrays waghera rakh sakte ho. var function-scoped hota hai, matlab function ke andar declare ho to poore function me accessible hota hai. Is ki ek khas baat hoisting hai, yaani declare hone se pehle bhi use ho jata hai (undefined ke sath). Problem ye hai ke var se bugs aa sakte hain kyun ke ye block {} ko follow nahi karta. Is liye modern JS me zyada tar let aur const use hote hain. 

(Let)
let JavaScript ka modern variable hai jo var ka better version samjha jata hai. Ye block-scoped hota hai, yani {} ke andar declare ho to sirf wahi tak limited rehta hai. let hoisting hota hai lekin use pehle nahi kar sakte, warna error aata hai. Is se code zyada safe aur predictable ho jata hai, aur bugs kam hote hain. Aaj kal professional JavaScript me let aur const hi standard hain.

(Const)
const JavaScript ka most secure variable hota hai jo un values ke liye use hota hai jo change nahi honi chahiye. const bhi block-scoped hota hai bilkul let ki tarah. Is me variable ko declare karte hi value dena zaroori hota hai, baad me reassign nahi kar sakte. Haan agar value object ya array ho to uska data change ho sakta hai, reference same rehta hai. Clean aur professional JavaScript me fixed cheezon ke liye const best choice hoti hai.

*/


// Var practice
var name = "Ali";
console.log(name); // Ali

var age = 20;
age = 25; // reasign
console.log(age); // 25

var x = 10;
var y = 5;
var sum = x + y;
console.log(sum); // 15



// Var Problem Solve

// p1
console.log(city); // Undefind   Problem error nhi ata Undefiend ata h Q ke var phely he declar ho jata h
var city = "Lahore";

// p2
var num = 10;
var num = "Ten"; 
console.log(num); // Ten   Problem Ten reasign hua h same name k sat

// p3
if (true) {
    var a = 5;
}
console.log(a); // 5   Problem {} k bhair b access kr rha h




// Let Practice
let uname = "Akbar";
console.log(uname); // Ali 


let n = 20;
n = 22; // reasign
console.log(n); // 22   ider reasign hua h


let xy = 5;
if (true) {
    let xy = 10;
}
console.log(xy); // 5   ider xy ki value reasign hua h = 10 lykin output 5 ata h isliy ya let block-scoped h {} k ander wali value bhair access nhi hota

// let xyz = 10;
let xyz = 20;
console.log(xyz); // let ko same scope me dobara declare nahi kar sakte.




// Const Practice
const pi = 3.14;
console.log(pi); // 3.14


const username = "Ali";
// username = "Ahmed"; // isko ham dobara asign nhi kr sakty error de ga
console.log(username);


const numbers = [1, 2, 3];
numbers.push(4); // ya allowed krta h
// numbers = [1, 2, 3, 6, 7];  // Ya allowed nhi kryga reasign 
console.log(numbers);


// console.log(c); // error dega refrens error
// const c = "Lahore";  


// const abc = 10;
// const abc = 20;
// console.log(abc); // error dega declaration ka

if (true) {
    const az = 5;
}
// console.log(az); // error dega bolyga mujy az mil he nhi raha Q ke az{} k ander defien hua h bhair acces nhi



