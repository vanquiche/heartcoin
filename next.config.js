/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'cloudinary',
    path: '/',
  },
};

module.exports = nextConfig;
