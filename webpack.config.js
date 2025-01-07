const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production", // 'production' для финальной сборки или 'development' для разработки
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    open: true,
    port: 3000,
    hot: true,
  },
  module: {
    rules: [
      // Транспиляция JavaScript с использованием Babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // Загрузка CSS
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // Используем MiniCssExtractPlugin для извлечения CSS
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Очистка папки dist
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
};
