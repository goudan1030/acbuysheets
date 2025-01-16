import { Config } from 'next';

const config: Config = {
  images: {
    domains: [
      'fhlnblqxfzwfxsklueie.supabase.co',
      'assets.allchinabuysheets.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https',
        hostname: '*.allchinabuysheets.com',
        pathname: '/**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default config;
