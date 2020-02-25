var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');
var reload = browserSync.reload;

gulp.task('sass', function() {
  return sass('src/scss/**/styles.scss')
    .pipe(plumber())
    .pipe(cleanCSS())
    .pipe(gulp.dest('assets/css'))
    .pipe(reload({ stream:true }));
});

// watch files for changes and reload
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: '.'
    }
  });

  gulp.watch(
    ['src/scss/**/*'],
    gulp.series(['sass'])
  );
  gulp.watch(
    ['*.html', 'parser/**/*', 'assets/css/**/*.css', 'assets/js/**/*.js'],
    {cwd: '.'},
    reload
  );
});
