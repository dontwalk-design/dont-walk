var postcss = require('gulp-postcss');
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var cssnext = require('postcss-cssnext');
var lost = require('lost');
var cssnano = require('cssnano');
var htmlmin = require('gulp-htmlmin');

gulp.task('css', function() {
  var plugins = [
    cssnext(),
    lost(),
    cssnano()
  ];
  return gulp.src('./src/css/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./docs/assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('html', function() {
  return gulp.src('./src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('./docs'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('fonts', function() {
  return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('./docs/assets/fonts'))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './docs/'
    },
  })
});

gulp.task('watch', ['browserSync', 'css', 'html'], function() {
  gulp.watch('./src/css/**/*.css', ['css']);
  gulp.watch('./src/*.html', ['html']);
  gulp.watch('./src/js/**/*.js', browserSync.reload);
});

gulp.task('default', ['watch']);
