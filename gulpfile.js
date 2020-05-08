const gulp = require("gulp");
const sass = require("gulp-sass");
const ejs = require("gulp-ejs");
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create();
const postcss = require("gulp-postcss");
// const autoprefixer = require("gulp-autoprefixer");
const autoprefixer = require("autoprefixer");

function buildSass(cb) {
  gulp
    .src("./src/sass/*.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(
      postcss([
        autoprefixer({
          Browserslist: [
            "last 2 versions",
            "ie >= 11",
            "Android >= 4",
            "ios_saf >= 8",
          ],
          cascade: false,
        }),
      ])
    )
    .pipe(gulp.dest("./dist/html/css"));
  cb();
}

function buildEjs(cb) {
  gulp
    .src(["./src/ejs/pages/*.ejs", "!./src/ejs/**/_*.ejs"])
    .pipe(ejs())
    .pipe(rename({ extname: ".html" }))
    .pipe(gulp.dest("./dist/html"));
  cb();
}

function watchEjs(cb) {
  gulp
    .watch(["./src/ejs/pages/*.ejs"], buildEjs)
    .on("change", browserSync.reload);
  cb();
}

function watchSass(cb) {
  gulp.watch(["./src/sass/*.scss"], buildSass).on("change", browserSync.reload);
  cb();
}

function server(cb) {
  browserSync.init({
    server: {
      baseDir: "./dist/html",
    },
  });
  cb();
}

exports.watch = gulp.parallel(watchSass, watchEjs, server);
exports.default = gulp.parallel(buildSass, buildEjs);
