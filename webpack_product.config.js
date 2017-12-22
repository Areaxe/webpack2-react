let webpack = require("webpack");
let webpackConfig = require("./webpack.config");
let merge = require("webpack-merge");

let config = {
  devtool: "source-map",
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify("production")
    })
  ],
};

module.exports = merge( webpackConfig, config );
