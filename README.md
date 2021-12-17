# VUE_MPA
基于 `vue2.x` 的多页应用（多入口文件项目）基本框架，以及相关配置的详细说明。

**核心配置及详细说明见文件 `vue.config.js` 中的 `pages` 代码块。**

目前仓库内包含了两个项目，`index1` 和 `index2`。

`index1` 只包含了一个首页，啥也没配。

`index2` 项目中增加了 `vue-router` 的路由配置，关于子项目内路由的跳转配置在 `router.js` 中有相应的示例和说明。

此外，在 `index2` 这样的子项目中，除了可以配置独立的路由功能外，也可以自由配置相应的 `axiso`、`store` 等功能，当然，如果子项目独立配置的功能如果很多的话，那为什么不考虑全部独立成单独的 `SPA` 呢。

默认项目（`index1`）的在线演示地址：https://gonghongchen.github.io/VUE_MPA

`index2` 的在线演示地址：https://gonghongchen.github.io/VUE_MPA/index2