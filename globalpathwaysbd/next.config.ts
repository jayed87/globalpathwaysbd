import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",           // Generates static HTML into /out folder
  basePath: "/globalpathwaysbd",  
  images: {
    unoptimized: true,        // GitHub Pages can't run Next.js image optimizer
  },
};

export default nextConfig;