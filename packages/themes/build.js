import run from "@develsopher/esbuild-config";
import pkg from "./package.json" assert { type: "json" };

run({
  pkg,
});
