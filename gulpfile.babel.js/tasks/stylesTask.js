import { src, dest } from "gulp";
import sass from "gulp-sass";
import nodeSass from "node-sass";
import sourcemaps from "gulp-sourcemaps";
import { config } from "../config";

sass.compiler = nodeSass;

export const stylesTask = (cb) => {
  src(config.styles.in)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write("."))
    .pipe(dest(config.styles.out));

  cb();
};
