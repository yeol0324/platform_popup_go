/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  // TODO: 상용에서 true로 빌드
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "variables.module.scss";`,
  },
};

module.exports = nextConfig;
