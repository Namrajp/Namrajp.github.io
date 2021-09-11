import { getBCrumbPage, getActiveLinks, openMenu } from "./client.js";

fetch("./nav.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("header").innerHTML = data;

    openMenu();
    getActiveLinks();
    getBCrumbPage();

    fetch("./footer.html")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        document.querySelector("footer").innerHTML = data;
      });
  });
// hello();

// $(function () {
//   $("#nav").load("./nav.html");
//   // $("#bradcrumb").load("./nav.html");
//   $("#footer").load("./footer.html");
//   $("#hero").load("./hero.html");
// })();
// https://stackoverflow.com/questions/3931529/is-not-a-function-jquery-error

// import * as JQuery from "./jquery.js";
// const $ = JQuery.default;

// jQuery(function ($) {
//   $("#nav").load("./nav.html");
//   // $("#bradcrumb").load("./nav.html");
//   $("#footer").load("./footer.html");
//   $("#hero").load("./hero.html");
// });

// import { hello } from "./client.js";
