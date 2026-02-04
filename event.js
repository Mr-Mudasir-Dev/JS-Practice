/*
JavaScript me event us waqt hota hai jab user ya browser koi action perform karta hai, jese button click karna, keyboard se key dabana, mouse move karna, ya page load hona. Event ke zariye JavaScript ko pata chalta hai ke kab aur kis action par response dena hai, taake webpage interactive ban sake. Events ke sath hum functions attach karte hain jo us action ke baad run hote hain.
*/



/*
let a = document.querySelector("#btn1");
let b = document.querySelector("#dblclick");
// let c = document.querySelector("#hover");

a.onclick = () => {
    console.log("apny btn click kia h");
}

b.ondblclick = () => {
    console.log("apny dblbtn click kia h");
}

// c.onmouseover = () => {
//     // console.log("ap box k ander hn");
// }

let box = document.querySelector("#hover");
box.onmouseover = () => console.log("hover");
*/



/*
addEventListener JavaScript ka modern aur best tareeqa hai kisi element par event lagane ka. Is se hum ek hi element par multiple events laga sakte hain bina purana code overwrite kiye.
*/



/*
let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => console.log("Second"); // first overwrite 
// btn1.onclick = () => console.log("First");


btn1.addEventListener("click", () => console.log("First"));
btn1.addEventListener("click", () => console.log("Second")); // dono chalenge
*/




// Event task 
// let btn = document.querySelector("#btn");
// let text = document.querySelector("#text");

// let a = "Off";

// btn.addEventListener("click", () => {
//     if(a === "Off"){
//         a = "On"
//     }else{
//         a = "Off"
//     }
//     text.innerText = a;
// });


// let box = document.querySelector(".box");
// box.classList.add("active");
// box.classList.remove("active");
// box.classList.toggle("active");