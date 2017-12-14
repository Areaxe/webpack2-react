var path = require('path');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack'); //访问内置的插件
var TransferWebpackPlugin = require('transfer-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    main:'./src/main.jsx',
    // vendor:['react','react-dom']
  },
  devtool: "cheap-eval-source-map",
  devServer:{
    contentBase: './src/www',  //Relative directory for base of server
    hot: true,        //Live-reload  
    inline: true,
    port: 3001,        //Port Number
    host: 'localhost'    //'localhost'  //Change to '0.0.0.0' for external facing server
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath:'/',
  },
  resolve: {
    extensions: [".jsx", ".js","scss","css"],
    alias: {
      components: path.join(__dirname, 'src/components'),
      pages:path.join(__dirname, 'src/pages'),
      utils:path.join(__dirname, 'src/utils'),
      assets:path.join(__dirname,'src/assets')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
       {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, "src")],
        use:['babel-loader']
      },
      { 
        test: /\.scss$/, 
        use: ['style-loader','css-loader','sass-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|mp3)$/,
        use: [{
          loader: 'file-loader?name=[name].[ext]',
        }]
      },
        // {
        //   test: /\.(csv|tsv)$/,
        //   use: [
        //     'csv-loader'
        //   ]
        // },
        // {
        //   test: /\.xml$/,
        //   use: [
        //     'xml-loader'
        //   ]
        // }
        // {
        //   test:/\.scss$/,
        //   use:[
        //     node-sass
        //   ]
        // }
      ]
    },
    plugins: [
      new TransferWebpackPlugin([{from: 'www'}], path.resolve(__dirname, "src")),
      new ExtractTextPlugin("styles.css"),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
    })
    ],
};