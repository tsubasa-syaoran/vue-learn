const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  devServer:{
    proxy:{
      '/api':{
          target:'http://localhost:8000',
          pathRewrite:{'^/api':''},
          ws: true, // 开启对websocket 的支持
          changeOrigin: true // 改变起源
        },
        '/abc':{
          target:'http://localhost:8001',
          pathRewrite:{'^/abc':''},
          ws: true,
          changeOrigin: true
        }
      }
    }
  }
)




