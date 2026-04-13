import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Keeps output file tracing scoped to this project when other lockfiles exist nearby.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
