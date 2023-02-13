// const btnReset = document.getElementById("btnReset");
// const signupForm = document.getElementById("signupForm");
// const addButton = document.getElementById("addButton");

// addButton.addEventListener("click", () => {
//   console.log("hello addButton");
//   addButton.style.display = "none";
//   signupForm.style.display = "block";
// });

// btnReset.addEventListener("click", () => {
//   // console.log("hello btnReset");
//   signupForm.style.display = "none";
//   // monBouton1[0].classList.toggle("alternance")
//   addButton.style.display = "block";
// });

// // console.log(btnReset);
// // console.log(signupForm);

// updateForm = document.getElementsByClassName("updateAnimals");
// updateButton = document.getElementsByClassName("updateButton");
// cardAnimal = document.getElementsByClassName("cardAnimals");
// console.log(updateForm);

// function update(e) {
//   e.preventDefault;
//   console.log("coucou");
//   updateForm.style.display = "block";
//   cardAnimal.style.display = "none";
// }
// updateButton.addEventListener("click", update);

window.onload = () => {
  console.log("Page Loaded");
  let numberCards = [];
  numberCards = document.getElementsByClassName("cardsAnimals");
  console.log(numberCards.length);

  for (let i = 0; i < numberCards.length; i++) {
    let updateForm = document.getElementById(`formAnimal${i}`);
    let cardAnimal = document.getElementById(`cardAnimal${i}`);
    let updateBtn = document.getElementById(`updateButton${i}"`);
    console.log(updateBtn);

    function update() {
      console.log("coucou");
      updateForm.style.display = "block !important";
      cardAnimal.style.display = "none !important";
    }
  }
};
// for (let i = 0; i < numberCards.length; i++) {
//   updateForm = document.getElementById(`formAnimal${i}`);
//   cardAnimal = document.getElementById(`cardAnimal${i}`);
//   updateBtn = document.getElementById(`updateButton${i}"`);
//   console.log(updateForm);

//   function update() {
//     console.log("coucou");
//     updateForm.style.display = "block !important";
//     cardAnimal.style.display = "none !important";
//   }
// }
