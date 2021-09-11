const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
};

module.exports = {
  output: {
    path: path.resolve(__dirname, "./dist/js"),
    filename: "[name].js",
  },
  plugins: [
    //   new HtmlWebpackPlugin({
    //     title: "webpack is interesting",
    //     template: path.resolve(__dirname, "./src/template.html"),
    //     filename: "index.html",
    //   }),
    new CleanWebpackPlugin(),
  ],

  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },

  // module: {
  //   rules: [
  //     // Images
  //     {
  //       test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
  //       type: "asset/resource",
  //     },
  //   ],
  // },
};

// module.exports = {
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: "webpack is interesting",
//       template: path.resolve(__dirname, "./src/template.html"),
//       filename: "index.html",
//     }),
//   ],
// };
