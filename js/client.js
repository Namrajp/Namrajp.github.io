export function openMenu() {
  const icon = document.querySelector("#hamburg-btn");
  const nav = document.querySelector(".nav");
  icon.addEventListener("click", () => {
    icon.classList.toggle("open");
    nav.classList.toggle("mobile");
    // if (icon.classList.contains("open")) {
    //   icon.classList.remove("open");
    //   nav.classList.remove("mobile");
    // } else {
    //   icon.classList.add("open");
    //   nav.classList.add("mobile");
    // }
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

// Why Prevent Default of link is required to print Page info??? Like using dataset-id in html on currentTarget, or filterorreduce.
// const getPage = () => {
//   const links = document.getElementsByClassName("nav-link");
//   Array.from(links).forEach((link) => {
//     link.addEventListener("click", (e) => {
//       e.preventDefault();
//       const name = e.currentTarget.getAttribute("href");
//       let temp = name.split("/");
//       temp = temp[temp.length - 1];
//       temp = temp.replace(".html", ""); // replaceis string func / sliceis array fn. slice need index while replace old and new value.
//       const page = document.getElementById("current_page");
//       page.innerHTML = temp;

//       console.log(temp);
//     });
//   });
// };
