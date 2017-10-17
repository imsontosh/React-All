var path = require("path");

module.export = {
  entry: "./app/app.js",
  output: {
    filename: "public/js/bundle.js"
  },
  devtool: "inline-sourcemap",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          cacheDirectory: true,
          presets: ["react", "es2015"],
          compact: false
        }
      }
    ]
  }
};
