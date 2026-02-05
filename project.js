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
  alert("user validation complet")
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
    if(!name){
        err.name = "name is required";
    }
    if(!age){
        err.age = "age is required";
    }
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




