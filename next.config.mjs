/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Note: optimizePackageImports can occasionally cause dev-time chunk resolution issues on Windows.
  // If needed, re-enable with a minimal list (e.g., ["firebase/app"]).
};

export default nextConfig;
