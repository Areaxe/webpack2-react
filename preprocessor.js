// require("babel-register"); // Enable ES6 in webpack config

// const webpackAlias = require("jest-webpack-alias");
// const babelJest = require("babel-jest");

// module.exports = {
//   process: function(src, filename) {
//     if (filename.indexOf("node_modules") === -1) {
//       src = babelJest.process(src, filename);
//       src = webpackAlias.process(src, filename);
//     }
//     return src;
//   }
// };


const testsContext = require.context(".", true, /test$/);
testsContext.keys().forEach(testsContext);