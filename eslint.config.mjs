import globals from "globals";
import pluginJs from "@eslint/js";
import jest from "eslint-plugin-jest";
import eslintPluginPrettier from "eslint-plugin-prettier"; // Исправлено: импорт настроек напрямую
import prettierConfig from "eslint-config-prettier"; // Для устранения конфликтов Prettier и ESLint

export default [
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  pluginJs.configs.recommended,
  prettierConfig, // Добавлен Prettier как конфигурация
  {
    plugins: {
      prettier: eslintPluginPrettier, // Подключение плагина Prettier
    },
    rules: {
      "no-unused-vars": "warn", // Предупреждения для неиспользуемых переменных
      "prettier/prettier": "error", // Применение правил Prettier
    },
  },
  {
    ignores: [
      "dist/*", // Игнорируем скомпилированные файлы
      "node_modules/", // Игнорируем зависимости
      "package-lock.json", // Игнорируем lock-файл npm
    ],
  },
  {
    files: ["**/*.test.js"], // Настройки для тестов
    ...jest.configs["flat/recommended"], // Настройки ESLint для Jest
    rules: {
      ...jest.configs["flat/recommended"].rules,
      "jest/prefer-expect-assertions": "off", // Отключение предпочтений для assert
    },
  },
];
