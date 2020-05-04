"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var less = require("gulp-less");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();

gulp.task("css", function () {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("source/css"))
    .pipe(server.stream());
});

gulp.task("server", function () {
  server.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/less/**/*.less", gulp.series("css"));
  gulp.watch("source/*.html").on("change", server.reload);
});

gulp.task("start", gulp.series("css", "server"));

// "use strict";

// var gulp = require("gulp");
// var plumber = require("gulp-plumber");
// var sourcemap = require("gulp-sourcemaps");
// var rename = require("gulp-rename");
// var server = require("browser-sync").create();

// var less = require("gulp-less");
// var postcss = require("gulp-postcss");
// var autoprefixer = require("autoprefixer");
// var csso = require("gulp-csso");

// var imagemin = require("gulp-imagemin");
// var webp = require("gulp-webp");
// var svgstore = require("gulp-svgstore");
// var posthtml = require("gulp-posthtml");
// // var include = require("posthtml-include");
// var jsmin = require('gulp-jsmin');
// var del = require("del");

// gulp.task("css", function () {
//   return gulp.src("source/less/style.less")
//     .pipe(plumber())
//     .pipe(sourcemap.init())
//     .pipe(less())
//     .pipe(postcss([
//       autoprefixer()
//     ]))
//     .pipe(sourcemap.write("."))
//     .pipe(gulp.dest("source/css"))
//     .pipe(server.stream());
// });

// gulp.task("sprite", function () {
//   return gulp.src("source/img/icon-*.svg")
//     .pipe(svgstore({
//       inlineSvg: true
//     }))
//     .pipe(rename("sprite.svg"))
//     .pipe(gulp.dest("build/img"));
// });

// // gulp.task("html", function () {
// //   return gulp.src("source/*.html")
// //     .pipe(posthtml([
// //       include()
// //     ]))
// //     .pipe(gulp.dest("build"));
// // });


// gulp.task("images", function() {
//   return gulp.src("source/img/**/*.{png,jpg,svg}")
//     .pipe(imagemin([
//       imagemin.optipng({optimizationlevel: 3}),
//       imagemin.mozjpeg({progressive: true}),
//       imagemin.svgo()
//     ]))
//     .pipe(gulp.dest("build/img"));
// });

// gulp.task("webp", function () {
//   return gulp.src("source/img/**/*.{png,jpg}")
//     .pipe(webp({quality: 90}))
//     .pipe(gulp.dest("build/img"));
// });

// gulp.task("server", function () {
//   server.init({
//     server: "build/",
//     notify: false,
//     open: true,
//     cors: true,
//     ui: false
//   });

//   gulp.watch("source/less/**/*.less", gulp.series("css"));
//   gulp.watch("source/img/icon-*.svg", gulp.series("sprite", "html", "refresh"));
//   gulp.watch("source/*.html", gulp.series("html", "refresh"));
// });

// gulp.task("refresh", function (done) {
//   server.reload();
//   done();
// });

// gulp.task("clean", function () {
//   return del("build");
// });


// gulp.task("copy", function () {
//   return gulp.src([
//     "source/fonts/**/*.{woff,woff2}",
//     "source/img/**",
//     "source/js/**",
//     "source/*.ico"
//   ], {
//     base: "source"
//   })
//   .pipe(gulp.dest("build"));
// });

// gulp.task("build", gulp.series(
//   "clean",
//   "copy",
//   "images",
//   "webp",
//   "css",
//   "sprite",
//   "html"
// ));

// gulp.task("start", gulp.series("build", "server"));
