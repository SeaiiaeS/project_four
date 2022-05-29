import * as nodePath from 'path';
const rootFolder =nodePath.basename(nodePath.resolve())

const buildFolder= './build';
const srcFolder= './src';
const imageFolder = `${srcFolder}/image/**`


export const path = {
	build: {
        files: `${buildFolder}/`,
        cssFolder:`${buildFolder}/css`,
        imageFolder:`${buildFolder}/image`,
        html:`${buildFolder}/index.html`,
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
    imageFolder:imageFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder
}