import { JSDOM } from "jsdom";

const html = `
  <div class="container">
    <button class="btn">Click to toggle popover</button>
    <div class="popover">
      <h3 class="title">Popover Title</h3>
      <p class="content">And here is some amazing content. It is very engaging. Right?</p>
    </div>
  </div>
`;

// Вспомогательная функция для настройки DOM
function setupDOM() {
  const dom = new JSDOM(html, { runScripts: "outside-only" });
  const { document } = dom.window;

  const button = document.querySelector(".btn");
  const popover = document.querySelector(".popover");

  // Логика toggle
  button.addEventListener("click", () => {
    if (popover.classList.contains("active")) {
      popover.classList.remove("active");
    } else {
      popover.classList.add("active");
    }
  });

  return { button, popover };
}

test("Добавление класса active при клике", () => {
  const { button, popover } = setupDOM();

  button.click(); // Симуляция клика
  expect(popover.classList.contains("active")).toBeTruthy();
});

test("Удаление класса active при повторном клике", () => {
  const { button, popover } = setupDOM();

  button.click(); // Первый клик
  button.click(); // Второй клик
  expect(popover.classList.contains("active")).toBeFalsy();
});
