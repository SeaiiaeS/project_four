import gulp from 'gulp';
import {path} from './gulp/config/path.js';

global.app = {
	path: path,
	gulp: gulp,
}

import {clean} from './gulp/tasks/clean.js';
import {html} from './gulp/tasks/html.js';
import {scss} from './gulp/tasks/scss.js'

const gulpDefaultFunction = gulp.series(
  clean,
  gulp.parallel(html,scss)
)

gulp.task("default", gulpDefaultFunction);