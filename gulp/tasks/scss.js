import gulpSass from "gulp-sass";
import dartSass from "sass";
import autoprefixer from "gulp-autoprefixer";
import sourcemaps from "gulp-sourcemaps";

const sass = gulpSass(dartSass)

export const scss =(done) => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: true })
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 3 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(app.gulp.dest(app.path.build.cssFolder))
        .pipe(app.plugins.browsersync.stream());
    done()
}