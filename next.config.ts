import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build the whole site into plain HTML/CSS/JS files in the `out/` folder.
  // Netlify then serves those files directly — no Node.js server needed.
  output: "export",

  // next/image normally resizes images on a server. A static site has no
  // server, so we tell Next.js to serve images as-is.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
