import { getBCrumbPage, getActiveLinks, openMenu } from "./client.js";
import { getLinks, scrollNavbar } from "./scroll.js";

fetch("./nav.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("header").innerHTML = data;

    openMenu();
    getActiveLinks();
    getLinks();
    scrollNavbar();
    fetch("./footer.html")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        document.querySelector("footer").innerHTML = data;
        const date = document.getElementById("date");
        date.innerHTML = new Date().getFullYear();
      });
  });

fetch("./breadcrumb.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.getElementById("breadcrumb").innerHTML = data;
    getBCrumbPage();
  });
