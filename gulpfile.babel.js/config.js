import pkgJSON from "../package.json";

export const config = {
  root: {
    in: "source/",
    out: "build/",
  },
  styles: {
    in: "source/styles/styles.scss",
    out: "build/css/",
  },
  html: {
    in: "source/index.html",
    out: "build/",
    context: {
      author: pkgJSON.author,
      version: pkgJSON.version,
    },
  },
  images: {
    in: "source/images/**/*",
    out: "build/images/",
  },
  scripts: {
    in: "source/scripts/**/*",
    out: "build/scripts/",
    concat: "bundle.js" 
  }
};
