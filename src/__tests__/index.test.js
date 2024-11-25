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

test("Popover toggles active class", () => {
  const dom = new JSDOM(html, { runScripts: "outside-only" });
  const { document } = dom.window;

  const button = document.querySelector(".btn");
  const popover = document.querySelector(".popover");

  // Логика для клика
  button.addEventListener("click", () => {
    popover.classList.toggle("active");
  });

  // Клик
  button.click();
  expect(popover.classList.contains("active")).toBeTruthy(); // Добавление класса

  // Повторный клик
  button.click();
  expect(popover.classList.contains("active")).toBeFalsy(); // Удаление класса
});
