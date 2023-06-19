const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({

  devServer: {
    proxy: {
      'api': {       //'/api'是自行设置的请求前缀
        target:"http://192.168.1.119:8001",
        pathRewrite: { '^/api': '' },  //路径重写，（正则）匹配以api开头的路径为空（将请求前缀删除）
        changeOrigin: true ,
      },
    },
  }
})
