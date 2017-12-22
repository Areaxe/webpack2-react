let webpack = require("webpack");
let webpackConfig = require("./webpack.config");
let merge = require("webpack-merge");

let config = {
  devtool: "cheap-eval-source-map",
  plugins: [
    new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify("devepment")
    })
  ],
};

module.exports = merge( webpackConfig, config );
