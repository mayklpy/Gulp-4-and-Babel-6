import { series, parallel } from "gulp";

import { cleanTask } from "./tasks/cleanTask";
import { stylesTask } from "./tasks/stylesTask";
import { htmlTask } from "./tasks/htmlTask";
import { imagesTask } from "./tasks/imagesTask";
import { scriptsTask } from "./tasks/scriptsTask";

export const buildTask = series(
  cleanTask,
  parallel(htmlTask, stylesTask, scriptsTask, imagesTask)
);

export {
  cleanTask,
  htmlTask,
  stylesTask,
  scriptsTask,
  imagesTask,
  buildTask as default,
};
