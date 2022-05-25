const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');
const gulpSass = require('gulp-sass');
const dartSass = require('sass');
const sass = gulpSass(dartSass);
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');


gulp.task('watch', function() {
    watch(['./build/*.html','./build/css/**/*.css'],gulp.parallel(browserSync.reload));
    watch('./sass/**/*.scss',gulp.parallel('scss'));
    watch('./js/**/*.js',gulp.parallel(browserSync.reload));
});

gulp.task('copy:index',function (callback) {
    return gulp.src('index.html')
        .pipe(gulp.dest('./build/'));
    callback();
})

gulp.task('copy:image',function (callback) {
  return gulp.src('image/**')
      .pipe(gulp.dest('./build/image'));
  callback();
})

gulp.task('scss',function (callback) {
    return gulp.src('./scss/index.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
          overrideBrowserslist: ['last 2 versions'],
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream());
        callback()
});
  
gulp.task('browserHost', function() {
  browserSync.init({
    server: {
      baseDir: "./build"
    }
  }); 
});

gulp.task('del',function (callback) {
    return del('./build');
    callback()
})

gulp.task('default', gulp.series(
    'del',
    gulp.parallel('scss','copy:index','copy:image'),
    gulp.parallel('browserHost','watch'),
  ));