// $(function () {
//   $("#nav").load("./nav.html");
//   // $("#bradcrumb").load("./nav.html");
//   $("#footer").load("./footer.html");
//   $("#hero").load("./hero.html");
// })();
// https://stackoverflow.com/questions/3931529/is-not-a-function-jquery-error

jQuery(function ($) {
  $("#nav").load("./nav.html");
  // $("#bradcrumb").load("./nav.html");
  $("#footer").load("./footer.html");
  $("#hero").load("./hero.html");
});

const current_location = location.href;
// URL of curent page as displayed on address bar
const links = document.getElementsByClassName("nav-link");
// Array of anchor elements in li
this_length = links.length; // length of Array

for (let p = 0; p < this_length; p++) {
  if (links[p].href === current_location) {
    // href attribute links to of href as location
    links[p].classList.add("active");
  }
}

const icon = document.querySelector("#hamburg-btn");
const overlay = document.getElementById("overlay");
const header = document.querySelector(".header");

window.addEventListener("DOMContentLoaded", () => {
  icon.addEventListener("click", function () {
    if (icon.classList.contains("open")) {
      icon.classList.remove("open");
      header.classList.remove("mobile");
    } else {
      icon.classList.add("open");
      header.classList.add("mobile");
    }
  });
});
/** dynamic page bread crumb **/
const page = document.getElementById("current_page");
const temp = location.href.split("/");
const list = temp[temp.length - 1].replace(".html", "");
page.innerHTML = list;
