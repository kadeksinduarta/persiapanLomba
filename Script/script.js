const navbarLink = document.querySelector(".navb zar-link");
const meditasi1 = document.getElementById("#meditasi1");
const audioMeditasi1 = document.getElementById("#audio-meditasi");

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

meditasi1.addEventListener("click", () => {
  audioMeditasi1.play();
});
