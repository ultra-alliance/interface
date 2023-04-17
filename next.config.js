/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  images: {
    unoptimized: true,
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: {
        loader: 'ts-loader',
        options: {
          compilerOptions: {
            noEmit: false,
            // Additional options for the TypeScript loader (optional)
          },
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
