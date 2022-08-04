// ***** close mobile menu links using dynamic height of links***

function getLinks() {
  const navToggle = document.querySelector(".nav__toggle");
  const linksContainer = document.querySelector(".links-container");
  const links = document.querySelector(".nav__links");

  navToggle.addEventListener("click", function () {
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if (containerHeight === 0) {
      linksContainer.style.height = `${linksHeight}px`;
    } else {
      linksContainer.style.height = 0;
    }
  });
}

/** fixed navbar */
function scrollNavbar() {
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navigation");
    const navHeight = navbar.getBoundingClientRect().height;

    const scrollHeight = window.pageYOffset;
    if (scrollHeight > navHeight) {
      navbar.classList.add("fixed-nav");
    } else {
      navbar.classList.remove("fixed-nav");
    }
  });
}

export { scrollNavbar, getLinks };
