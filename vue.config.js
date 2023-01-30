const { defineConfig } = require('@vue/cli-service')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/seika5.github.io/',
  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },
  configureWebpack: {
    plugins: [new MiniCssExtractPlugin()] 
  }
})
