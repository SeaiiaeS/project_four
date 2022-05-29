import * as nodePath from 'path';
const rootFolder =nodePath.basename(nodePath.resolve())

const buildFolder= './build';
const srcFolder= './src';


export const path = {
	build: {
        files: `${buildFolder}/`,
        css:`${buildFolder}/css`
    },
	src: {
        html: `${srcFolder}/index.html`,
        scss: `${srcFolder}/index.scss`,
    },
	watch: {
        html: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/**/*.scss`,
    },
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder
}