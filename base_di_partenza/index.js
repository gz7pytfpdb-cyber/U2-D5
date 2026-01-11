const navbar = document.getElementById("mainnavbar");
const btnNav = document.getElementById("btnNvbr");
console.log(btnNav);
console.log(navbar);
const breakPoint = document.getElementById("second-section");
console.log(breakPoint.offsetTop);

window.addEventListener("scroll", function () {
  if (window.scrollY > breakPoint.offsetTop - 140) {
    navbar.classList.add("newFlamingNavabar");
    btnNav.classList.add("newFlamingBtn");
  } else {
    navbar.classList.remove("newFlamingNavabar");
    btnNav.classList.remove("newFlamingBtn");
  }
});
