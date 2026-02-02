// let num = [10, 20, 30];
// let uname = ["Ali", "Khan", "Anam"];
// let IsCorrect = [true, false, true];


/*
// allow any datatype to store variable
let mix = [10, "Afaq", true];


console.log(mix); // pora arr print hojayga
console.log(mix[0]); // 10 print
console.log(mix.length); // 3 (Length 1 sy start hoti h) (index 0 sy start hoti h) length 2 = Afaq, Index 2 = true

uname[1] = "Afnan" // khan ki jaga Afnan update kr dia
console.log(uname);
*/



/*
// Practive 

console.log(num[1]); // 20  (q ke index 0 sy start hoti h to 0 py 10 tha or 1 py 20 or 2 py 30)

uname[2] = "kamran";
console.log(uname.length); // 3

console.log(IsCorrect[0]); // true


// problem

console.log(uname[3]); // undefiend ayga q ke uname variable arry m koi index 3 py kuch h he nhi

num[5] = 45;
console.log(num.length); // length to 6 hogai
console.log(num[5]); // pr index 3, 4 skip kr k index 5 py 45 set krdia;

num[1] = num[1] += 5;
console.log(num); // num index 1 py jo b value hogi usmy 5 ka izafa hoga
*/



/*
// push / pop / shift / unshift

num.push(40); // end m add krta h bager index skip kiye 
console.log(num);  

num.pop() // end wali index puri remove 
console.log(num);

num.unshift(10009) // shuru m add krta h
console.log(num);

num.shift() // shuru sy remove krta h
console.log(num);
*/




// Slice() / Splice
// slice orignal array ko change nhi krti bs copy kr k ek variable b daldi h

let num = [10, 20, 30, 40, 50];
let uname = ["Ali", "Khan", "Anam"];

// let part = num.slice(1,2); // yani k 1 index sy 2 index tak ki vale copy krta h endindex include nhi krta
// console.log(part); // [20]

// let part1 = uname.slice(2) // 2 index sy array k end index tak chalyga
// console.log(part1); // [Anum]



// array.splice(startIndex, deleteCount, item1, item2, ...) Splice Sentex
// num.splice(1, 2) // yani k index 1 sy 2 item delet
// console.log(num);
// num.splice(1, 0, 20, 30) // ab index 1 sy phely kuch delete nhi krna 2 item add krna h bs
// console.log(num) // [10, 20, 30, 40, 50]



/*
// Q1: sirf 2 remove karo
// Q2: 2 aur 3 ki jaga 99 daalo
// Q3: start me 0 add karo

let arr = [1, 2, 3, 4];

// Q1
arr.splice(1,1)
console.log(arr);
arr.splice(1,0,2) // wapis array wesa he kr dia

// Q2
arr.splice(1,2,99)
console.log(arr);
arr.splice(1,1,2,3) // wapis array wesa he kr dia

// Q3
arr.unshift(0)
console.log(arr);
*/



/*
let a = [1,2,3,4,5,6]

for (const element of a) {
    console.log(element);  // array ki value k liy for of loop
};

for (const element in a) {
    console.log(element);   // array ki index k liy for in loop
};

let a = [1,2,3,4,5,6]
a.forEach((e, i, arry) => {
    console.log(e, i);
});

*/



/* map()
map() array ke har element par kaam karta hai
aur ek naya array return karta hai.
original array change nahi hota. 

Semtex
array.map(function(value, index, array){
    return newValue;
}); */


/*
let nums = [1, 2, 3];

let result = nums.map(n => {
    return n * 2
})
console.log(result); // 2, 4, 6

let arr = [2, 4, 6];
let res = arr.map(x => x + 1);
console.log(res); // 3, 5, 7

let arr2 = [1, 2, 3, 4];
let sq = arr2.map(n => n * n);
console.log(sq); // 1, 4, 9, 16

let data = [10, 20, 30];
let out = data.map((v, i) => v + i);
console.log(out); // 10, 21, 32
*/



/*
// Filter()
// ya arry new nhi or chane b nhi krta bs value ki condition true py retun krta Sh

let a = [3,53,4,6,2,5,8,2,12]
let con = a.filter(v => v >= 4)
console.log(con);

let even = a.filter(e => e % 2 === 0)
console.log(even);

let odd = a.filter(e => e % 2 === 1)
console.log(odd);
*/
