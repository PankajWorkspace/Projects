const btns = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");
const about = document.querySelector(".about");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  // console.log(e.target)

  // if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });

    contents.forEach(function (article) {
      article.classList.remove("active");
    });

    const element = document.getElementById(id);
    element.classList.add("active");
  // }
});
