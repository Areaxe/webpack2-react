function noop() {
  return null;
}

require.extensions[".styl"] = noop;
require.extensions[".scss"] = noop;
require.extensions[".png"] = noop;

// package.json

// "moduleNameMapper": {
//   "\\.(css|scss)$": "<rootDir>/test/css-null-compiler.js"
// },