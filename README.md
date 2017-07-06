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

由  
``` 
{
  test: /\.css?$/,
  loaders : [
    'style-loader',
    'css-loader'
  ]
},
  ```

变成
``` 
{
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader'
  ]
},
````
webpack 2 的ExtractTextPlugin.extract模块特殊，从
``` 
{ 
  test: /\.scss$/, 
  loader: ExtractTextPlugin.extract("style", "css!sass") 
},
 ````
变成
```` 
{ 
  test: /\.scss$/, 
  use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader'})
 }  
 ````

#### 2、resolve模块 
extensions属性去掉了空值:由 `  ["", ".js", ".jsx"] ` 变为 `[".jsx", ".js"] `


## 注意事项：
当入口有多个的时候，output应该用[name].js来代替


### 相关项目包：

* babel:[babel](http://babeljs.io)
* babel-loader：[babel-loader](https://github.com/babel/babel-loader)
* react-router版本4:[react-router v4](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/migrating.md)


### 项目结构：

* assets：主要存放图片或者字体
* styles：主要存放公用样式，包括主题色和基本样式

#### webpack配置：
#### devServer：
1. contentBase：提供页面显示入口文件，运行build以后，相关路径的html代码会被打包到设定的输出目录下
2. hot和inline:
  - hot 实现页面异步刷新
  - inline webpack将自动打包并且刷新浏览器
 ( hot和inline可以直接在package.json的项目启动命令行里面配置)

##### webpack-dev-server有两种启动模式：
　　- iFrame：该模式下修改代码后会自动打包，但是浏览器不会自动刷新
　　- inline：内联模式，该模式下修改代码后，webpack将自动打包并且刷新浏览器，让我们看到最终的修改效果
其它配置
   - --progress 打印打包日志
   - --colors -c 带颜色的日志（官方是这么描述的，但我没看到颜色...）






