export function openMenu() {
  const icon = document.querySelector("#hamburg-btn");
  const header = document.querySelector(".header");
  icon.addEventListener("click", () => {
    if (icon.classList.contains("open")) {
      icon.classList.remove("open");
      header.classList.remove("mobile");
    } else {
      icon.classList.add("open");
      header.classList.add("mobile");
    }
  });
}
function getActiveLinks() {
  const current_location =
    location.href; /* URL of curent page as displayed on address bar */
  const links =
    document.getElementsByClassName(
      "nav-link"
    ); /* Array of anchor elements in li */
  const this_length = links.length; // length of Array
  for (let p = 0; p < this_length; p++) {
    if (links[p].href === current_location) {
      links[p].classList.add("active");
    }
  }
}

const getBCrumbPage = () => {
  /** dynamic page bread crumb **/
  const page = document.getElementById("current_page");

  if (page) {
    const temp = location.href.split("/");
    const list = temp[temp.length - 1].replace(".html", "");
    page.innerHTML = list;
  }
};

export { getBCrumbPage, getActiveLinks };
