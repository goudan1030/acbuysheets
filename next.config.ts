import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'fhlnblqxfzwfxsklueie.supabase.co'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
  eslint: {
    // 在生产构建时忽略 ESLint 错误
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 在生产构建时忽略类型错误
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
