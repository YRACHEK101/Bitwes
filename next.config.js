/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['bitwes.vercel.app']
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
}

module.exports = nextConfig;