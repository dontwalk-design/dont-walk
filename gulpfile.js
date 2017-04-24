var gulp = require('gulp'),
  postcss = require('gulp-postcss'),
  sourcemaps = require('gulp-sourcemaps'),
  cssnext = require('postcss-cssnext'),
  lost = require('lost'),
  cssnano = require('cssnano');

var paths = {
  cssSrc: 'src/assets/styles/',
  cssOut: 'public/assets/css/'
};

gulp.task('css', function() {
  return gulp.src(paths.cssSrc + '**/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([
      cssnext(),
      lost(),
      cssnano()
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.cssOut));
});

gulp.watch(paths.cssSrc + '**/*.css', ['css']);

gulp.task('default', [ 'css' ]);
