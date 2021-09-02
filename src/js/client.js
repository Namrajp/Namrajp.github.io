const current_location = location.href; // URL of curent page as displayed on address bar
const links = document.getElementsByClassName("nav-link"); // Array of anchor elements in li
this_length = links.length; // length of Array
for (let p = 0; p < this_length; p++) {
  if (links[p].href === current_location) {
    // href attribute links to of href as location
    links[p].classList.add("active");
  }
}

const hamburg_btn = document.getElementById("hamburg-btn");
const overlay = document.getElementById("overlay");
const header = document.querySelector("header");

hamburg_btn.addEventListener("click", function () {
  if (hamburg_btn.classList.contains("open")) {
    hamburg_btn.classList.remove("open");
    header.classList.remove("mobile");
  } else {
    hamburg_btn.classList.add("open");
    header.classList.add("mobile");
  }
});
