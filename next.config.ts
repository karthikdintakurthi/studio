import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.stackandsprout.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'realandvibrant.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.rachelcooks.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'immune-schein.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.ohhowcivilized.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'rachelcooksthai.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.chelseasmessyapron.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'healthy.ucdavis.edu',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store',
          },
        ],
      },
    ];
  },
  experimental: {
    // Other experimental features can be added here.
  },
  allowedDevOrigins: [
    'https://6000-firebase-studio-1754170879791.cluster-f4iwdviaqvc2ct6pgytzw4xqy4.cloudworkstations.dev',
  ],
};

export default nextConfig;
