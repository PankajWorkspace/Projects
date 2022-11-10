const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

const navtoggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const linkcontainer = document.querySelector(".link-container");

navtoggle.addEventListener("click", function () {
  const containerHeight = linkcontainer.getBoundingClientRect().height;
  const linkHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linkcontainer.style.height = `${linkHeight}px`;
  } else {
    linkcontainer.style.height = 0;
  }
});

// *************************fixed nav and topup btn***************************

const navbar = document.getElementById("nav");
const toplink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  if (scrollHeight > 500) {
    toplink.classList.add("show-link");
  } else {
    toplink.classList.remove("show-link");
  }
});

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const containerLength = document.querySelector("link-container");
    const navHeight = navbar.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");

    let position = element.offsetTop - navHeight;

    if (navHeight > 82) {
      position = position + containerLength;
    }

    if (!fixedNav) {
      position = position - navHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });

    linkcontainer.style.height = 0;
  });
});
