var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
var menu = document.getElementById("menu");

sideNav.style.right = "-250px";

menuBtn.onclick = function () {
  if (sideNav.style.right == "-250px") {
    sideNav.style.right = "0";
    menu.src = "https://i.postimg.cc/52GMz12X/close.png";
  } else {
    sideNav.style.right = "-250px";
    menu.src = "https://i.postimg.cc/L5vc8FW6/menu.png";
  }
};
/* scroll speed control */
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true
});
init();

async function init() {
  if (location.search.split("=")[1] === undefined) {
    const workout = await API.getLastWorkout();
    if (workout) {
      location.search = "?id=" + workout._id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}