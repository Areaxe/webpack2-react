项目框架搭建说明：
1 根目录
1 .babelrc文件
因为现在还有很多浏览器不支持es6语法，babelrc主要用来将es6转化成es5代码
{
  "presets": ["env","react"]
}

package.json文件
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "start": "webpack-dev-server --config webpack.config.js --progress --open --colors"
  },
package.json文件主要是用来存放引用包，当你运行npm i的时候，npm或者cnpm会在package.json包里面，根据记录引入相关包。此外，package.json文件还用来写入启动脚本，比如该项目的package.json文件，里面有一个script字段，build字段对应的数据，就是用来编译代码的，start字段，就是当你执行命令的时候，跑的文件,我的跑的是webpack-dev-server文件，配置文件运行的是webpack.config.js文件，还有其他两个webpackage.*.*.js的文件暂时我还没用到


webpack.config.js文件，定义了项目启动的入口文件和输出文件以及其路径，相关功能看官网，内容比较多～
