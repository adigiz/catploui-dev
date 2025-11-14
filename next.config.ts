import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Remove trailing slashes (except for root)
      {
        source: '/:path+/',
        destination: '/:path+',
        permanent: true,
      },
      // Redirect www to non-www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.captloui.com',
          },
        ],
        destination: 'https://captloui.com/:path*',
        permanent: true,
      },
      // All existing redirects below...
      {
        source: '/menu-overview',
        destination: '/menu',
        permanent: true,
      },
      {
        source: '/location-menu',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/home-index',
        destination: '/',
        permanent: true,
      },
      {
        source: '/capt-loui-seasoning',
        destination: '/shop',
        permanent: true,
      },
      {
        source: '/locations-all',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/our-philosophy',
        destination: '/',
        permanent: true,
      },
      {
        source: '/covid19',
        destination: '/',
        permanent: true,
      },
      {
        source: '/introduction',
        destination: '/',
        permanent: true,
      },
      {
        source: '/hero-1',
        destination: '/',
        permanent: true,
      },
      {
        source: '/hero-2',
        destination: '/',
        permanent: true,
      },
      {
        source: '/montclair-beverages',
        destination: '/montclair-nj',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
