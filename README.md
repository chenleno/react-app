# React-App
## 项目说明
基于create-react-app创建的后台模板demo,包含react-router,react-redux,antd等常用库。
旨在锻炼自己手动搭建基于react栈类后台管理系统的能力。
## 前端JS库，工具，框架
- react-router ^5.1.2
- react-router-dom ^5.1.2
- redux ^4.0.5
- react-redux ^7.2.0
- antd ^3.26.9
- @lenochen/dio // 个人编写的工具函数库，发布至npm
## 准备工作
> 使用Yarn安装项目依赖
- $ yarn
## 使用
- $ yarn start
## 文件结构
    |-- index.js              // 项目主入口
    |-- components            // 公共组件
    |-- layout                // 布局
    |    |-- Header.jsx       // 头部导航
    |    |-- Sidebar.jsx      // 侧边导航
    |-- modules               // 业务模块
    |    |-- dashbard         // 工作台
    |    |-- login            // 登录页
    |    |-- setting          // 设置页
    |-- reducers              // redux相关
    |-- utils                 // 常用工具函数