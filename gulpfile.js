import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

global.app = {
	path: path,
	gulp: gulp,
  plugins:plugins
}

import { clean } from './gulp/tasks/clean.js';
import { html } from './gulp/tasks/html.js';
import { scss } from './gulp/tasks/scss.js'
import { copyImg } from "./gulp/tasks/copyImg.js";
import { server } from './gulp/tasks/server.js';

const watch = () => {
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
}


const gulpDefaultFunction = gulp.series(
  clean,
  gulp.parallel(html, scss, copyImg ),
  gulp.parallel(server,watch)
)
const gulpBuild = gulp.series(
  clean,
  gulp.parallel(html, scss, copyImg ),
)

gulp.task("default", gulpDefaultFunction);
gulp.task("build", gulpBuild);