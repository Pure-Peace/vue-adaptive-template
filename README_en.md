# 🔥vue-adaptive-template
Lightweight, compact adaptive vue project templates, add commonly used libraries and plug-ins.

🌽Based on vue-cli4, written in native css, without adding any ui library, only 80kb after packaging (removing pictures)!


demo：http://skm.miya.ink


## 📘It has these:
- 🍊Based on: `vue-cli4`
- 🌕Router: `vue-router`
- 🍁Internationalization: `vue-i18n`
- 🌝Network requester: `axios`
- 🚅Data management: `vuex`
- 💚css preprocessor: `less`
- 🍰Code formatting：`eslint`
- 🌠svg icon support：`svg-sprite-loader`
- 🍩Top progress bar：`nprogress`
- ⛅Gzip packaging optimization：`compression-webpack-plugin`
- 🙉Packing file size analysis：`webpack-bundle-analyzer`

## 🔍And these:
- 🍬Adaptive page design！
- 🌺Adjustable page frame
- 🍮Optimized `vue.config.js`, small package size (80kb)
- 🍀svg component, easy to call on any page!
-🌴 A small python script to solve the situation where setting the color attribute to svg is useless

## 📷Screenshots:
![screenshot](http://otsu.fun/demos2/ss4.png)
![screenshot](http://otsu.fun/demos2/ss7.png)
![screenshot](http://otsu.fun/demos2/ss3.png)
![screenshot](http://otsu.fun/demos2/ss2.png)
![screenshot](http://otsu.fun/demos2/ss5.png)
![screenshot](http://otsu.fun/demos2/ss6.png)
![screenshot](http://otsu.fun/demos2/ss1.png)
![screenshot](http://otsu.fun/demos2/ss8.png)


## 1. installation
```
yarn install
```

## 2. run
```
yarn serve
```

## 3. pack
```
yarn build
```

## 📘more:

### 1. The svg component has been encapsulated, and the method of use is as follows ↓

Svg icon placed in the `assets/svg`, then push the code to call you directly on the page.

If the setting color is invalid, please use `clear_fill.py` in the` assets / svg` directory to remove the `fill` attribute that comes with the svg image. (That is, it overrides the color attribute we set!)

```vue
<!--This can call the svg icon component-->
<svg-icon type="svg file name" />

<!--This way you can set the color-->
<svg-icon type="svg file name" style="color: #FFFFFF" />
```

### 2. Generate packed file size analysis

The plugin `webpack-bundle-analyzer` has been added, remove the notes about` BundleAnalyzerPlugin` in `vue.config.js`, and then `yarn build` or `npm run build`.

