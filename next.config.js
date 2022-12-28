/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    scrollRestoration: true,
    optimizeCss: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    // loader: "akamai",
    remotePatterns: [
      {
        protocol: "https",
        // hostname: "**.ipfs.w3s.link",
        hostname: "thedial.infura-ipfs.io",
        pathname: "/ipfs/**",
      },
    ],
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
