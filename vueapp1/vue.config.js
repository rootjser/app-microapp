const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8031,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
