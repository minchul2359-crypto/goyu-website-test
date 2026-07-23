import {
  copyFileSync,
  mkdirSync,
  renameSync,
  writeFileSync
} from "node:fs";

mkdirSync("dist/.openai", { recursive: true });
copyFileSync(".openai/hosting.json", "dist/.openai/hosting.json");

renameSync("dist/server/index.js", "dist/server/app.js");
writeFileSync(
  "dist/server/index.js",
  `import handler from "./app.js";

export default {
  fetch(request) {
    return handler(request);
  }
};
`
);
