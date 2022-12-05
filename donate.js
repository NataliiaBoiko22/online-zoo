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
// ! checker field
let radioCheckers = [...document.getElementsByName("amount")];
let anotherAmount = document.getElementById("anotherAmount");
console.log(anotherAmount);
console.log(radioCheckers);
for (let i = 0; i < radioCheckers.length; i++) {
  console.log(radioCheckers[i].checked);
  if (radioCheckers[i].checked) {
    anotherAmount.value = radioCheckers[i].value.replace(/\D+/, "");
  }
}
radioCheckers.forEach((el) => {
  el.addEventListener("click", () => {
    anotherAmount.value = el.value.replace(/\D+/, "");
  });
});
// ! another amound field
const anotherAmountClick = (e) => {
  anotherAmount.value = e.target.value;
};
const inputCheck = () => {
  let inputValue = anotherAmount.value;
  let radioCheckers = [...document.getElementsByName("amount")];
  for (let i = 0; i < radioCheckers.length; i++) {
    if (inputValue === radioCheckers[i].value.replace(/\D+/, "")) {
      console.log(inputValue);
      radioCheckers[i].checked = true;
    } else {
      radioCheckers[i].checked = false;
    }
    if (inputValue === " ") {
      anotherAmount.value === 100;
    }
  }
};
anotherAmount.addEventListener("input", anotherAmountClick);
anotherAmount.addEventListener("input", inputCheck);
anotherAmount.addEventListener("blur", anotherAmountClick);
anotherAmount.addEventListener("blur", inputCheck);
anotherAmount.value === 100;
