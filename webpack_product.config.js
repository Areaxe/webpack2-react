var webpack = require('webpack');
var webpackConfig = require("./webpack.config");
var merge = require("webpack-merge");

var config = {
  devtool: "source-map",
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
};

module.exports = merge( webpackConfig, config );
