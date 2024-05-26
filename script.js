let menu = document.querySelector(".menu");
let menuBtn = document.querySelector("#menuBtn");
let openNav = document.querySelector(".nav-items");

let check = 0;

menu.addEventListener("click", () => {
  if (check == 0) {
    openNav.style.height = "400px";
    openNav.style.padding = "50px";
    menuBtn.classList.replace("fa-bars", "fa-xmark");
    check = 1;
  } else {
    openNav.style.height = "0";
    openNav.style.padding = "0px";
    menuBtn.classList.replace("fa-xmark", "fa-bars");
    check = 0;
  }
});
