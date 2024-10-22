
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: isProd ? '/portfolio-website' : '',  // Set the basePath to your repo name
    assetPrefix: isProd ? '/portfolio-website/' : '',  // Set the assetPrefix to your repo name
    images: {
        unoptimized: true, // Disable Next.js image optimization for static exports
      },
};

export default nextConfig;
