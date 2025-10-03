/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["firebase/app", "firebase/analytics", "firebase/firestore"]
  },
};

export default nextConfig;
