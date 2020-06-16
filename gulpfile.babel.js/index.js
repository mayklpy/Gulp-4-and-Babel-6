import { series, parallel } from "gulp";

import { cleanTask } from "./tasks/cleanTask";
import { stylesTask } from "./tasks/stylesTask";
import { htmlTask } from "./tasks/htmlTask";

export const buildTask = series(cleanTask, parallel(htmlTask, stylesTask));

export { cleanTask, htmlTask, stylesTask, buildTask as default };
