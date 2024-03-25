/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/i, // You can add more video formats here
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/public',
            outputPath: 'static/videos/',
            name: '[name].[ext]',
          },
        },
      ],
    });
    return config;
  }
}

module.exports = nextConfig

const withVideos = require('next-videos')

module.exports = withVideos()
