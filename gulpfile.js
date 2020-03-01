var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var reload = browserSync.reload;
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function() {
  return gulp.src('src/scss/**/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.stream());
});

gulp.task('serve', function() {
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
    ['*.html', 'parser/**/*', 'assets/css/**/*.css', 'assets/js/**/*.js']
  ).on('change', reload);
});
