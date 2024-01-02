/** @type {import('next').NextConfig} */
const nextConfig = {
  // TODO: 상용에서 true로 빌드
  reactStrictMode: false,
  compiler: {
    emotion: true,
  },
  experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
