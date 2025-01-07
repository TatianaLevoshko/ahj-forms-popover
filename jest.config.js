// jest.config.js
module.exports = {
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules", "src/js"],
  transform: {
    "^.+\\.js$": "babel-jest",
  },
};
