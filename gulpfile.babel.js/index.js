import { series, parallel } from "gulp";

import { cleanTask } from "./tasks/cleanTask";
import { stylesTask } from "./tasks/stylesTask";

export const buildTask = series(cleanTask, stylesTask);

export { cleanTask, stylesTask, buildTask as default };
