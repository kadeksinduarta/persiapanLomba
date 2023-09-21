const navbarLink = document.querySelector(".navbar-link");

// ketika menu hamberger di click
document.querySelector("#menu").onclick = () => {
  navbarLink.classList.toggle("active");
};

// click di luar sideber untuk menghilangkan nav nya
const hambergerMenu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!hambergerMenu.contains(e.target) && !navbarLink.contains(e.target)) {
    navbarLink.classList.remove("active");
  }
});
