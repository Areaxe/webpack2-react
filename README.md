环境搭建：
--------
```
#!node

npm i

npm run build

npm start
```
open browser localhost:3000


### webpack2相对webpack1的部分变动

#### 1、module模块的对象

webpack1
``` 
{
  test: /\.css?$/,
  loaders : [
    'style-loader',
    'css-loader'
  ]
},
  ```

webpack2
``` 
{
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader'
  ]
},
````
webpack1
``` 
{ 
  test: /\.scss$/, 
  loader: ExtractTextPlugin.extract("style", "css!sass") 
},
 ````
webpack2
```` 
{ 
  test: /\.scss$/, 
  use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader'})
 }  
 ````

#### 2、resolve模块 
webpack2 extensions属性去掉了空值: `  ["", ".js", ".jsx"] ` => `[".jsx", ".js"] `


### 相关项目包：

* babel:[babel](http://babeljs.io)
* babel-loader：[babel-loader](https://github.com/babel/babel-loader)
* react-router版本4:[react-router v4](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/migrating.md)


### 项目结构：

* assets：主要存放图片或者字体
* styles：主要存放公用样式，包括主题色和基本样式

### webpack配置：
#### devServer：
1. contentBase：提供页面显示入口文件，运行build以后，相关路径的html代码会被打包到设定的输出目录下
2. hot和inline:
  *  hot   实现页面异步刷新
  *  inline   webpack将自动打包并且刷新浏览器
 ( hot和inline可以直接在package.json的项目启动命令行里面配置)

#### webpack-dev-server：

　*  iFrame：该模式下修改代码后会自动打包，但是浏览器不会自动刷新
　*  inline：内联模式，该模式下修改代码后，webpack将自动打包并且刷新浏览器，让我们看到最终的修改效果
  * --progress 打印打包日志
  * --colors -c 带颜色的日志（官方是这么描述的，但我没看到颜色...）






