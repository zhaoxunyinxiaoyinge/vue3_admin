const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    host: "localhost",
    port: 8080,
  },
  configureWebpack: {
    name: "管理系统",
    resolve: {
      alias: {
        "@": resolve("src"),
        "@uitls": resolve("@/utils"),
        "@store": resolve("@/store"),
      },
    },
  },
};
