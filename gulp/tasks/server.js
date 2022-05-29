export const server = () => {
    app.plugins.browsersync.init({
        server: {
            baseDir: app.path.build.files
        },
        port: 3000
    });
}