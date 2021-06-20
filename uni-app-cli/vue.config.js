const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        {
          from: path.join(__dirname, "src/utils"),
          to: path.join(__dirname, "dist", process.env.NODE_ENV === "production" ? "build" : "dev", process.env.UNI_PLATFORM, "utils"),
        }
      ]),
    ],
  },
  devServer:{
    host:'0.0.0.0',
    disableHostCheck: true,
    port:'8080',
    open:false,
  }
};
