let nameInput = document.querySelector(".hide");
let signUpBtn = document.querySelector(".signupbtn");
let signInBtn = document.querySelector(".signinbtn");
let para = document.querySelector(".para");

signInBtn.addEventListener("click", () => {
  nameInput.style.maxHeight = "0px";
  para.innerHTML = "Lost password";
  signUpBtn.classList.add("disable");
  signInBtn.classList.remove("disable");
});

signUpBtn.addEventListener("click", () => {
  nameInput.style.maxHeight = "60px";
  para.innerHTML = "password suggestions";
  signUpBtn.classList.remove("disable");
  signInBtn.classList.add("disable");
});

let submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", () => {
  let naamInput = document.querySelector("#naamInput").value;
  let emailInput = document.querySelector("#emailInput").value;
  let passwordInput = document.querySelector("#passwordInput").value;
  console.log("Your Name = " + naamInput);
  console.log("Your Email = " + emailInput);
  console.log("Your Password = " + passwordInput);
});
