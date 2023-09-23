/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "wellup.ro",
      "i.ibb.co",
      "img.freepik.com",
      "firebasestorage.googleapis.com",
    ], // Add the domain(s) you want to allow
  },
};

module.exports = nextConfig;
