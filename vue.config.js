/*
 * @Author: your name
 * @Date: 2021-09-16 22:51:51
 * @LastEditTime: 2021-12-12 12:17:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE"""
 * @FilePath: \vue-管理系统\video_admin\vue.config.js
 */
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath:"/", //指定部署的路径

  outputDir:"dist",

  assetsDir:"static",

  indexPath:"/",

  lintOnSave:true,

  devServer: {
    host: "localhost",
    port: 8080,
    // 让浏览器显示错误
    overlay: {
      warnings: true,
      errors: true
    }
  },

  productionSourceMap:true,

  // 支持svg
  chainWebpack:(config)=>{
    config.module.rules.delete("svg");// 删除默认的svg处理的配置
    config.module
    .rule('svg-sprite-loader')
    .test(/\.svg$/)
    .include
    .add(resolve('/src/assets/svgIcon')) //处理svg目录
    .end()
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({
      symbolId: 'icon-[name]'
    })
  },
  
  configureWebpack: {
    name: "管理系统",
    resolve: {
      alias: {
        "@": resolve("src"),
        "@utils": resolve("@/utils"),
        "@store": resolve("@/store"),
      },
    },
  },
};
