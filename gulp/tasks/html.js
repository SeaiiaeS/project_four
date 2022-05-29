import fileinclude from 'gulp-file-include';

export const html = (done) => {
    return app.gulp.src(app.path.src.html)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(app.gulp.dest(app.path.build.files))
        .pipe(app.plugins.browsersync.stream());
    done()
}