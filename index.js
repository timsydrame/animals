const btnReset= document.getElementById("btnReset");
const signupForm = document.getElementById("signupForm");
const monBtn1 = document.getElementById("monbtn1");
 monBtn1.addEventListener("click", () => {
    console.log ("hello moBtn1");
    monBtn1.style.display="none" ;
    signupForm.style.display ="block";
    
});

btnReset.addEventListener("click", () => {
    console.log ("hello btnReset");
    signupForm.style.display ="none";
    // monBouton1[0].classList.toggle("alternance")
    monBtn1.style.display ="block";
    
}); 

console.log (btnReset);
console.log (signupForm);