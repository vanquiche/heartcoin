/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/dvrs8gsj3/image/upload',
  },
};

module.exports = nextConfig;
