// mendeclarasikan variabel
const navbarLink = document.querySelector(".navbar-link");
const hambergerMenu = document.querySelector("#menu");

// ketika menu hamberger di click
document.querySelector("#menu").onclick = () => {
  navbarLink.classList.toggle("active");
};

// supaya bisa nge-click di luar sideber untuk menghilangkan nav nya
document.addEventListener("click", function (e) {
  if (!hambergerMenu.contains(e.target) && !navbarLink.contains(e.target)) {
    navbarLink.classList.remove("active");
  }
});
