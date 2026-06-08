import { spawn } from "child_process";

const runner = process.env.RUNNER || "tsx";

if (runner === "nodemon") {
  spawn("nodemon", ["src/server.js"], { stdio: "inherit", shell: true });
} else {
  spawn("tsx", ["src/server.js"], { stdio: "inherit", shell: true });
}

// Backup Scripts - use the following if not using scripts
// "dev": "node scripts/dev.js"
