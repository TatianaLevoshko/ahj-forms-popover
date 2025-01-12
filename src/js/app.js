const popover = document.querySelector(".popover");
const button = document.querySelector(".btn");

export default function setupPopover(button, popover, offset = 15) {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    popover.classList.toggle("active");

    updatePosition(popover, offset);
  });
}

function updatePosition(popover, offset) {
  const rect = popover.getBoundingClientRect();
  const tool = rect.height + offset;
  popover.style.transform = `translateY(-${tool}px)`;
}

document.addEventListener("DOMContentLoaded", () => {
  setupPopover(button, popover);
});
