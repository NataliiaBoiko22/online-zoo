// ! burger menu
const burgerButton = document.getElementsByClassName("header-menu__burger")[0];
const navBar = document.getElementsByClassName("header__container_double")[0];
const closeBtn = document.getElementsByClassName("btn-x-box")[0];
burgerButton.addEventListener("click", () => {
  navBar.classList.toggle("active");
  const overlay = document.querySelector(".overlay");
  overlay.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  navBar.classList.remove("active");
  const overlay = document.querySelector(".overlay");
  overlay.classList.remove("active");
});
const overlay = document.querySelector(".overlay");
overlay.addEventListener("click", () => {
  navBar.classList.remove("active");
  overlay.classList.remove("active");
});

// ! carousel-random pet-block
let carouselMain = document.getElementById("carousel");
next = document.getElementById("next");
prev = document.getElementById("prev");
next.addEventListener("click", () => {
  let item = [...carouselMain.getElementsByClassName("content")];
  for (let i = 0; i < item.length; i++) {
    newArray = item.slice().sort(() => Math.random() - 0.5);
    for (let j = 0; j < newArray.length; j++) {
      carouselMain.append(newArray[j]);
    }
  }
});
prev.addEventListener("click", () => {
  let item = [...carouselMain.getElementsByClassName("content")];
  for (let i = 0; i < item.length; i++) {
    newArray = item.slice().sort(() => Math.random() - 0.5);
    for (let j = 0; j < newArray.length; j++) {
      carouselMain.append(newArray[j]);
    }
  }
});
// !.......................................

// ! Carousel testimonial block
let elem = document.querySelector('input[type="range"]');
const testimonails = document.querySelector(".testimonials__card");
testimonails.style.marginLeft = 0;
elem.addEventListener("input", () => {
  let margTrans = elem.value * 25;
  if (window.innerWidth <= 1000 && window.innerWidth >= 640) {
    margTrans = elem.value * 29.5;
  }
  testimonails.style.marginLeft = -margTrans + "%";
});
// !.......................................

// !  Pop-up testimonial block
const arrTestimonials = document.querySelectorAll(".testimonials__card");
const arrTestimonialsDouble = document.querySelectorAll(".pop__block");
for (let i = 0; i < arrTestimonials.length; i++) {
  arrTestimonials[i].addEventListener("click", () => {
    arrTestimonialsDouble[i].classList.toggle("active");
    overlay.classList.toggle("active");
  });
  overlay.addEventListener("click", () => {
    overlay.classList.remove("active");
    arrTestimonialsDouble[i].classList.remove("active");
  });
}
// !.......................................
