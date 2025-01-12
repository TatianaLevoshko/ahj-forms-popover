import setupPopover from "../app.js";

describe("Функция setupPopover", () => {
  let button, popover;

  beforeEach(() => {
    document.body.innerHTML = `
      <button class="btn">Кнопка</button>
      <div class="popover">Всплывающее окно</div>
    `;
    button = document.querySelector(".btn");
    popover = document.querySelector(".popover");
    setupPopover(button, popover);
  });

  test("popover не активен по умолчанию", () => {
    expect(popover.classList.contains("active")).toBe(false);
  });

  test("клик на кнопку должен добавить класс 'active' в popover", () => {
    button.click(); // Клик на кнопку
    expect(popover.classList.contains("active")).toBe(true);
  });

  test("повторный клик на кнопку должен удалить класс 'active' из popover", () => {
    button.click();
    button.click();
    expect(popover.classList.contains("active")).toBe(false);
  });
});
