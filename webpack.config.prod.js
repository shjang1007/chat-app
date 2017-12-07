
// import dependencies
const webpack = require("webpack");
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
  plugins:[
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      }
    })
  ],
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
