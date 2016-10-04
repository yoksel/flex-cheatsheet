var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var minifyCss = require('gulp-minify-css');
var browserSync = require('browser-sync');
var reload = browserSync.reload;


gulp.task('sass', function() {
  return sass('src/scss/**/styles.scss')
    .pipe(minifyCss())
    .pipe(gulp.dest('assets/css'))
});

// watch files for changes and reload
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: '.'
    }
  });

  gulp.watch(['src/scss/**/*'], ['sass']);
  gulp.watch(['*.html', 'assets/css/**/*.css', 'assets/js/**/*.js'], {cwd: '.'}, reload);
});
