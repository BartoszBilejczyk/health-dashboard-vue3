const webpack = require("webpack");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/styles/global/_mixins.scss";
          @import "@/assets/styles/global/_variables.scss";
        `
      },
      less: {
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    port: 8080
  }
};
