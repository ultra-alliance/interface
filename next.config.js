/** @type {import('next').NextConfig} */

const nextConfig = {
  // Prefer loading of ES Modules over CommonJS
  experimental: { esmExternals: true },
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  transpilePackages: [
    '@ultra-alliance/react-ultra',
    '@ultra-alliance/uikit',
    '@ultra-alliance/ultra-sdk',
  ],
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

export default nextConfig;
