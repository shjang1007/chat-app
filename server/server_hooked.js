// use babel register package to transpile ES6 to ES5
const babelRegister = require("babel-register");

babelRegister({
  presets: ["env"]
});

// Any modules imported will be compiled
require("./server");
