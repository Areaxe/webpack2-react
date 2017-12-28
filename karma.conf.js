// Karma configuration
// Generated on Mon Dec 25 2017 21:29:08 GMT-0800 (PST)
const webpackEnv = {test: true};
const webpackConfig = require("./webpack_test.config");
const path = require("path");
module.exports = function(config) {
  config.set({
    basePath: "",
    frameworks: ["mocha"],
    preprocessors: {
      "./test/**/*.test.js": ["webpack"],
      "./test/setup.js": ["webpack"]
    },

    files: [
      "./test/**/*.test.js",
      "./test/setup.js"
    ],

    reporters: ["spec", "coverage"],

    webpack: webpackConfig,

    //  webpack: {
    //   module: {
    //     loaders: [
    //       {test: /\.css$/, loader: "style!css"},
    //       {test: /\.scss$/, loader: ["style-loader", "css-loader", "sass-loader"]},
    //       {
    //         test: /\.js$/,loader: "babel-loader",
    //         query: {
    //           compact: false,
    //           presets: ["es2015"],
    //           plugins: ["es6-promise"]
    //         }
    //       }
    //     ]
    //   },
    //   resolve: {
    //     modulesDirectories: ["", "src", "node_modules"]
    //   },
    // },
    //   webpack: { 
    //   devtool: "inline-source-map", //just do inline source maps instead of the default
    //   module: {
    //     loaders: [
    //       {
    //         test: /\.(js|jsx)$/,
    //         loader: "babel-loader",
    //         exclude: path.resolve(__dirname, "node_modules"),
    //         query: {
    //           presets: ["airbnb"]
    //         }
    //       }, {
    //         test: /\.scss$/,
    //         loader: "style-loader css-loader sass-loader",
    //       }
    //     ]
    //   },
    //   resolve: {
    //     extensions: [
    //       ".jsx", ".js", "scss", "css"
    //     ],
    //     alias : {
    //       components: path.join(__dirname, "src/components"),
    //       pages: path.join(__dirname, "src/pages"),
    //       utils: path.join(__dirname, "src/utils"),
    //       assets: path.join(__dirname, "src/assets")
    //     }
    //   },
    //   externals: {
    //     "react/addons": true,
    //     "react/lib/ExecutionEnvironment": true,
    //     "react/lib/ReactContext": true
    //   }
    // },

    reporters: ["progress"],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    singleRun: false,

    concurrency: Infinity,

    browsers: ["Chrome"],  //需要启动的浏览器

     babelPreprocessor: {
      options: {
        presets: ["airbnb"]
      }
    },

    plugins: [
      require("karma-webpack"),
      require("karma-mocha"),
      require("karma-coverage"),
      require("karma-chrome-launcher"),
       require("istanbul-instrumenter-loader"),
    ],
  });
};
