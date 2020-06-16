import { src, dest } from "gulp";
import babel from "gulp-babel";
import sourcemaps from "gulp-sourcemaps";
import concat from "gulp-concat";
import { config } from "../config";

export const scriptsTask = (cb) => {
  src(config.scripts.in)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat(config.scripts.concat))
    .pipe(sourcemaps.write("."))
    .pipe(dest(config.scripts.out));
    
  cb();
};
