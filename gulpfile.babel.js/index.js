import { series, parallel } from "gulp";

import { cleanTask } from "./tasks/cleanTask";

export const buildTask = series(cleanTask);

export { cleanTask, buildTask as default };
