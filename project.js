// // ---------- Select DOM Elements ----------
const userForm = document.querySelector("#userForm");

const nameErrorEl = document.querySelector("#nameError");
const ageErrorEl = document.querySelector("#ageError");
const emailErrorEl = document.querySelector("#emailError");

const usersList = []; 
userForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();

  clearFieldErrors();

  const currentUser = getFormValues();
  const validationErrors = validateUserData(currentUser);

  if (Object.keys(validationErrors).length > 0) {
    displayFieldErrors(validationErrors);
    return; 
  }

  saveUserData(currentUser);
  userForm.reset();
}

function getFormValues(){
    return{
        name: document.querySelector("#name").value.trim(),
        age: Number(document.querySelector("#age").value.trim()),
        email: document.querySelector("#email").value.trim()
    }
}

function validateUserData({name, age, email}){
    let err = {};

    // name
    if(!name){
        err.name = "name is required";
    }else if(name.length > 15){
        err.name = "name only 15 latters required";
    }


    // age
    if(!age){
        err.age = "age is required";
    }else if(age <= 18){
        err.age = "only 18 plus";
    }


    // email
    if(!email){
        err.email = "email is required";
    }

    
    return err;
}

function displayFieldErrors(obj){
    if(obj.name){
        nameErrorEl.innerHTML = obj.name;
    }
    if(obj.age){
        ageErrorEl.innerHTML = obj.age;
    }
    if(obj.email){
        emailErrorEl.innerHTML = obj.email;
    }
}

function clearFieldErrors(){
    nameErrorEl.innerHTML = "";
    ageErrorEl.innerHTML = "";
    emailErrorEl.innerHTML = "";
}
function saveUserData(user){
    usersList.push(user);
    console.log(user);
    
}
























// // ---------- Helper Functions ----------

// // Get form values as an object
// function getFormValues() {
//   return {
//     name: document.querySelector("#name").value.trim(),
//     age: Number(document.querySelector("#age").value),
//     email: document.querySelector("#email").value.trim()
//   };
// }

// // Validate user data
// function validateUserData({ name, age, email }) {
//   let errorsObj = {};

//   if (!name) errorsObj.name = "Name is required";
//   else if (name.length < 3) errorsObj.name = "Name must be at least 3 letters";

//   if (!age) errorsObj.age = "Age is required";
//   else if (age < 18) errorsObj.age = "Age must be 18+";

//   if (!email) errorsObj.email = "Email is required";
//   else if (!isValidEmailFormat(email)) errorsObj.email = "Email is invalid";

//   return errorsObj;
// }

// Check if email format is valid
function isValidEmailFormat(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// // Display errors under each field
// function displayFieldErrors(usermsg) {
//   if (usermsg.name) nameErrorEl.innerText = usermsg.name;
//   if (usermsg.age) ageErrorEl.innerText = usermsg.age;
//   if (usermsg.email) emailErrorEl.innerText = usermsg.email;
// }

// // Clear all previous errors
// function clearFieldErrors() {
//   nameErrorEl.innerText = "";
//   ageErrorEl.innerText = "";
//   emailErrorEl.innerText = "";
// }

// // Save valid user data
// function saveUserData(userObj) {
//   usersList.push(userObj);
//   console.log("Current Users:", usersList);
// }






















// const form = document.querySelector("#userForm");

// const namerr = document.querySelector("#nameError");
// const ageerr = document.querySelector("#ageError");
// const emailerr = document.querySelector("#emailError");

// let UserApi = {};
