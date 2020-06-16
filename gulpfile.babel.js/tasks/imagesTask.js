import { src, dest } from "gulp";
import newer from "gulp-newer";
import image from "gulp-image";
import { config } from "../config";

export const imagesTask = (cb) => {
  src(config.images.in)
    .pipe(newer(config.images.out))
    .pipe(image())
    .pipe(dest(config.images.out));

  cb();
};
