var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var sass = require('gulp-sass');
var copy = require('gulp-copy');
var del = require('del');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src(['src/scss/**/styles.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.stream());
});

gulp.task('js', gulp.series( function() {
  return gulp.src(['src/**/*.js'])
    .pipe(copy('assets', { prefix: 1 }));
}));

gulp.task('del', function () {
  return del([
    'build'
  ]);
});

gulp.task('build', gulp.series(['del', 'sass', 'js'], function() {
  return gulp.src(['assets/**/*', './index.html'])
    .pipe(copy('build/'));
}));

gulp.task('serve', gulp.series(['sass', 'js'], function() {
  browserSync.init({
    server: {
      baseDir: '.'
    }
  });

  gulp.watch(
    ['src/scss/**/*'],
    gulp.series(['sass'])
  );

  gulp.watch(
    ['src/js/**/*'],
    gulp.series(['js'])
  );

  gulp.watch(
    ['*.html', 'parser/**/*', 'assets/css/**/*.css', 'assets/js/**/*.js']
  ).on('change', reload);
}));
