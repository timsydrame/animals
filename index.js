const btnReset = document.getElementById("btnReset");
const signupForm = document.getElementById("signupForm");
const addButton = document.getElementById("addButton");
addButton.addEventListener("click", () => {
  console.log("hello moBtn1");
  addButton.style.display = "none";
  signupForm.style.display = "block";
});

btnReset.addEventListener("click", () => {
  console.log("hello btnReset");
  signupForm.style.display = "none";
  // monBouton1[0].classList.toggle("alternance")
  addButton.style.display = "block";
});

console.log(btnReset);
console.log(signupForm);
