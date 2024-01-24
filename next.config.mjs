import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const finalPath = `@import "${path.resolve(
  __dirname,
  "src/styles/breakpoints.scss"
)}";`
console.log("path", finalPath)
const nextConfig = {
  // sassOptions: {
  //   additionalData: finalPath,
  // },
};

export default nextConfig;

