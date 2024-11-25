import "./style.css";

const popover = document.querySelector(".popover");
const button = document.querySelector(".btn");

button.addEventListener("click", (e) => {
  e.preventDefault();
  popover.classList.toggle("active");
  const rect = popover.getBoundingClientRect();
  const tool = rect.height + 15;
  popover.setAttribute("style", `transform: translateY(-${tool}px);`);
});
