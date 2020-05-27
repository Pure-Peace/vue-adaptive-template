# 🔥vue-adaptive-template
轻便、简洁的自适应vue页面模板，添加了常用库及插件。

🌽基于vue-cli4，使用原生css编写，未添加任何ui库，打包后（去除图片）仅80kb！

---
demo：http://skm.miya.ink


- 🌺[English](https://github.com/Pure-Peace/vue-adaptive-template/blob/master/README_en.md) / 💖中文


## 📘它拥有这些:
- 🍊基于`vue-cli4`
- 🌕路由: `vue-router`
- 🍁国际化: `vue-i18n`
- 🌝网络请求器: `axios`
- 🚅数据管理: `vuex`
- 💚css预处理器: `less`
- 🍰代码格式化：`eslint`
- 🌠svg图标支持：`svg-sprite-loader`
- 🍩顶部进度条：`nprogress`
- ⛅Gzip打包优化：`compression-webpack-plugin`
- 🙉打包文件大小分析：`webpack-bundle-analyzer`

## 🔍以及这些:
- 🍬自适应的页面设计！
- 🌺可自行调整的页面框架
- 🍮已优化的`vue.config.js`，超小的打包体积（80kb）
- 🍀封装的svg组件，任何页面方便调用！
- 🌴一个python小脚本，解决对svg设置color属性不管用的情况

## 📷Screenshots:
![screenshot](http://otsu.fun/demos2/ss4.png)
![screenshot](http://otsu.fun/demos2/ss7.png)
![screenshot](http://otsu.fun/demos2/ss3.png)
![screenshot](http://otsu.fun/demos2/ss2.png)
![screenshot](http://otsu.fun/demos2/ss5.png)
![screenshot](http://otsu.fun/demos2/ss6.png)
![screenshot](http://otsu.fun/demos2/ss1.png)
![screenshot](http://otsu.fun/demos2/ss8.png)


## 1. 安装
```
yarn install
```

## 2. 运行
```
yarn serve
```

## 3. 打包
```
yarn build
```

## 📘说明:

### 1. svg组件已经封装，使用方法如下↓

在`assets/svg`下放置svg图标，然后按下方代码在页面中直接调用即可。

如遇到设置颜色无效，请使用`assets/svg`目录下的`clear_fill.py`去除svg图片自带的`fill`属性。（就是它覆盖了我们设置的color属性！）

```vue
<!--这样即可调用svg图标组件-->
<svg-icon type="svg文件名" />

<!--这样即可设置颜色-->
<svg-icon type="svg文件名" style="color: #FFFFFF" />
```

### 2. 生成打包文件大小分析

插件`webpack-bundle-analyzer`已经添加了，去除`vue.config.js`里关于`BundleAnalyzerPlugin`的注释，然后`yarn build`或`npm run build`即可。


