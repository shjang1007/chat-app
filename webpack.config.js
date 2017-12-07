const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/chat.jsx",
  output: {
    filename: "./public/bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["react", "env"]
        }
      }
    ]
  },
  devtool: "source-maps"
};
