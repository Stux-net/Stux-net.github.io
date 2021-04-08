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
btn_twitter.addEventListener("click", function (e) {
e.preventDefault();
  alert("I don't use Twitter , but you can follow me on Instagram 🖤");
});

// scroll top /////////////////////////

let offset = 100;

const scrollUp = document.querySelector(".scroll-up");
const scrollUpSvgPath = document.querySelector(".scroll-up-svg-path");
const pathLength = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = "stroke-dashoffset 20ms";

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

// update Dashoffset

const updateDashoffset = () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const dashoffset = pathLength - (getTop() * pathLength) / height;
  scrollUpSvgPath.style.strokeDashoffset = dashoffset;
};

// on Scroll
window.addEventListener("scroll", function () {
  if (document.documentElement.clientWidth < 768) {
    offset = 300;
  }
  if (document.documentElement.clientWidth < 670) {
    offset = 400;
  }
  updateDashoffset();
  if (getTop() > offset) {
    scrollUp.classList.add("scroll-up-active");
  } else {
    scrollUp.classList.remove("scroll-up-active");
  }
});

// active

scrollUp.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});



