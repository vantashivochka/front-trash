/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 640, 768, 1024, 1280, 1536],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
