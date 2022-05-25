const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');
const gulpSass = require('gulp-sass');
const dartSass = require('sass');
const sass = gulpSass(dartSass)


gulp.task('watch', function() {
    watch(['./build/*.html','./build/css/**/*.css'],gulp.task(browserSync.reload));
});

gulp.task('browserHost', function() {
  browserSync.init({
    server: {
      baseDir: "./build"
    }
  }); 
});

gulp.task('default', function() {
    gulp.parallel(
        'browserHost'
    )
    });