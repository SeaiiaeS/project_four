export const copyImg = (done)=>{
    return app.gulp.src(app.path.imageFolder)
        .pipe(app.gulp.dest(app.path.build.imageFolder))
}