let webpack = require("webpack");
let webpackConfig = require("./webpack.config");
let merge = require("webpack-merge");
const path = require("path");

let config = {
   module: {
	},
	externals: {
			"react/addons": true,
			"react/lib/ExecutionEnvironment": true,
			"react/lib/ReactContext": true
		}
};

module.exports = merge( webpackConfig, config );
