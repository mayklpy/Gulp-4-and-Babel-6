import { watch } from "gulp";
import { config } from "../config";
import { stylesTask } from "./stylesTask";
import { htmlTask } from "./htmlTask";
import { imagesTask } from "./imagesTask";
import { scriptsTask } from "./scriptsTask";

export const watchTask = (cb) => {
  watch(config.styles.watch, { events: "all" }, stylesTask);

  watch(config.scripts.in, { events: "all" }, scriptsTask);

  watch(config.html.watch, { events: "all"}, htmlTask);

  watch(config.images.in, { events: "all" }, imagesTask);

  cb();
};
