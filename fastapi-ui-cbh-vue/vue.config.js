const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/projects/cbh-admin',
  devServer: {
    watchFiles: {
      paths: ['src/**/*.*', 'public/**/*'],
      options: {
        usePolling: false,
      },
    },
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8888",
      },
      "/flask": {
        target: "http://127.0.0.1:9000",
        pathRewrite: {
          '^/flask': ''
        }
      }
    },
  },

  configureWebpack: {
    resolve: { extensions: [".ts", ".tsx", ".js", ".json"] },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/],
          }
        }
      ]
    }
  }

});
