项目框架搭建说明：
1 根目录
1 .babelrc文件
因为现在还有很多浏览器不支持es6语法，babelrc主要用来将es6转化成es5代码
{
  "presets": ["env","react"]
}

package.json文件
package.json文件主要是用来存放引用包，当你运行npm i的时候，npm或者cnpm会在package.json包里面，根据记录引入相关包。此外，package.json文件还用来写入启动脚本，比如该项目的package.json文件，里面有一个script字段，build字段对应的数据，就是用来编译代码的，run字段，就是当你执行命令的时候，跑的文件
