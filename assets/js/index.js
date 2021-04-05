const some = document.querySelectorAll("a.works_click");

for (let elem of some) {
  elem.addEventListener("click", function (e) {
    e.preventDefault();

    const href = this.getAttribute("href").substring(1);
    const scrollTarget = document.getElementById(href);

    const topOffSet = 0;
    const elementPosition = scrollTarget.getBoundingClientRect().top;

    const offSetPosition = elementPosition - topOffSet;

    window.scrollBy({
      top: offSetPosition,
      behavior: "smooth",
    });
  });
}

// АНИМАЦИЯ END

const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  alert("Thank you 🖤");
});


const btn_twitter = document.getElementById("twitter");
btn.addEventListener("click", function () {
  alert("I don't use Twitter , but you can follow me on Instagram 🖤");
});
