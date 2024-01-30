const click = document.querySelector(".click");
const btn = document.querySelector(".btn");
console.log(click);
function greetMe() {
  click.textContent = "Hello";
}
btn.addEventListener("click", greetMe);
