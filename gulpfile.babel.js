import { src, dest, series, parallel } from "gulp";

export const defaultTask = (cb) => {
  console.log("Default task");
  cb();
};

export { defaultTask as default };

// function defaultTask(cb) {
//   console.log("Default task");
//   cb();
// }

// exports.default = defaultTask;
