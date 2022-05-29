import gulpSass from "gulp-sass";
import dartSass from "sass";

const sass = gulpSass(dartSass)

export const scss =(done) => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: true })
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(app.gulp.dest(app.path.build.css))
    done()
}