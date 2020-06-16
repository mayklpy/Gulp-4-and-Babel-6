import { src, dest } from "gulp";
import preprocess from "gulp-preprocess";
import { config } from "../config";

export const htmlTask = (cb) => {
  src(config.html.in)
    .pipe(
      preprocess({
        context: config.html.context,
      })
    )
    .pipe(dest(config.html.out));

  cb();
};
