var gulp = require("gulp");
var del = require("del");
var webpack = require("webpack-stream");
var webpackConfig = require("./webpack.config.js");
var nodemon = require("nodemon");
var path = require("path");

/**
 * Build (Webpack)
 */

gulp.task("clean:build", function() {
  del("./public/js/*");
});

gulp.task("build", ["clean:build"], function() {
  return gulp
    .src("./app/app.js")
    .pipe(webpack(webpackConfig))
    .on("error", function handleError() {
      this.emit("end");
    })
    .pipe(gulp.dest("./"));
});

/**
 * Node Server (Express)
 */

gulp.task("server:node", function() {
  nodemon({
    exec: "node ./node_modules/babel-cli/bin/babel-node.js ./server.js",
    watch: ["server.js"],
    ext: "js html"
  });
});


/**
 * Main Tasks
 */

gulp.task('server',['server:node']);
gulp.task('watch',['build','watch:build']);
gulp.task('default',['server']);

