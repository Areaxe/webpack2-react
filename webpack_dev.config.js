var webpack = require('webpack');
var webpackConfig = require("./webpack.config");
var merge = require("webpack-merge");

var config = {
  devtool: "cheap-eval-source-map",
  plugins: [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('devepment')
    })
  ],
};

module.exports = merge( webpackConfig, config );
