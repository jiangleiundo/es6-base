## es6 项目架构

### 主要依赖包版本

- gulp@3.9.1
- webpack@3.12.0
- webpack-stream@3.2.0
- babel-loader@7

### 使用方法：

- 直接下载压缩包或者clone下来
- 安装依赖，分别在es6-base目录下和server目录下执行 npm install 命令
- 使用 localhost:3000 打开项目
- 注意：
  - 项目使用的是ejs模板，使用编辑器打开.ejs时选择 html 类型

  - 在js文件中引入其他的js文件使用 require() 方法，使用import引入会报语法错误(暂未找到原因)

  - 鉴于babel默认只转换JavaScript新的语法而不转换新的API，比如 Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。如果想使用es6新增方法，必须使用babel-polyfill，为当前环境提供一个垫片。

    ```bash
    npm install babel-polyfill -S
    ```

    因为是一个 polyfill （它需要在你的源代码之前运行），我们需要让它成为一个 dependency，而不是一个 devDependency

