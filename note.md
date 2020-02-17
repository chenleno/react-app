# 项目手记
记录项目搭建顺序及遇到的问题
### 参考资料
[通过create-react-app 从零搭建react环境](https://segmentfault.com/a/1190000015301231)
> 使用 create-react-app
Q: 项目跑起来后想要使用antd,结果发现导入的组件没有样式?
> 运行 npm run eject 命令，分离配置文件
> 安装 babel-plugin-import （一个用于按需加载组件代码和样式的 babel 插件）,修改package.json
```javascript
"babel": {
  "presets": [
    "react-app"
  ],
  "plugins": [
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
  ]
},
```
> 踩坑
react-router v4 已上版本，对Router组件进行了分离，以往单一引用的Router此时要换成BrowserRouter
