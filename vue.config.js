const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
	// pages 里面进行多入口配置，其中 pages 这个对象的 key 的字段就是用于访问该项目的路径
  pages: {
    // index 表示默认访问入口，这个命名是固定的，这里配置为 index1 项目
    index: {	// 运行后的访问路径就是默认路径，比如 http://localhost:8081/ 或 http://localhost:8081/index
      entry: './src/index1/main.js',
      template: './src/index1/index.html',  // template 对应的 index.html 这里也改为了每个项目里面独立的 index.html，当然也可以都使用 public 目录下的 index.html
      filename: 'index.html',	// 打包后的首页文件名，可以不自定义。如果不自定义的话，就默认使用入口 key 字段作为名字
			// chunks 配置的是这个项目打包后需要加载的具体资源块，可以不自定义配置。chunk-vendors 和 chunk-common 是默认加载的内容，index 是自定义的内容，注意：index1 的命名必须和入口字段的命名保持一直，
			// 否则页面会加载不出来（我对比了下正确命名和不正确命名两者打包后 .html 页面引用资源的区别在于不正确命名的情况下会少引用一个 css 文件，可能是这个导致的）
      chunks: ['chunk-vendors', 'chunk-common', 'index'],  
    },
    index2: {	// 运行后的访问路径就是 /index2 路径，比如 http://localhost:8081/index2
      entry: './src/index2/main.js',
      template: './src/index2/index.html',
      // filename: 'index2.html',
      // chunks: ['chunk-vendors', 'chunk-common', 'index2'],
    },
  },
	publicPath: '/',
  runtimeCompiler: true,
  chainWebpack: config => {
    // 自定义快捷访问路径
    config.resolve.alias
      .set('@index1_components', resolve('src/index1/components'))
      .set('@index2_components', resolve('src/index2/components'))
      .set('@index2_assets', resolve('src/index2/assets'))
      .set('@index2_pages', resolve('src/index2/pages'))
  },
}
