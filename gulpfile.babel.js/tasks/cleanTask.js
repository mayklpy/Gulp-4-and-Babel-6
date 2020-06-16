import del from "del";
import { config } from "../config";

export const cleanTask = (cb) => {
  del([config.root.out + "*"]);
  cb();
};
