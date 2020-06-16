import { series, parallel } from "gulp";

import { cleanTask } from "./tasks/cleanTask";
import { stylesTask } from "./tasks/stylesTask";
import { htmlTask } from "./tasks/htmlTask";
import { imagesTask } from "./tasks/imagesTask";

export const buildTask = series(
  cleanTask,
  parallel(htmlTask, stylesTask, imagesTask)
);

export { cleanTask, htmlTask, stylesTask, imagesTask, buildTask as default };
