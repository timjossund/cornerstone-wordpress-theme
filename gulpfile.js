const { src, dest, series, watch } = require('gulp');
//const uglify = require('gulp-uglify');

//styles
const scss = require('gulp-sass')(require('sass'));
//const autoprefixer = require('gulp-autoprefixer');
const cssMinify = require('gulp-clean-css');

//scripts
const jsMinify = require('gulp-terser');

function styles() {
  return src('./src/styles/style.scss')
    .pipe(scss())
    //.pipe(autoprefixer('last 2 versions'))
    .pipe(cssMinify())
    .pipe(dest('./'))
  cb();
}

function scripts() {
  return src('./src/scripts/script.js')
    .pipe(jsMinify())
    .pipe(dest('./dist/scripts/'))
  cb()
}

function watchTask() {
  watch(
    [
      './src/styles/*.scss',
      './src/scripts/script.js'
    ],
    series(styles, scripts)
  )
}

exports.default = series(styles, scripts, watchTask);