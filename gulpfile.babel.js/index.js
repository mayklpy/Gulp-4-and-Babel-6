import { series, parallel } from "gulp";

import { cleanTask } from "./tasks/cleanTask";
import { stylesTask } from "./tasks/stylesTask";
import { htmlTask } from "./tasks/htmlTask";
import { imagesTask } from "./tasks/imagesTask";
import { scriptsTask } from "./tasks/scriptsTask";
import { watchTask } from "./tasks/watchTask";

export const buildTask = series(
  cleanTask,
  parallel(htmlTask, stylesTask, scriptsTask, imagesTask),
  watchTask
);

export {
  cleanTask,
  htmlTask,
  stylesTask,
  scriptsTask,
  imagesTask,
  watchTask,
  buildTask as default,
};
